"use client";

import React, { useState } from "react";
import { FeatureItem } from "@/types";
import { Badge } from "@/components/ui/Badge";
import {
  GitMerge,
  Workflow,
  ShieldAlert,
  FileSpreadsheet,
  Box,
  Database,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Terminal,
  Activity,
  Check,
  X,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const featureIconMap: Record<string, React.ReactNode> = {
  GitMerge: <GitMerge className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
  Workflow: <Workflow className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
  Box: <Box className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
  Database: <Database className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
};

interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
  colSpan?: string;
}

export function FeatureCard({ feature, className, colSpan = "col-span-1" }: FeatureCardProps) {
  const [approvedState, setApprovedState] = useState<boolean | null>(null);

  const icon = featureIconMap[feature.iconName] || (
    <Workflow className="w-5 h-5 text-indigo-600" aria-hidden="true" />
  );

  return (
    <div
      className={cn(
        "rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-subtle hover:shadow-card-hover hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between group overflow-hidden relative",
        colSpan,
        className
      )}
    >
      <div>
        {/* Header with icon and badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
            {icon}
          </div>
          {feature.badge && (
            <Badge variant="brand" size="sm">
              {feature.badge}
            </Badge>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
          {feature.title}
        </h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {feature.description}
        </p>

        {/* Small Visual Demonstration Based on Feature ID */}
        <div className="my-5">
          {feature.id === "multi-step-planning" && (
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-1.5">
                <span className="flex items-center gap-1.5 text-indigo-400">
                  <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
                  DAG Task Engine
                </span>
                <span className="text-emerald-400 text-[10px]">Active (3 nodes)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px]">
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-indigo-400 block font-semibold">01. Triage APM</span>
                  <span className="text-slate-400">Memory leak detected</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-indigo-500/40">
                  <span className="text-indigo-400 block font-semibold">02. AST Diff</span>
                  <span className="text-slate-400">Unclosed DB connection</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-emerald-500/40">
                  <span className="text-emerald-400 block font-semibold">03. Patch Verified</span>
                  <span className="text-slate-400">0.00% error rate</span>
                </div>
              </div>
            </div>
          )}

          {feature.id === "tool-orchestration" && (
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Model Context Protocol (MCP)</span>
                <span className="text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Synced
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["AWS CloudWatch", "GitHub Actions", "Datadog", "PostgreSQL", "Slack Bot"].map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-medium text-slate-700 shadow-2xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {feature.id === "human-approval" && (
            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-900 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                  Gate: Prod DB Index
                </span>
                <span className="text-[10px] font-mono text-amber-700">Tier 2 Mutation</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setApprovedState(true)}
                  className={cn(
                    "px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1 transition-colors",
                    approvedState === true
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                  )}
                >
                  <Check className="w-3 h-3 text-emerald-600" aria-hidden="true" />
                  <span>{approvedState === true ? "Approved ✓" : "Approve"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setApprovedState(false)}
                  className={cn(
                    "px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1 transition-colors",
                    approvedState === false
                      ? "bg-rose-600 text-white"
                      : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                  )}
                >
                  <X className="w-3 h-3 text-rose-600" aria-hidden="true" />
                  <span>{approvedState === false ? "Rejected ✕" : "Reject"}</span>
                </button>
              </div>
            </div>
          )}

          {feature.id === "audit-logging" && (
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-1">
                <span>cryptographic_receipt.json</span>
                <span className="text-indigo-400">SHA-256 Verified</span>
              </div>
              <div className="text-[11px] text-slate-400 space-y-0.5">
                <p><span className="text-indigo-300">&quot;approver&quot;:</span> &quot;devops_lead@company.com&quot;,</p>
                <p><span className="text-indigo-300">&quot;mutation_type&quot;:</span> &quot;POD_RESTART_CANARY&quot;,</p>
                <p><span className="text-emerald-400">&quot;policy_status&quot;:</span> &quot;ENFORCED_PASS&quot;</p>
              </div>
            </div>
          )}

          {feature.id === "ephemeral-sandbox" && (
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-indigo-400">
                  <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
                  Ephemeral Container
                </span>
                <span className="text-emerald-400 text-[10px]">Zero State Leak</span>
              </div>
              <div className="text-[10px] text-slate-400 flex items-center justify-between bg-slate-950 p-1.5 rounded">
                <span>Egress: Restricted</span>
                <span>RAM: 64MB Quota</span>
                <span>Auto-Wipe: On Exit</span>
              </div>
            </div>
          )}

          {feature.id === "context-memory" && (
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-slate-600">
                <span className="font-semibold text-slate-800">Vector Runbook Index</span>
                <span className="text-indigo-600 font-mono text-[10px]">99.4% Recall</span>
              </div>
              <div className="p-2 rounded bg-white border border-slate-200 text-[10px] text-slate-650 flex items-center justify-between">
                <span>Retrieved: &quot;OOMKilled Incident Playbook&quot;</span>
                <span className="text-emerald-600 font-medium">Rank #1</span>
              </div>
            </div>
          )}
        </div>

        {/* Bullets */}
        {feature.bullets && feature.bullets.length > 0 && (
          <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
            {feature.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer link */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600 group-hover:text-indigo-700">
        <Link href="/product" className="inline-flex items-center gap-1 focus-visible:outline-none focus-visible:underline">
          <span>Explore architecture</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
