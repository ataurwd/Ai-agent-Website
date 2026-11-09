export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  external?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface DemoRequestFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  jobTitle: string;
  interest: string;
  companyWebsite?: string;
  teamSize?: string;
  message?: string;
  _gotcha?: string; // Honeypot field for spam prevention
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  _gotcha?: string; // Honeypot
}

export type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export interface FormSubmissionResult {
  ok: boolean;
  message: string;
  isSimulated?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  category: "reasoning" | "tools" | "security" | "observability";
  bullets: string[];
}

export interface UseCaseItem {
  id: string;
  title: string;
  tagline: string;
  category: "devops" | "data" | "security" | "support";
  problem: string;
  solution: string;
  steps: {
    title: string;
    detail: string;
  }[];
  operationalBenefits: string[];
}

export interface IntegrationItem {
  id: string;
  name: string;
  category: "cloud" | "developer" | "communication" | "database" | "monitoring";
  description: string;
  status: "Supported" | "Plug & Play" | "Custom Webhook";
  capabilities: string[];
  docSnippet?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "security" | "integration" | "deployment";
}
