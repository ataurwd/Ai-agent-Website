import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCasesData } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Use Cases & Operational Scenarios",
  description:
    "Explore real-world scenarios where Opsvian automates cloud incident diagnosis, heals data pipeline schema drift, gathers compliance evidence, and accelerates developer PR velocity.",
};

export default function UseCasesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-indigo-50/50 via-white to-white border-b border-slate-200/80">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="brand" className="mb-4">
              Real-World Applications
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
              Validated Enterprise Use Cases
            </h1>
            <p className="mt-4 text-lg text-slate-650 leading-relaxed">
              Discover how leading engineering teams deploy Opsvian to automate mission-critical
              operations without sacrificing safety, compliance, or human authority.
            </p>
          </div>
        </Container>
      </section>

      {/* Deep-dive Scenarios */}
      <section className="py-20 bg-white">
        <Container size="default">
          <div className="space-y-16 max-w-5xl mx-auto">
            {useCasesData.map((uc, index) => (
              <div
                key={uc.id}
                id={uc.id}
                className="rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-card hover:border-indigo-200 transition-all bg-gradient-to-br from-white via-white to-slate-50/50"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <Badge variant="brand" size="md">
                    Case Study 0{index + 1} • {uc.category.toUpperCase()}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">
                    Production Verified
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
                  {uc.title}
                </h2>
                <p className="text-base sm:text-lg font-medium text-indigo-600 mb-8">
                  {uc.tagline}
                </p>

                {/* Problem & Solution Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm sm:text-base">
                  <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-100/90 text-rose-950">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-800 block mb-2">
                      The Operational Problem:
                    </span>
                    <p className="text-rose-900 leading-relaxed">{uc.problem}</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-indigo-50/70 border border-indigo-100/90 text-indigo-950">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 block mb-2">
                      The Opsvian Agent Resolution:
                    </span>
                    <p className="text-indigo-900 leading-relaxed">{uc.solution}</p>
                  </div>
                </div>

                {/* Step Breakdown */}
                <div className="mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Autonomous Execution Sequence:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {uc.steps.map((st, sidx) => (
                      <div
                        key={sidx}
                        className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1 shadow-subtle"
                      >
                        <span className="font-mono text-indigo-600 font-bold block">
                          Step 0{sidx + 1}
                        </span>
                        <p className="font-semibold text-slate-900">{st.title}</p>
                        <p className="text-slate-600">{st.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Operational Benefits */}
                <div className="pt-6 border-t border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                      Business & Technical Impact:
                    </span>
                    <ul className="space-y-1 text-xs sm:text-sm text-slate-700">
                      {uc.operationalBenefits.map((b, bidx) => (
                        <li key={bidx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button href="/request-demo" variant="primary" size="md" className="shrink-0">
                    Deploy for this Use Case &rarr;
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
