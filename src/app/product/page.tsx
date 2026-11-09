import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AgentDashboard } from "@/components/product/AgentDashboard";
import {
  Cpu,
  Terminal,
  Workflow,
  ShieldCheck,
  CheckCircle2,
  Boxes,
  Layers,
  ArrowRight,
  GitPullRequest,
  Lock,
  RefreshCw,
  FileCode,
  Gauge,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product Architecture & Capabilities",
  description:
    "Deep dive into the Opsvian autonomous AI agent architecture: multi-step DAG planning, Model Context Protocol (MCP) tool orchestration, and deterministic policy guardrails.",
};

const interactionModes = [
  {
    icon: <Terminal className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
    title: "Developer CLI & Terminal",
    description:
      "Engineers invoke Opsvian from the command line (e.g. `opsvian run --goal 'triage pod crash'`) or interactively within local developer environments.",
  },
  {
    icon: <Workflow className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
    title: "Slack & ChatOps Bot",
    description:
      "Mention @Opsvian in incident triage channels. The agent parses conversational context, proposes diagnostic queries, and presents 1-click approval buttons.",
  },
  {
    icon: <GitPullRequest className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
    title: "Webhook & Alert Interceptor",
    description:
      "Directly ingest webhooks from PagerDuty, Datadog, GitHub Actions, and custom systems to trigger automated triage DAGs without human delays.",
  },
];

const architectureLayers = [
  {
    name: "01. Context Synthesis Layer",
    tech: "Vectorized Runbooks & Dependency Topology",
    description:
      "Ingests raw alerts, recent pull requests, and telemetry logs. Formulates a holistic understanding of active system state.",
  },
  {
    name: "02. Reasoning & DAG Synthesis Engine",
    tech: "Dynamic Acyclic Task Generation",
    description:
      "Constructs executable sub-tasks with strict pre-conditions, dependency trees, and branch fallbacks for resilient error recovery.",
  },
  {
    name: "03. Tool Orchestration & Sandboxing",
    tech: "Model Context Protocol (MCP) Connectors",
    description:
      "Executes tool commands in ephemeral, restricted environments. Employs temporary read-only credentials for inspection queries.",
  },
  {
    name: "04. Deterministic Guardrail Interceptor",
    tech: "Policy AST & Human Gatekeeper",
    description:
      "Intercepts state mutations. Compares proposed parameters against corporate security rules before any modification can occur.",
  },
  {
    name: "05. Verification & Telemetry Recheck",
    tech: "Canary Metric Comparison & Proofing",
    description:
      "Monitors APM and metrics post-execution to mathematically verify that the system has recovered to its operational baseline.",
  },
];

export default function ProductPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Product Hero */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-indigo-50/50 via-white to-white border-b border-slate-200/80">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="brand" className="mb-4">
              Autonomous Agent Architecture
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
              The Engine Built for Complex Engineering Operations
            </h1>
            <p className="mt-4 text-lg text-slate-650 leading-relaxed">
              Explore the five core layers of the Opsvian agent runtime: from natural language intent
              extraction to sandboxed tool execution and deterministic policy enforcement.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button href="/request-demo" variant="primary" size="md">
                Schedule Architecture Walkthrough
              </Button>
              <Button href="/how-it-works" variant="outline" size="md">
                View 6-Stage Lifecycle &rarr;
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Layered Architecture Breakdown */}
      <section className="py-20 bg-white">
        <Container size="default">
          <SectionHeading
            badge="Technical Foundations"
            title="A 5-Layer Stack Built for Predictability"
            subtitle="Autonomous execution requires mathematical discipline, not probabilistic guesswork in production."
          />

          <div className="space-y-4 max-w-4xl mx-auto mb-16">
            {architectureLayers.map((layer, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-subtle hover:border-indigo-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-lg tracking-tight">
                      {layer.name}
                    </span>
                    <span className="text-xs font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200/50">
                      {layer.tech}
                    </span>
                  </div>
                  <p className="text-sm text-slate-650 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
                <div className="shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 hidden md:block" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Console Visualizer */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Live Interactive Agent Session
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Real-Time DAG Execution in Action
              </h3>
            </div>
            <AgentDashboard />
          </div>
        </Container>
      </section>

      {/* How Users Interact */}
      <section className="py-20 bg-slate-50/70 border-t border-b border-slate-200/80">
        <Container size="default">
          <SectionHeading
            badge="Developer Ergonomics"
            title="How Your Team Interacts with Opsvian"
            subtitle="Meet your engineers where they already work — whether inside Slack, the terminal CLI, or automated alerting webhooks."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {interactionModes.map((mode, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-subtle hover:shadow-card transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5">
                  {mode.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{mode.title}</h3>
                <p className="text-sm text-slate-650 leading-relaxed">{mode.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Operational Benefits Grid */}
      <section className="py-20 bg-white">
        <Container size="default">
          <SectionHeading
            badge="Measurable Impact"
            title="Operational Value Delivered to Your Team"
            subtitle="Eliminate high-friction repetitive toil while elevating reliability across your entire service ecosystem."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-3xl font-extrabold text-indigo-600 block mb-2">90%</span>
              <h4 className="text-base font-bold text-slate-900 mb-1">Faster Incident Triage</h4>
              <p className="text-xs text-slate-650 leading-relaxed">
                Context gathering across APM, telemetry, and git commits drops from 45 minutes to under 30 seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-3xl font-extrabold text-emerald-600 block mb-2">100%</span>
              <h4 className="text-base font-bold text-slate-900 mb-1">Policy-Enforced Mutations</h4>
              <p className="text-xs text-slate-650 leading-relaxed">
                Zero untracked production modifications. Every state mutation is gated by explicit human sign-off.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-3xl font-extrabold text-violet-600 block mb-2">Zero</span>
              <h4 className="text-base font-bold text-slate-900 mb-1">Custom Backend Overhead</h4>
              <p className="text-xs text-slate-650 leading-relaxed">
                Lightweight client architecture. Integrates directly via secure MCP and Formspree without maintaining server fleets.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Button href="/request-demo" variant="primary" size="lg">
              Schedule a Live Product Demo &rarr;
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

