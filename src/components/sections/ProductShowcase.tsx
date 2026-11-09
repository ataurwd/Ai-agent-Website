"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Terminal,
  Activity,
  Layers,
  ShieldAlert,
  GitBranch,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Lock,
  Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductShowcase() {
  const [activeView, setActiveView] = useState<"terminal" | "approval" | "diff">("terminal");

  return (
    <section className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background radial gradients */}
      <div
        className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="default">
        <SectionHeading
          badge="Product Showcase"
          badgeVariant="dark"
          dark
          title="Inside the Opsvian Agent Control Plane"
          subtitle="Real-time transparency, scoped execution, and continuous telemetry feedback for mission-critical engineering operations."
        />

        {/* View Switcher Controls */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-medium">
            <button
              type="button"
              onClick={() => setActiveView("terminal")}
              className={cn(
                "px-4 py-2 rounded-lg transition-colors flex items-center gap-2",
                activeView === "terminal" ? "bg-indigo-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
              )}
            >
              <Terminal className="w-4 h-4" aria-hidden="true" />
              <span>Incident Console</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView("approval")}
              className={cn(
                "px-4 py-2 rounded-lg transition-colors flex items-center gap-2",
                activeView === "approval" ? "bg-indigo-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
              )}
            >
              <ShieldAlert className="w-4 h-4" aria-hidden="true" />
              <span>Human Gatekeeper</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView("diff")}
              className={cn(
                "px-4 py-2 rounded-lg transition-colors flex items-center gap-2",
                activeView === "diff" ? "bg-indigo-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
              )}
            >
              <GitBranch className="w-4 h-4" aria-hidden="true" />
              <span>Patch Diff Inspector</span>
            </button>
          </div>
        </div>

        {/* Realistic Mockup Shell */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl overflow-hidden max-w-5xl mx-auto font-mono text-xs sm:text-sm">
          {/* Header bar */}
          <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-slate-400 text-xs ml-2">
                session: <span className="text-slate-200">prod-us-east-1-incident-4019</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Badge variant="dark" size="sm" className="bg-emerald-950 text-emerald-400 border-emerald-800">
                Agent Live (24ms)
              </Badge>
            </div>
          </div>

          {/* View Body */}
          <div className="p-6 sm:p-8 min-h-[360px] bg-slate-950/90">
            {activeView === "terminal" && (
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <Cpu className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-slate-300 font-bold">Goal Ingestion:</p>
                    <p className="text-slate-450 text-xs sm:text-sm mt-0.5">
                      "Autonomously investigate latency degradation on /api/v1/checkout following release v2.14.0."
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <p className="text-indigo-400">[10:14:02] &gt; Querying AWS CloudWatch p99 response times...</p>
                  <p className="text-slate-400 pl-4">Result: p99 spiked from 140ms to 4,210ms at 10:11:00 UTC.</p>
                  <p className="text-indigo-400">[10:14:05] &gt; Inspecting PostgreSQL RDS active slow query log...</p>
                  <p className="text-amber-300 pl-4">
                    Found: Missing index on orders.customer_uuid causing full sequential scan on 12M rows.
                  </p>
                  <p className="text-emerald-400">[10:14:08] &gt; Synthesizing zero-downtime CONCURRENTLY migration script...</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-indigo-500/30 text-xs">
                  <div className="flex items-center justify-between text-indigo-300 pb-2 border-b border-slate-800">
                    <span>Proposed Safe SQL Patch:</span>
                    <span className="text-slate-500">PostgreSQL 15+</span>
                  </div>
                  <pre className="mt-2 text-emerald-300 overflow-x-auto">
{`CREATE INDEX CONCURRENTLY idx_orders_customer_uuid 
ON orders (customer_uuid, created_at DESC) 
WHERE status = 'active';`}
                  </pre>
                </div>
              </div>
            )}

            {activeView === "approval" && (
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="p-5 rounded-xl bg-slate-900 border border-amber-500/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold text-xs uppercase tracking-wide">
                      <ShieldAlert className="w-4 h-4" aria-hidden="true" />
                      Human Confirmation Gate Intercept
                    </span>
                    <span className="text-xs text-slate-500">Policy: Production DB Index</span>
                  </div>

                  <p className="text-sm text-slate-200">
                    Opsvian has prepared a database migration on <span className="font-semibold text-white">production-orders-db</span>.
                    Execution will proceed in non-blocking concurrent mode.
                  </p>

                  <div className="p-3 rounded-lg bg-slate-950 text-xs text-slate-400 space-y-1">
                    <p>Estimated Execution Time: ~45 seconds</p>
                    <p>Lock Impact: Exclusive table lock duration &lt; 5ms</p>
                    <p>Required Sign-off: Database Administrator or DevOps Lead</p>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                      Approve Execution
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                    >
                      Reject & Escalate
                    </button>
                  </div>
                </div>

                <p className="text-center text-xs text-slate-500">
                  Approval requests are broadcast directly via Slack interactive messages, webhooks, or email notifications.
                </p>
              </div>
            )}

            {activeView === "diff" && (
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                  <span>Target: src/services/PaymentProcessor.ts</span>
                  <span className="text-indigo-400">Branch: fix/conn-leak-autogen</span>
                </div>
                <div className="bg-slate-900/90 rounded-lg p-3 text-xs font-mono space-y-1">
                  <p className="text-slate-500">@@ -41,7 +41,9 @@ async function processPayment(payload) &#123;</p>
                  <p className="text-slate-400">   const conn = await pool.getConnection();</p>
                  <p className="text-rose-400 bg-rose-950/40 px-1 py-0.5 rounded">-  const result = await conn.query(sql);</p>
                  <p className="text-rose-400 bg-rose-950/40 px-1 py-0.5 rounded">-  return result;</p>
                  <p className="text-emerald-400 bg-emerald-950/40 px-1 py-0.5 rounded">+  try &#123;</p>
                  <p className="text-emerald-400 bg-emerald-950/40 px-1 py-0.5 rounded">+    return await conn.query(sql);</p>
                  <p className="text-emerald-400 bg-emerald-950/40 px-1 py-0.5 rounded">+  &#125; finally &#123; conn.release(); &#125;</p>
                </div>
                <p className="text-slate-400 text-xs">
                  Opsvian validates AST syntax, executes repository test suites, and opens automated pull requests with complete benchmark diffs.
                </p>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="px-5 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Client-side interactive visualization</span>
            <Button href="/request-demo" variant="primary" size="sm" className="h-7 text-xs">
              Schedule Live Walkthrough &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
