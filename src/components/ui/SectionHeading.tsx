import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "brand" | "outline" | "success" | "warning" | "neutral" | "dark";
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  badge,
  badgeVariant = "brand",
  title,
  subtitle,
  align = "center",
  className,
  dark = false,
}: SectionHeadingProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 sm:mb-16",
        alignStyles[align],
        className
      )}
    >
      {badge && (
        <Badge variant={dark ? "dark" : badgeVariant} className="mb-4">
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance",
          dark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-pretty",
            dark ? "text-slate-400" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

