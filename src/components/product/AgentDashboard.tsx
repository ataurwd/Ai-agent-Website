"use client";

import React, { useState, useEffect } from "react";
import {
  Terminal,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  Sparkles,
  GitBranch,
  Layers,
  Database,
  Cloud,
  FileCode,
  Activity,
  UserCheck,
  Eye,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface StepLog {
  id: string;
  timestamp: string;
  tool: string;
  type: "info" | "tool" | "gate" | "success" | "warning";
  message: string;
  detail?: string;
}

const mockSimulationSteps: StepLog[] = [
  {
    id: "1",
    timestamp: "10:42:01.120",
    tool: "intent_engine",
    type: "info",
    message: "Deconstructed instruction: 'Diagnose 502 Bad Gateway spike in auth-service-v2'",
    detail: "Synthesized 4 sub-goals: Fetch APM error logs, inspect Kubernetes pod restart count, analyze git diff in last deployment, check DB connection pool.",
  },
  {
    id: "2",
    timestamp: "10:42:02.340",
    tool: "datadog_apm.query",
    type: "tool",
    message: "Queried APM trace: 502 status correlated with DB connection pool exhaustion (98/100 connections held)",
    detail: "Query: trace.http.status:502 AND service:auth-v2 | Duration: 240ms | Anomaly confidence: 99.4%",
  },
  {
    id: "3",
    timestamp: "10:42:03.580",
    tool: "github.compare_commits",
    type: "tool",
    message: "Identified unclosed connection in commit #8f12a9e (AuthInterceptor.ts:44)",
    detail: "PR #1402 merged 18 mins ago by developer: connection acquired in async handler without finally { conn.release() }.",
  },
  {
    id: "4",
    timestamp: "10:42:04.810",
    tool: "policy_guardrail",
    type: "gate",
    message: "GUARDRAIL CHECK: Proposed automated hotfix branch & pod rollout requires Human Approval",
    detail: "Risk Classification: Production Mutation (Tier 2). Paused execution. Interactive approval token sent to #prod-incidents Slack channel.",
  },
  {
    id: "5",
    timestamp: "10:42:06.100",
    tool: "slack_approval_gate",
    type: "success",
    message: "Approval granted by Lead DevOps Engineer (ID: @sarah.m)",
    detail: "Action authorized: Deploy hotfix patch branch fix/conn-leak-8f12 to staging, run sanity suites, canary release to production.",
  },
  {
    id: "6",
    timestamp: "10:42:07.450",
    tool: "k8s_rollout.verify",
    type: "success",
    message: "Hotfix deployed. Active connection count dropped to 14/100. HTTP 502 error rate: 0.00%",
    detail: "Resolved in 6.33 seconds. Audit log archived to immutable S3 bucket s3://audit-vault/2026/inc-8921.json.",
  },
];

export function AgentDashboard() {
  const [activeTab, setActiveTab] = useState<"terminal" | "dag" | "audit">("terminal");
  const [isRunning, setIsRunning] = useState(true);
  const [visibleSteps, setVisibleSteps] = useState<number>(4);
  const [isHumanApproved, setIsHumanApproved] = useState<boolean>(false);

  // Auto-progress demo steps
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setVisibleSteps((prev) => {
        if (prev < mockSimulationSteps.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleRestart = () => {
    setVisibleSteps(1);
    setIsRunning(true);
    setIsHumanApproved(false);
  };

  const handleSimulateApproval = () => {
    setIsHumanApproved(true);
    setVisibleSteps(6);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden text-slate-200">
      {/* Top Window Bar */}
      <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline-block">
            Opsvian Agent Console — agent-session-prod-9402.dag
          </span>
        </div>

        {/* View mode tabs */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800/80 text-xs">
          <button
            onClick={() => setActiveTab("terminal")}
            className={cn(
              "px-2.5 py-1 rounded font-medium transition-colors flex items-center gap-1.5",
              activeTab === "terminal" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"
            )}
          >
            <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Live Stream</span>
          </button>
          <button
            onClick={() => setActiveTab("dag")}
            className={cn(
              "px-2.5 py-1 rounded font-medium transition-colors flex items-center gap-1.5",
              activeTab === "dag" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"
            )}
          >
            <GitBranch className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Execution DAG</span>
          </button>
          <button
            onClick={() => setActiveTab("audit")}
            className={cn(
              "px-2.5 py-1 rounded font-medium transition-colors flex items-center gap-1.5",
              activeTab === "audit" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"
            )}
          >
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Audit JSON</span>
          </button>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRestart}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Replay Simulation"
            aria-label="Replay Simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Agent Target Instruction Strip */}
      <div className="px-4 py-2.5 bg-slate-900/40 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Badge variant="dark" size="sm" className="bg-indigo-950/80 text-indigo-300 border-indigo-700/50">
            <Sparkles className="w-3 h-3 text-indigo-400" aria-hidden="true" />
            Active Objective
          </Badge>
          <span className="font-mono text-slate-200">
            "Diagnose 502 Bad Gateway spike in auth-service-v2 and propose verified hotfix"
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" aria-hidden="true" />
            Telemetry Stream: 120 msg/sec
          </span>
          <span className="text-slate-400 font-mono text-[11px]">
            Status: <span className="text-emerald-400 font-semibold">{visibleSteps >= 6 ? "Resolved (Verified)" : "Reasoning & Executing"}</span>
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 min-h-[380px] bg-slate-950/95 font-mono text-xs sm:text-sm">
        {activeTab === "terminal" && (
          <div className="space-y-3">
            {mockSimulationSteps.slice(0, visibleSteps).map((step, idx) => (
              <div
                key={step.id}
                className={cn(
                  "p-3 sm:p-3.5 rounded-xl border transition-all animate-in fade-in slide-in-from-left-2 duration-300",
                  step.type === "gate"
                    ? "bg-amber-950/30 border-amber-500/40 text-amber-200"
                    : step.type === "success"
                    ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-200"
                    : step.type === "tool"
                    ? "bg-slate-900/80 border-slate-700/70 text-slate-300"
                    : "bg-slate-900/40 border-slate-800 text-slate-400"
                )}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">{step.timestamp}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/90 font-mono text-[11px] text-indigo-300 border border-slate-700">
                      tool: {step.tool}
                    </span>
                  </div>
                  {step.type === "gate" && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                      <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />
                      Policy Approval Required
                    </span>
                  )}
                  {step.type === "success" && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      Passed & Verified
                    </span>
                  )}
                </div>

                <p className="font-medium text-slate-100 text-xs sm:text-sm">{step.message}</p>

                {step.detail && (
                  <p className="mt-1.5 text-xs text-slate-400 bg-slate-950/60 p-2 rounded-lg border border-slate-800/80 font-mono overflow-x-auto">
                    &gt; {step.detail}
                  </p>
                )}

                {/* Interactive Human-in-the-Loop Approval Action Card */}
                {step.type === "gate" && visibleSteps < 6 && (
                  <div className="mt-3 p-3 bg-slate-900 rounded-lg border border-amber-500/50 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs">
                      <UserCheck className="w-4 h-4 text-amber-400" aria-hidden="true" />
                      <span className="text-slate-200">Simulate Human Approval Gate:</span>
                    </div>
                    <Button
                      type="button"
                      size="sm"
                      variant="primary"
                      onClick={handleSimulateApproval}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs h-8"
                      leftIcon={<CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />}
                    >
                      Authorize Remediation
                    </Button>
                  </div>
                )}
              </div>
            ))}

            {visibleSteps < mockSimulationSteps.length && (
              <div className="flex items-center gap-2 text-xs text-indigo-400 pt-2 animate-pulse">
                <Cpu className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>Agent reasoning over runtime metrics and policy rules...</span>
              </div>
            )}
          </div>
        )}

        {activeTab === "dag" && (
          <div className="p-2 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
              <span>Directed Acyclic Graph (DAG) Plan</span>
              <span className="text-emerald-400">4 of 4 Nodes Executed</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-indigo-500/40 text-xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-indigo-400">Node 1: Triage</span>
                <p className="font-semibold text-slate-200">APM Metric Pull</p>
                <p className="text-[11px] text-slate-400">Correlate 502 with pool status</p>
                <span className="inline-block text-[10px] text-emerald-400 font-medium">✓ Done (240ms)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-indigo-500/40 text-xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-indigo-400">Node 2: Pinpoint</span>
                <p className="font-semibold text-slate-200">Git Diff AST Review</p>
                <p className="text-[11px] text-slate-400">Detect leak in async interceptor</p>
                <span className="inline-block text-[10px] text-emerald-400 font-medium">✓ Done (180ms)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/50 text-xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400">Node 3: Safety</span>
                <p className="font-semibold text-slate-200">Human Approval Gate</p>
                <p className="text-[11px] text-slate-400">Tier 2 Mutation Safeguard</p>
                <span className="inline-block text-[10px] text-emerald-400 font-medium">✓ Authorized</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-400">Node 4: Verify</span>
                <p className="font-semibold text-slate-200">Canary Verification</p>
                <p className="text-[11px] text-slate-400">Telemetry recovery to 0% err</p>
                <span className="inline-block text-[10px] text-emerald-400 font-medium">✓ Verified</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              Every execution DAG is dynamically synthesized based on environment feedback. If a node fails, fallback branches are automatically engaged.
            </p>
          </div>
        )}

        {activeTab === "audit" && (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto">
            <pre>
{`{
  "audit_version": "2026.1",
  "agent_id": "opsvian-core-9402",
  "objective": "Diagnose 502 Bad Gateway spike in auth-service-v2",
  "caller": "pagerduty-webhook:incident-8921",
  "policy_evaluation": {
    "tier": "Tier_2_Mutation",
    "required_approver_role": "DevOps_Lead",
    "approval_received": true,
    "approver": "sarah.m@company.com",
    "timestamp": "2026-11-09T10:42:06.100Z"
  },
  "tools_invoked": [
    { "name": "datadog_apm.query", "latency_ms": 240, "status": 200 },
    { "name": "github.compare_commits", "latency_ms": 180, "status": 200 },
    { "name": "k8s_rollout.verify", "latency_ms": 1320, "status": 200 }
  ],
  "outcome": {
    "status": "SUCCESS_RECOVERED",
    "initial_error_rate": "18.4%",
    "final_error_rate": "0.00%",
    "mttr_seconds": 6.33
  }
}`}
            </pre>
          </div>
        )}
      </div>

      {/* Bottom Status Bar */}
      <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>Deterministic Guardrails: Active</span>
          </span>
          <span className="hidden sm:inline-block text-slate-600">|</span>
          <span className="hidden sm:inline-block">Memory Footprint: 84 MB</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-500">Latency: 28ms</span>
          <span className="text-slate-500">Zero backend requirements</span>
        </div>
      </div>
    </div>
  );
}
