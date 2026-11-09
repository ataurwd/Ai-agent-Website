import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-indigo-50/60 border-t border-slate-200/80 relative overflow-hidden">
      {/* Background glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="default">
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl border border-slate-800 text-center max-w-5xl mx-auto">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-dot-pattern-dark opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
              <span>Transform Your Cloud Operations Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
              Ready to Put Autonomous AI to Work?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-pretty">
              Book a tailored technical walkthrough. See how Opsvian diagnoses production anomalies,
              orchestrates remediation plans, and keeps your engineers focused on building products.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/request-demo"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-lg shadow-indigo-500/25 justify-center"
                rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                Request an Enterprise Demo
              </Button>
              <Button
                href="/how-it-works"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-white border-slate-700 hover:bg-slate-900 justify-center"
              >
                Explore How It Works
              </Button>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Deterministic human approval gates</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-indigo-400" aria-hidden="true" />
                <span>Zero custom backend needed</span>
              </span>
              <span>100% Client-Side + Formspree</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

