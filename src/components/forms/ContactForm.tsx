"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { submitToFormspree } from "@/lib/formspree";
import { ContactFormData, SubmissionStatus } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

const subjectOptions = [
  "Enterprise Partnership / Architecture",
  "Product Technical Inquiry",
  "Security & Compliance Assessment",
  "Billing or Account Question",
  "General Feedback",
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    subject: subjectOptions[0],
    message: "",
    _gotcha: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [isSimulated, setIsSimulated] = useState<boolean>(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Your name is required.";
        return "";
      case "email":
        if (!value.trim()) return "Email address is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return "Please enter a valid email address.";
        return "";
      case "subject":
        if (!value.trim()) return "Please select a subject.";
        return "";
      case "message":
        if (!value.trim()) return "Please enter your message.";
        if (value.trim().length < 10) return "Message should be at least 10 characters.";
        return "";
      default:
        return "";
    }
  };

  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    ["name", "email", "subject", "message"].forEach((key) => {
      const err = validateField(key, (formData as any)[key] || "");
      if (err) {
        newErrors[key] = err;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, (formData as any)[field] || "");
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (!validateAll()) {
      setStatus("error");
      setFeedbackMessage("Please review the highlighted fields before submitting.");
      return;
    }

    setStatus("submitting");
    setFeedbackMessage("");

    const payload = {
      ...formData,
      submittedAt: new Date().toISOString(),
      formType: "General Contact Inquiry",
      sourceUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    const result = await submitToFormspree(payload);

    if (result.ok) {
      setStatus("success");
      setFeedbackMessage(result.message);
      setIsSimulated(Boolean(result.isSimulated));
    } else {
      setStatus("error");
      setFeedbackMessage(result.message);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: subjectOptions[0],
      message: "",
      _gotcha: "",
    });
    setTouched({});
    setErrors({});
    setStatus("idle");
    setFeedbackMessage("");
    setIsSimulated(false);
  };

  if (status === "success") {
    return (
      <div
        className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-card animate-in fade-in zoom-in-95"
        role="region"
        aria-live="polite"
      >
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
        </div>
        <Badge variant="success" className="mb-2">
          Message Sent
        </Badge>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank you, {formData.name}!</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
          We have received your message regarding <span className="font-semibold text-slate-900">{formData.subject}</span>.
          A member of our team will follow up at <span className="font-semibold text-indigo-600">{formData.email}</span> shortly.
        </p>

        {isSimulated && (
          <div className="mb-6 p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-left text-xs text-amber-900">
            <p className="font-semibold mb-1">Development Preview Notice</p>
            <p>
              Submission was processed locally. Configure <code className="font-mono bg-amber-100 px-1 py-0.5 rounded">NEXT_PUBLIC_FORMSPREE_FORM_ID</code> in <code className="font-mono">.env.local</code> to route submissions to your real business email.
            </p>
          </div>
        )}

        <Button
          type="button"
          variant="outline"
          onClick={handleReset}
          leftIcon={<RotateCcw className="w-4 h-4" aria-hidden="true" />}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card">
      {status === "error" && feedbackMessage && (
        <div
          className="mb-5 p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" aria-hidden="true" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Spam honeypot */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="contact_gotcha">Leave this field blank</label>
          <input
            type="text"
            id="contact_gotcha"
            name="_gotcha"
            value={formData._gotcha}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="contact_name" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="contact_name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur("name")}
            required
            autoComplete="name"
            placeholder="John Smith"
            aria-invalid={Boolean(touched.name && errors.name)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20"
          />
          {touched.name && errors.name && (
            <p className="mt-1 text-xs text-rose-600 font-medium">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact_email" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            id="contact_email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur("email")}
            required
            inputMode="email"
            autoComplete="email"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="john@company.com"
            aria-invalid={Boolean(touched.email && errors.email)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20"
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-xs text-rose-600 font-medium">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact_company" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
            Company / Organization <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="contact_company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            autoComplete="organization"
            placeholder="Acme Corp"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        <div>
          <label htmlFor="contact_subject" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
            Inquiry Topic <span className="text-rose-500">*</span>
          </label>
          <select
            id="contact_subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20"
          >
            {subjectOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact_message" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
            Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="contact_message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur("message")}
            required
            placeholder="How can our engineering team assist you?"
            aria-invalid={Boolean(touched.message && errors.message)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 resize-y"
          />
          {touched.message && errors.message && (
            <p className="mt-1 text-xs text-rose-600 font-medium">{errors.message}</p>
          )}
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="md"
            isLoading={status === "submitting"}
            disabled={status === "submitting"}
            className="w-full justify-center"
            rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </Button>
          <p className="text-center text-xs text-slate-400 mt-3">
            Secure client submission powered by Formspree • No spam guaranteed
          </p>
        </div>
      </form>
    </div>
  );
}

