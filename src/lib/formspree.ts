import { FormSubmissionResult } from "@/types";

let isSubmittingLock = false;

/**
 * Submits form data directly to Formspree from the client-side.
 * No custom backend server, database, or API route is required.
 */
export async function submitToFormspree(
  formData: Record<string, any>,
  customFormId?: string
): Promise<FormSubmissionResult> {
  // Prevent duplicate submissions / concurrent dispatches
  if (isSubmittingLock) {
    return {
      ok: false,
      message: "A submission is already in progress. Please wait a moment.",
    };
  }

  // Honeypot spam protection: Formspree convention uses '_gotcha'
  if (formData._gotcha && String(formData._gotcha).trim().length > 0) {
    console.warn("[Formspree] Bot submission detected via honeypot field. Discarding silently.");
    return {
      ok: true,
      message: "Submission received.",
    };
  }

  const formId = (customFormId || process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "").trim();

  // If no Formspree ID is configured yet, provide development preview behavior with clear setup guidance
  if (!formId) {
    isSubmittingLock = true;
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.info("[Formspree Simulation] Form submitted with payload:", formData);
      return {
        ok: true,
        isSimulated: true,
        message:
          "Form submission validated successfully! [Development Preview: NEXT_PUBLIC_FORMSPREE_FORM_ID is not configured in .env.local. Add your Formspree Form ID to deliver live emails to your business inbox.]",
      };
    } finally {
      isSubmittingLock = false;
    }
  }

  isSubmittingLock = true;

  try {
    const endpoint = `https://formspree.io/f/${formId}`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok) {
      return {
        ok: true,
        message: "Thank you! Your inquiry has been submitted and sent to our team.",
      };
    }

    // Handle Formspree specific error responses
    if (data && data.errors && Array.isArray(data.errors)) {
      const errorMessages = data.errors.map((e: any) => e.message || e.field).join(", ");
      return {
        ok: false,
        message: `Formspree validation: ${errorMessages}`,
      };
    }

    if (response.status === 404) {
      return {
        ok: false,
        message:
          "The configured Formspree Form ID was not found. Please verify the NEXT_PUBLIC_FORMSPREE_FORM_ID in .env.local matches your Formspree dashboard.",
      };
    }

    return {
      ok: false,
      message: data.error || "Unable to send submission to Formspree. Please check your network and try again.",
    };
  } catch (error: any) {
    console.error("[Formspree Submission Error]", error);
    return {
      ok: false,
      message: "Network error occurred while connecting to Formspree. Please check your connection and retry.",
    };
  } finally {
    isSubmittingLock = false;
  }
}

