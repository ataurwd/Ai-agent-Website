import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  KeyRound,
  EyeOff,
  FileCheck,
  AlertTriangle,
  Server,
  Terminal,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Trust & Security Architecture",
  description:
    "Review the verifiable security model of Opsvian AI: deterministic human approval gates, least-privilege scoping, ephemeral sandboxing, and immutable audit logs.",
};

const securityFramework = [
  {
    icon: <Lock className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
    title: "1. Least-Privilege Scoping & RBAC",
    description:
      "All agent operations run with strictly bounded, time-expiring credentials. Read-only permissions are enforced for exploration; state mutations require designated role authorization.",
    details: [
      "No root or account-admin execution tokens permitted",
      "Dynamic token expiration immediately upon task termination",
      "Role-Based Access Control (RBAC) mapped to enterprise IAM",
    ],
  },
  {
    icon: <UserCheck className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
    title: "2. Deterministic Human-in-the-Loop Gates",
    description:
      "Autonomous reasoning does not mean unchecked authority. High-impact operations halt execution automatically until a verified engineer provides explicit approval.",
    details: [
      "Configurable mutation risk tiers (Dev vs Staging vs Prod)",
      "Interactive approval cards in Slack, Teams, or Web interface",
      "Cryptographic signature recorded with approver identity",
    ],
  },
  {
    icon: <EyeOff className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
    title: "3. Data Privacy & Zero Model Training",
    description:
      "Your intellectual property, proprietary codebase, and internal telemetry logs are strictly your own. Customer data is processed in-memory and never utilized for foundation model training.",
    details: [
      "Zero customer data retention for model fine-tuning",
      "Client-side execution boundaries with zero custom backend",
      "TLS 1.3 encryption in transit across all network connections",
    ],
  },
  {
    icon: <FileCheck className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
    title: "4. Immutable Execution Audit Logs",
    description:
      "Every prompt, decision branch, tool invocation parameter, and external response is serialized into structured, tamper-proof JSON audit records.",
    details: [
      "Direct export to enterprise S3, GCS, or SIEM platforms",
      "Complete diff capture for any code or config patches",
      "Comprehensive telemetry correlation timestamps",
    ],
  },
];

export default function SecurityPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-indigo-50/50 via-white to-white border-b border-slate-200/80">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="brand" className="mb-4">
              Enterprise Trust & Governance
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
              Security Built Into Every Agent Decision
            </h1>
            <p className="mt-4 text-lg text-slate-650 leading-relaxed">
              We engineer autonomous agents with the assumption that enterprise production environments
              demand strict safety guarantees, zero unverified mutations, and complete audit visibility.
            </p>
          </div>
        </Container>
      </section>

      {/* Honest Disclosure Banner */}
      <section className="pt-8 pb-4 bg-white">
        <Container size="default">
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 max-w-4xl mx-auto flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-bold text-amber-950 mb-1">Our Commitment to Architectural Honesty</p>
              <p className="text-amber-900 leading-relaxed">
                Rather than claiming marketing certifications that may not apply to your custom deployment,
                we document our verifiable architectural boundaries: ephemeral sandboxing, cryptographic audit trails,
                and deterministic human approval gates that you can inspect and verify directly in your code.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Framework Pillars */}
      <section className="py-16 bg-white">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {securityFramework.map((framework, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-slate-200/90 bg-white shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6">
                    {framework.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{framework.title}</h3>
                  <p className="text-sm text-slate-650 leading-relaxed mb-6">
                    {framework.description}
                  </p>

                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                      Architectural Safeguards:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {framework.details.map((d, didx) => (
                        <li key={didx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-mono text-indigo-600 font-medium">
                  Verified Guardrail Specification
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="rounded-2xl bg-slate-950 text-white p-8 sm:p-12 max-w-4xl mx-auto text-center border border-slate-800 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">Request Our Detailed Security Documentation</h3>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-6">
              Our engineering team can provide complete threat models, sandbox isolation architecture,
              and policy rule examples for your enterprise review.
            </p>
            <Button href="/request-demo" variant="primary" size="lg">
              Schedule Security Assessment &rarr;
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

