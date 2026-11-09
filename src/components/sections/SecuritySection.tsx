import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  FileSpreadsheet,
  Cpu,
  KeyRound,
  EyeOff,
  CheckCircle2,
} from "lucide-react";

const securityPillars = [
  {
    icon: <KeyRound className="w-6 h-6 text-indigo-600" aria-hidden="true" />,
    title: "Least Privilege & Ephemeral Scoping",
    description:
      "Opsvian never uses root or admin credentials. Tool access operates via scoped, short-lived tokens that expire immediately upon task completion.",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-indigo-600" aria-hidden="true" />,
    title: "Deterministic Human Approval Gates",
    description:
      "State-altering mutations (restarts, rollouts, code merges) are intercepted. Execution halts until an authorized engineer provides explicit multi-factor sign-off.",
  },
  {
    icon: <EyeOff className="w-6 h-6 text-indigo-600" aria-hidden="true" />,
    title: "Zero Model Training On Customer Data",
    description:
      "Your codebases, configuration files, and telemetry logs are processed in memory and never used to train public foundation models.",
  },
  {
    icon: <FileSpreadsheet className="w-6 h-6 text-indigo-600" aria-hidden="true" />,
    title: "Tamper-Proof Cryptographic Audit Log",
    description:
      "Every prompt, tool execution, parameter payload, and response is serialized into structured JSON audit records stored in your secure object vault.",
  },
];

export function SecuritySection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 border-t border-b border-slate-200/80">
      <Container size="default">
        <SectionHeading
          badge="Enterprise Trust & Safety"
          title="Security Built Directly Into the Agent Runtime"
          subtitle="Verifiable security mechanisms ensure autonomous operations remain predictable, auditable, and firmly under human control."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {securityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-subtle hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-650 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block">
                  Policy Enforced
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Security Architecture Box */}
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <Badge variant="dark" className="bg-indigo-950 text-indigo-300 border-indigo-700">
                Verifiable Architecture Notice
              </Badge>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Honest, Transparent Security Without Marketing Fluff
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We believe security is proven through code and architectural boundaries, not fabricated badge logos.
                Opsvian operates with explicit runtime sandboxing, client-side isolation, and seamless Formspree delivery
                without storing credentials or personal data in custom databases.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Button href="/security" variant="primary" className="justify-center">
                Read Security Whitepaper
              </Button>
              <Button href="/request-demo" variant="outline" className="justify-center text-white border-slate-700 hover:bg-slate-800">
                Request Security Review
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
