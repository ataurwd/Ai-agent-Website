import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "brand" | "outline" | "success" | "warning" | "neutral" | "dark";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "brand",
  size = "md",
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    brand: "bg-[#f0f5ff] text-[#264cb5] border-[#c7dbff] ring-1 ring-[#5B8CFF]/20",
    outline: "bg-transparent text-slate-700 border-slate-200 ring-1 ring-slate-300/40",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200/80 ring-1 ring-emerald-500/10",
    warning: "bg-amber-50 text-amber-700 border-amber-200/80 ring-1 ring-amber-500/10",
    neutral: "bg-slate-100 text-slate-700 border-slate-200 ring-1 ring-slate-300/30",
    dark: "bg-slate-900 text-slate-200 border-slate-700 ring-1 ring-white/10",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs font-medium",
    md: "px-3 py-1 text-xs font-medium tracking-wide",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border shadow-sm transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

