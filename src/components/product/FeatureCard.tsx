import React from "react";
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
  isLarge?: boolean;
}

export function FeatureCard({ feature, className, isLarge = false }: FeatureCardProps) {
  const icon = featureIconMap[feature.iconName] || (
    <Workflow className="w-5 h-5 text-indigo-600" aria-hidden="true" />
  );

  return (
    <div
      className={cn(
        "rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-subtle hover:shadow-card-hover hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between group",
        isLarge && "lg:col-span-2",
        className
      )}
    >
      <div>
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

        {feature.bullets && feature.bullets.length > 0 && (
          <ul className="mt-4 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
            {feature.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600 group-hover:text-indigo-700">
        <Link href="/product" className="inline-flex items-center gap-1 focus-visible:outline-none focus-visible:underline">
          <span>Explore architecture</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
