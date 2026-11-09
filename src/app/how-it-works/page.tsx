import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkflowVisualization } from "@/components/product/WorkflowVisualization";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Brain,
  ShieldAlert,
  GitBranch,
  Terminal,
  Activity,
  Layers,
  CheckCircle2,
  Lock,
  ArrowRight,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works — Agent Execution Lifecycle",
  description:
    "Explore the step-by-step lifecycle of an Opsvian AI agent task: intent analysis, context gathering, sandboxed tool orchestration, and human confirmation gates.",
};

const technicalDeepDivePoints = [
  {
    title: "DAG Compiler & Dependency Graph",
    tag: "Planning Stage",
    description:
      "When a goal is received, the agent generates a Directed Acyclic Graph (DAG) of discrete tasks. Parallelizable tasks (like reading logs from two regions) execute simultaneously, while dependent tasks wait for upstream validation.",
  },
  {
    title: "Sandboxed Tool Environment",
    tag: "Execution Stage",
    description:
      "All tool executions run in ephemeral containers with non-root privileges. Network egress is locked down, and any secrets passed to tools are injected via temporary in-memory environment variables that are wiped on exit.",
  },
  {
    title: "State Machine & Rollback Ledger",
    tag: "Recovery Stage",
    description:
      "For every mutation attempted, Opsvian logs the prior state in an in-memory rollback ledger. If an unexpected error or downstream health check failure occurs, the agent automatically executes the pre-computed rollback script.",
  },
  {
    title: "Human Escalation Protocol",
    tag: "Governance Stage",
    description:
      "If ambiguity exceeds predefined confidence thresholds (e.g. conflicting telemetry signals or tier-1 production impact), the agent freezes execution, serializes its reasoning chain, and requests human reviewer intervention.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-indigo-50/50 via-white to-white border-b border-slate-200/80">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="brand" className="mb-4">
              Agent Lifecycle
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
              How Opsvian Operates from Intent to Verified Outcome
            </h1>
            <p className="mt-4 text-lg text-slate-650 leading-relaxed">
              Understand the complete autonomous reasoning lifecycle: how instructions are deconstructed,
              how tools are orchestrated, and how deterministic guardrails safeguard your production environment.
            </p>
          </div>
        </Container>
      </section>

      {/* Interactive Workflow Section */}
      <section className="py-20 bg-white">
        <Container size="default">
          <SectionHeading
            badge="Interactive Explorer"
            title="Step-by-Step Task Execution"
            subtitle="Click through each of the six phases below to inspect the agent's internal reasoning, tool calls, and safety gates."
          />
          <WorkflowVisualization />
        </Container>
      </section>

      {/* Technical Deep Dive for Engineers */}
      <section className="py-20 bg-slate-50/70 border-t border-b border-slate-200/80">
        <Container size="default">
          <SectionHeading
            badge="Technical Overview"
            title="The Engineering Mechanics of Autonomous Ops"
            subtitle="Built for site reliability engineers and architects who require complete transparency into execution mechanics."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14">
            {technicalDeepDivePoints.map((point, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200/60">
                      {point.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-650 leading-relaxed">{point.description}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  <span>Enforced at runtime</span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-indigo-900 text-white p-8 sm:p-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-xl font-bold">Want to see Opsvian run on your test cluster?</h4>
              <p className="text-sm text-indigo-200">
                Book a customized technical session with our systems architects.
              </p>
            </div>
            <Button
              href="/request-demo"
              variant="primary"
              size="lg"
              className="bg-white text-indigo-900 hover:bg-indigo-50 border-white shrink-0"
            >
              Request a Technical Demo
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
