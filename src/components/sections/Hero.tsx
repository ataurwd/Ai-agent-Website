import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AgentDashboard } from "@/components/product/AgentDashboard";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Play,
  Layers,
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-gradient-to-b from-indigo-50/40 via-white to-white">
      {/* Background Glow Orbs */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-300/20 via-violet-300/20 to-cyan-200/20 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <Container size="default">
        {/* Text and Headline Area */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-12 sm:mb-16">
          {/* Announcement Badge */}
          <Link
            href="/product"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-medium mb-6 shadow-subtle hover:bg-indigo-100/60 transition-colors group"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" aria-hidden="true" />
            <span className="font-semibold">Autonomous Operations Engine</span>
            <span className="text-indigo-400">|</span>
            <span className="text-slate-600 group-hover:text-slate-900 inline-flex items-center gap-1">
              Explore Architecture &rarr;
            </span>
          </Link>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 text-balance leading-[1.12]">
            Put Autonomous AI to Work Across Your{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 bg-clip-text text-transparent">
              Cloud & Dev Stack
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-650 max-w-2xl leading-relaxed text-pretty">
            Opsvian deconstructs complex operational goals, orchestrates your existing tools with scoped
            least privilege, and resolves incidents autonomously with deterministic human-in-the-loop safeguards.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              href="/request-demo"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center shadow-lg shadow-indigo-500/20"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Request an Enterprise Demo
            </Button>
            <Button
              href="/how-it-works"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              leftIcon={<Play className="w-4 h-4 text-slate-700" aria-hidden="true" />}
            >
              Explore How It Works
            </Button>
          </div>

          {/* Proof / Assurance Points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span>Zero custom backend required</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-600" aria-hidden="true" />
              <span>Deterministic Policy Gates</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" aria-hidden="true" />
              <span>Standard Model Context Protocol (MCP)</span>
            </span>
          </div>
        </div>

        {/* Live Interactive Product Visualization */}
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-75" />
          <div className="relative">
            <AgentDashboard />
          </div>
        </div>
      </Container>
    </section>
  );
}

