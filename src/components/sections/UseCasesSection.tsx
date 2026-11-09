"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCasesData } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Layers,
  Shield,
  Code,
  Database,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function UseCasesSection() {
  const [filter, setFilter] = useState<string>("all");

  const filteredUseCases =
    filter === "all" ? useCasesData : useCasesData.filter((u) => u.category === filter);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container size="default">
        <SectionHeading
          badge="Enterprise Scenarios"
          title="Engineered for Real-World Engineering Stacks"
          subtitle="Explore how Opsvian drives operational velocity across cloud infrastructure, data pipelines, security posture, and developer workflows."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Use Cases" },
            { id: "devops", label: "Cloud & DevOps" },
            { id: "data", label: "Data Pipelines" },
            { id: "security", label: "SecOps & Compliance" },
            { id: "support", label: "Developer Workflows" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={cn(
                "px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border",
                filter === tab.id
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                  : "bg-white text-slate-650 hover:bg-slate-50 border-slate-200"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Use Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredUseCases.map((uc) => (
            <div
              key={uc.id}
              className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-subtle hover:shadow-card hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="brand" size="sm">
                    {uc.category.toUpperCase()}
                  </Badge>
                  <span className="text-xs text-slate-400 font-medium">Scenario Overview</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  {uc.title}
                </h3>

                <p className="text-sm font-medium text-indigo-600 mb-4">{uc.tagline}</p>

                {/* Problem vs Solution Split */}
                <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-100 text-rose-950">
                    <span className="font-bold text-rose-800 block mb-1">The Friction:</span>
                    <p className="text-rose-900/90 leading-relaxed">{uc.problem}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-indigo-950">
                    <span className="font-bold text-indigo-800 block mb-1">How Opsvian Resolves It:</span>
                    <p className="text-indigo-900/90 leading-relaxed">{uc.solution}</p>
                  </div>
                </div>

                {/* Operational Benefits */}
                <div className="border-t border-slate-100 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Verified Outcomes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-650">
                    {uc.operationalBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/use-cases"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                >
                  <span>Read full case study</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Button href="/request-demo" variant="outline" size="sm" className="text-xs">
                  Request Walkthrough
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Link to full use cases page */}
        <div className="text-center">
          <Button href="/use-cases" variant="secondary" size="lg">
            View All Detailed Enterprise Scenarios &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
}
