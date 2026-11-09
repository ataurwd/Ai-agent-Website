"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { submitToFormspree } from "@/lib/formspree";
import { DemoRequestFormData, SubmissionStatus } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  ExternalLink,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

const interestOptions = [
  "Cloud Incident Diagnosis & MTTR Reduction",
  "Autonomous Multi-Cloud Operations (AWS / GCP)",
  "Data Pipeline Schema Drift & Healing",
  "Developer CI/CD & Dependency Automation",
  "Enterprise Security Posture & Compliance Evidence",
  "Custom MCP Tool Orchestration",
  "General Operational Evaluation",
];

const teamSizeOptions = [
  "1 – 20 engineers",
  "21 – 100 engineers",
  "101 – 500 engineers",
  "500+ enterprise",
];

export function DemoRequestForm() {
  const [formData, setFormData] = useState<DemoRequestFormData>({
    fullName: "",
    workEmail: "",
    companyName: "",
    jobTitle: "",
    interest: interestOptions[0],
    companyWebsite: "",
    teamSize: teamSizeOptions[0],
    message: "",
    _gotcha: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [isSimulated, setIsSimulated] = useState<boolean>(false);
  const [showSetupGuide, setShowSetupGuide] = useState<boolean>(false);

  // Validate a single field
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 2) return "Please enter your full name.";
        return "";
      case "workEmail":
        if (!value.trim()) return "Work email is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return "Please enter a valid work email address.";
        // Friendly check for common personal email domains
        if (/@(gmail|yahoo|hotmail|outlook)\.com$/i.test(value.trim())) {
          return "Please use your corporate / work email domain.";
        }
        return "";
      case "companyName":
        if (!value.trim()) return "Company name is required.";
        return "";
      case "jobTitle":
        if (!value.trim()) return "Job title is required.";
        return "";
      case "interest":
        if (!value.trim()) return "Please select an interest.";
        return "";
      case "companyWebsite":
        if (value.trim() && !/^https?:\/\//i.test(value.trim()) && !value.includes(".")) {
          return "Please enter a valid URL (e.g., https://example.com).";
        }
        return "";
      default:
        return "";
    }
  };

  // Validate entire form before submission
  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    ["fullName", "workEmail", "companyName", "jobTitle", "interest"].forEach((key) => {
      const err = validateField(key, (formData as any)[key] || "");
      if (err) {
        newErrors[key] = err;
        isValid = false;
      }
    });

    if (formData.companyWebsite) {
      const webErr = validateField("companyWebsite", formData.companyWebsite);
      if (webErr) {
        newErrors.companyWebsite = webErr;
        isValid = false;
      }
    }

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

    // Clear error dynamically as user types (non-intrusive)
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      fullName: true,
      workEmail: true,
      companyName: true,
      jobTitle: true,
      interest: true,
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
      formType: "Demo Request",
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
      fullName: "",
      workEmail: "",
      companyName: "",
      jobTitle: "",
      interest: interestOptions[0],
      companyWebsite: "",
      teamSize: teamSizeOptions[0],
      message: "",
      _gotcha: "",
    });
    setTouched({});
    setErrors({});
    setStatus("idle");
    setFeedbackMessage("");
    setIsSimulated(false);
  };

  // SUCCESS STATE
  if (status === "success") {
    return (
      <div
        className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-10 shadow-card text-center animate-in fade-in zoom-in-95 duration-300"
        role="region"
        aria-live="polite"
      >
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner ring-8 ring-emerald-50/50">
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>

        <Badge variant="success" className="mb-3">
          Request Received
        </Badge>

        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
          Thank you, {formData.fullName.split(" ")[0]}!
        </h3>

        <p className="text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
          Your demo request for <span className="font-semibold text-slate-900">{formData.companyName}</span> has
          been successfully submitted. Our team will review your interest in{" "}
          <span className="font-medium text-indigo-600">{formData.interest}</span> and reach out to{" "}
          <span className="font-medium text-slate-900">{formData.workEmail}</span> within 1 business day.
        </p>

        {isSimulated && (
          <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-900 leading-relaxed">
            <div className="flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-amber-950 mb-1">
                  Development Preview Active
                </p>
                <p className="text-amber-800">
                  Form validation and payload packaging succeeded. To deliver submissions to your actual inbox,
                  add your Formspree Form ID in <code className="bg-amber-100/80 px-1 py-0.5 rounded font-mono">.env.local</code>.
                </p>
                <button
                  type="button"
                  onClick={() => setShowSetupGuide(true)}
                  className="mt-2 text-indigo-700 underline font-medium hover:text-indigo-900 inline-flex items-center gap-1"
                >
                  View 4-step Formspree setup guide &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            leftIcon={<RotateCcw className="w-4 h-4" aria-hidden="true" />}
          >
            Submit Another Request
          </Button>
          <Button href="/product" variant="secondary">
            Explore Product Features
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-card relative">
      {/* Formspree helper pill */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Live Conversion Form
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Request an Enterprise Demo
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setShowSetupGuide(!showSetupGuide)}
          className="text-xs text-slate-500 hover:text-indigo-600 inline-flex items-center gap-1 transition-colors bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200"
          title="Formspree Integration Details"
          aria-expanded={showSetupGuide}
        >
          <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Formspree Setup</span>
        </button>
      </div>

      {/* Optional Accordion Guide */}
      {showSetupGuide && (
        <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center justify-between font-semibold text-slate-900">
            <span>How Formspree Powers This Form (No Backend Required)</span>
            <span className="text-emerald-600 font-mono text-[11px]">Frontend-Only</span>
          </div>
          <ol className="list-decimal pl-4 space-y-1 text-slate-600">
            <li>Create an account at <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">formspree.io</a>.</li>
            <li>Create a new form and configure your destination inbox in the Formspree dashboard.</li>
            <li>Copy your 8-character Form ID (e.g., <code className="bg-slate-200/80 px-1 py-0.5 rounded font-mono">xpznkewq</code>).</li>
            <li>Set <code className="bg-slate-200/80 px-1 py-0.5 rounded font-mono">NEXT_PUBLIC_FORMSPREE_FORM_ID=your_id</code> in <code className="font-mono">.env.local</code>.</li>
          </ol>
          <p className="text-[11px] text-slate-500 pt-1">
            Submissions go directly from the client to Formspree via encrypted HTTPS. No API keys or email credentials are exposed.
          </p>
        </div>
      )}

      {/* Global Error Banner */}
      {status === "error" && feedbackMessage && (
        <div
          className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3 animate-in fade-in"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold">Unable to submit request</p>
            <p className="text-xs text-rose-700 mt-0.5">{feedbackMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot Spam Protection Field - visually hidden */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="demo_gotcha">Leave this field blank</label>
          <input
            type="text"
            id="demo_gotcha"
            name="_gotcha"
            value={formData._gotcha}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Full Name & Work Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Full Name <span className="text-rose-500" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={() => handleBlur("fullName")}
              required
              autoComplete="name"
              placeholder="e.g. Jane Doe"
              aria-invalid={Boolean(touched.fullName && errors.fullName)}
              aria-describedby={touched.fullName && errors.fullName ? "fullName-error" : undefined}
              className={cn(
                "w-full px-3.5 py-2.5 rounded-lg border text-sm transition-all focus:outline-none",
                touched.fullName && errors.fullName
                  ? "border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-500/20"
                  : "border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20"
              )}
            />
            {touched.fullName && errors.fullName && (
              <p id="fullName-error" className="mt-1 text-xs text-rose-600 font-medium" role="alert">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="workEmail"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Work Email <span className="text-rose-500" aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="workEmail"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              onBlur={() => handleBlur("workEmail")}
              required
              inputMode="email"
              autoComplete="email"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              placeholder="jane@company.com"
              aria-invalid={Boolean(touched.workEmail && errors.workEmail)}
              aria-describedby={touched.workEmail && errors.workEmail ? "workEmail-error" : undefined}
              className={cn(
                "w-full px-3.5 py-2.5 rounded-lg border text-sm transition-all focus:outline-none",
                touched.workEmail && errors.workEmail
                  ? "border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-500/20"
                  : "border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20"
              )}
            />
            {touched.workEmail && errors.workEmail && (
              <p id="workEmail-error" className="mt-1 text-xs text-rose-600 font-medium" role="alert">
                {errors.workEmail}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Company Name & Job Title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="companyName"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Company Name <span className="text-rose-500" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              onBlur={() => handleBlur("companyName")}
              required
              autoComplete="organization"
              placeholder="Acme Cloud Technologies"
              aria-invalid={Boolean(touched.companyName && errors.companyName)}
              aria-describedby={touched.companyName && errors.companyName ? "companyName-error" : undefined}
              className={cn(
                "w-full px-3.5 py-2.5 rounded-lg border text-sm transition-all focus:outline-none",
                touched.companyName && errors.companyName
                  ? "border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-500/20"
                  : "border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20"
              )}
            />
            {touched.companyName && errors.companyName && (
              <p id="companyName-error" className="mt-1 text-xs text-rose-600 font-medium" role="alert">
                {errors.companyName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="jobTitle"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Job Title <span className="text-rose-500" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              onBlur={() => handleBlur("jobTitle")}
              required
              autoComplete="organization-title"
              placeholder="VP Engineering / DevOps Lead"
              aria-invalid={Boolean(touched.jobTitle && errors.jobTitle)}
              aria-describedby={touched.jobTitle && errors.jobTitle ? "jobTitle-error" : undefined}
              className={cn(
                "w-full px-3.5 py-2.5 rounded-lg border text-sm transition-all focus:outline-none",
                touched.jobTitle && errors.jobTitle
                  ? "border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-500/20"
                  : "border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20"
              )}
            />
            {touched.jobTitle && errors.jobTitle && (
              <p id="jobTitle-error" className="mt-1 text-xs text-rose-600 font-medium" role="alert">
                {errors.jobTitle}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Primary Interest (Required) */}
        <div>
          <label
            htmlFor="interest"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            What is your primary interest? <span className="text-rose-500" aria-hidden="true">*</span>
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            onBlur={() => handleBlur("interest")}
            required
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 transition-all"
          >
            {interestOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Row 4: Company Website & Team Size (Optional) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="companyWebsite"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Company Website <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="url"
              id="companyWebsite"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              onBlur={() => handleBlur("companyWebsite")}
              inputMode="url"
              autoComplete="url"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              placeholder="https://example.com"
              aria-invalid={Boolean(touched.companyWebsite && errors.companyWebsite)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm transition-all focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20"
            />
            {touched.companyWebsite && errors.companyWebsite && (
              <p className="mt-1 text-xs text-rose-600 font-medium" role="alert">
                {errors.companyWebsite}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="teamSize"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Engineering Team Size <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <select
              id="teamSize"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            >
              {teamSizeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 5: Message (Optional) */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Specific workflows, stack, or questions <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about the cloud environments, microservices, or repetitive incidents you want to automate..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm transition-all focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 resize-y"
          />
        </div>

        {/* Submit Button & Security Note */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={status === "submitting"}
            disabled={status === "submitting"}
            className="w-full justify-center shadow-md shadow-indigo-500/20"
            rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
          >
            {status === "submitting" ? "Transmitting to Formspree..." : "Schedule Technical Demo"}
          </Button>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span>TLS encrypted • Zero backend credentials stored</span>
            </span>
            <span className="text-slate-400">Response within 1 business day</span>
          </div>
        </div>
      </form>
    </div>
  );
}

