import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import {
  Cpu,
  Target,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Layers,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Opsvian AI — Mission & Product Philosophy",
  description:
    "Learn why we are building Opsvian: empowering engineering teams with deterministic autonomous agents that handle operational complexity with safety and transparency.",
};

const philosophyPrinciples = [
  {
    title: "1. Determinism Over Black-Box Chaos",
    description:
      "Autonomous AI in production cannot be a game of chance. We design our agent to execute within verified Directed Acyclic Graphs (DAGs) with mathematical pre-conditions, policy validation, and deterministic rollback plans.",
  },
  {
    title: "2. Elevate Engineers, Never Replace Judgment",
    description:
      "Our mission is not to automate humans out of the loop, but to eliminate the soul-draining toil of manual alert triage, broken cron scripts, and disparate tool switching so developers can build creative products.",
  },
  {
    title: "3. Radical Transparency & Auditable Code",
    description:
      "Every prompt, decision fork, tool invocation, and API payload is recorded in tamper-proof transcripts. You never have to wonder why the agent took an action.",
  },
  {
    title: "4. Zero-Friction Frontend Architecture",
    description:
      "Modern web tools should be fast, secure, and respectful of user data. We architect our public interfaces without bulky custom backend databases, using secure client-side Formspree delivery to protect user privacy.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-16 pb-20 bg-[#f8faff] border-b border-slate-200">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="brand" className="mb-4">
              Our Mission & Principles
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
              Why We Are Building Opsvian AI
            </h1>
            <p className="mt-4 text-lg text-slate-650 leading-relaxed">
              Modern cloud software has grown extraordinarily complex. We are building the next generation
              of autonomous operations agents that tame that complexity while keeping humans firmly in control.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            <div className="p-8 sm:p-10 rounded-3xl bg-indigo-50/50 border border-indigo-100 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
                <Target className="w-6 h-6" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Our Mission</h2>
              <p className="text-slate-650 leading-relaxed text-sm sm:text-base">
                To transform enterprise operations from brittle, manual firefighting into resilient,
                self-diagnosing autonomous workflows backed by verifiable safety guardrails and complete observability.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#5B8CFF] text-white flex items-center justify-center">
                <Sparkles className="w-6 h-6" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                A world where software infrastructure is self-healing, where on-call alerts are accompanied
                by verified root-cause diagnoses, and where engineering teams focus 100% of their energy on innovation.
              </p>
            </div>
          </div>

          {/* Product Philosophy */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Engineering Values
              </span>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight mt-1">
                Our Core Product Philosophy
              </h3>
            </div>

            <div className="space-y-6">
              {philosophyPrinciples.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl border border-slate-200/90 bg-white shadow-subtle hover:border-indigo-300 transition-all space-y-2"
                >
                  <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm sm:text-base text-slate-650 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Button href="/request-demo" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Partner with Opsvian AI
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

