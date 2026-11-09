import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { DemoRequestForm } from "@/components/forms/DemoRequestForm";
import { Badge } from "@/components/ui/Badge";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Cpu,
  Lock,
  Workflow,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Technical Demo — Opsvian AI",
  description:
    "Schedule a customized 30-minute demonstration of Opsvian AI. See autonomous incident triage, tool orchestration, and deterministic policy guardrails tailored to your stack.",
};

const demoAssurances = [
  {
    icon: <Cpu className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
    title: "Tailored to Your Stack",
    description: "We configure the demo around your specific cloud environments (AWS, GCP, Kubernetes) and telemetry tooling.",
  },
  {
    icon: <Clock className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
    title: "Strict 30-Minute Architecture Review",
    description: "No generic sales slides. We dive straight into real execution DAGs, runtime logs, and policy guardrail configurations.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
    title: "Zero Obligation & Zero Risk",
    description: "Receive an actionable assessment of which operational workflows can be safely automated in your environment.",
  },
];

export default function RequestDemoPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50/50 min-h-screen">
      {/* Hero Header */}
      <section className="pt-14 pb-12 bg-gradient-to-b from-indigo-50/60 via-white to-slate-50/50 border-b border-slate-200/80">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="brand" className="mb-4">
              Direct Technical Demo Booking
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
              Put Opsvian to the Test on Your Workflows
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-650 leading-relaxed max-w-2xl mx-auto">
              Schedule a dedicated session with our systems engineers. Experience how autonomous agents
              tame complex incident triage, schema drift, and operational toil with zero custom backend overhead.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Conversion Form Grid */}
      <section className="py-12 sm:py-16">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
            {/* Left: The Custom React Demo Form */}
            <div className="lg:col-span-7">
              <DemoRequestForm />
            </div>

            {/* Right: Social Proof & Formspree Integration Setup Guide */}
            <div className="lg:col-span-5 space-y-6">
              {/* What to Expect Card */}
              <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-card space-y-5">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  What to Expect from Your Walkthrough
                </h3>

                <div className="space-y-4">
                  {demoAssurances.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50/80 p-3 rounded-xl border border-emerald-200/60">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span>Guaranteed response within 1 business day</span>
                </div>
              </div>

              {/* Formspree Setup Instructions for the Website Owner */}
              <div className="p-6 rounded-2xl bg-slate-900 text-slate-300 border border-slate-800 text-xs space-y-3.5 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">
                    How Formspree Handles This Form
                  </span>
                  <Badge variant="dark" size="sm" className="bg-emerald-950 text-emerald-400 border-emerald-800">
                    Frontend Only
                  </Badge>
                </div>

                <p className="text-slate-400 leading-relaxed">
                  This website does not run a custom backend server or database. Submissions are dispatched
                  directly from the client browser to the Formspree API endpoint, reaching your designated inbox.
                </p>

                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-2 text-[11px] font-mono">
                  <p className="text-indigo-300 font-semibold">// 4-Step Connection Instructions</p>
                  <p className="text-slate-400">1. Sign up free at formspree.io</p>
                  <p className="text-slate-400">2. Create form & set target email in dashboard</p>
                  <p className="text-slate-400">3. Copy your Form ID (e.g. xpznkewq)</p>
                  <p className="text-slate-400">4. Set NEXT_PUBLIC_FORMSPREE_FORM_ID in .env.local</p>
                </div>

                <div className="pt-1 flex items-center justify-between text-slate-400 text-[11px]">
                  <span>Spam protection: Honeypot enabled</span>
                  <a
                    href="https://formspree.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
                  >
                    <span>Formspree.io</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
