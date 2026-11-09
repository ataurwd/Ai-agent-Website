"use client";

import React, { useState } from "react";
import { workflowStepsData } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import {
  MessageSquareCode,
  BrainCircuit,
  Wrench,
  ShieldCheck,
  Terminal,
  CheckCircle2,
  ArrowRight,
  Code2,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  MessageSquareCode: <MessageSquareCode className="w-5 h-5" aria-hidden="true" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5" aria-hidden="true" />,
  Wrench: <Wrench className="w-5 h-5" aria-hidden="true" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" aria-hidden="true" />,
  Terminal: <Terminal className="w-5 h-5" aria-hidden="true" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5" aria-hidden="true" />,
};

export function WorkflowVisualization() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStepData = workflowStepsData.find((s) => s.step === activeStep) || workflowStepsData[0];

  return (
    <div className="w-full">
      {/* Step Numbers & Tabs Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
        {workflowStepsData.map((item) => {
          const isSelected = item.step === activeStep;
          return (
            <button
              key={item.step}
              type="button"
              onClick={() => setActiveStep(item.step)}
              className={cn(
                "p-3.5 rounded-xl border text-left transition-all duration-200 relative group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                isSelected
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20"
                  : "bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-subtle"
              )}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span
                  className={cn(
                    "w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-colors",
                    isSelected ? "bg-white text-indigo-700" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                  )}
                >
                  0{item.step}
                </span>
                <span className={cn("text-[10px] font-semibold uppercase tracking-wider", isSelected ? "text-indigo-100" : "text-slate-400")}>
                  {item.badge}
                </span>
              </div>
              <span className={cn("text-xs sm:text-sm font-semibold line-clamp-2", isSelected ? "text-white" : "text-slate-900")}>
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Card for Active Step */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="dark" className="bg-indigo-900/60 text-indigo-300 border-indigo-700">
                Step 0{currentStepData.step} of 06
              </Badge>
              <span className="text-xs font-mono text-slate-400">{currentStepData.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {currentStepData.title}
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {currentStepData.detail}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-indigo-400">
                <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                Deterministic Verification
              </span>
              <span>•</span>
              <span className="text-slate-300">Human-In-The-Loop Capable</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950/80 rounded-xl p-5 border border-slate-800 text-xs font-mono text-slate-300 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
                <span>Runtime Contract</span>
              </span>
              <span className="text-emerald-400">Status: Active</span>
            </div>
            <p className="text-indigo-300">
              // Step {currentStepData.step} Policy Guardrail
            </p>
            <p className="text-slate-400 leading-relaxed">
              &quot;{currentStepData.summary}&quot;
            </p>
            <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400">
              <span>Next Transition: </span>
              <span className="text-slate-200">
                {currentStepData.step < 6 ? `Step 0${currentStepData.step + 1}` : "Execution Complete"}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
            disabled={activeStep === 1}
            className="text-xs font-medium text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            &larr; Previous Stage
          </button>
          <div className="flex items-center gap-1">
            {workflowStepsData.map((s) => (
              <span
                key={s.step}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  s.step === activeStep ? "w-6 bg-indigo-500" : "bg-slate-700"
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setActiveStep((prev) => Math.min(6, prev + 1))}
            disabled={activeStep === 6}
            className="text-xs font-medium text-indigo-400 hover:text-indigo-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            Next Stage &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
