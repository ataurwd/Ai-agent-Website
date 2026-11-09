import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  href,
  external,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 min-h-[36px] gap-1.5",
    md: "text-sm px-4 py-2.5 min-h-[44px] gap-2",
    lg: "text-base px-6 py-3.5 min-h-[50px] gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-md hover:shadow-indigo-500/20 border border-transparent",
    secondary:
      "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200/80 shadow-subtle",
    outline:
      "bg-transparent hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400",
    ghost:
      "bg-transparent hover:bg-slate-100 text-slate-750 hover:text-slate-900 border-transparent",
    dark:
      "bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 shadow-md shadow-slate-900/30",
  };

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" aria-hidden="true" />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}

