"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Cpu,
  Menu,
  X,
  ArrowRight,
  Shield,
  Layers,
  Wrench,
  Workflow,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-subtle py-3"
          : "bg-transparent border-b border-transparent py-4 sm:py-5"
      )}
    >
      <Container size="default">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-slate-900 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg py-1 px-1.5 -ml-1.5"
            aria-label={`${siteConfig.name} Home`}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              <Cpu className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight flex items-center gap-1.5">
                {siteConfig.name}
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-200/60">
                  AI
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-650"
            aria-label="Main Navigation"
          >
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md transition-colors relative hover:text-slate-900 hover:bg-slate-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                    isActive
                      ? "text-indigo-600 font-semibold bg-indigo-50/60"
                      : "text-slate-600"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href="/request-demo"
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              className="font-medium"
            >
              Request a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[65px] z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/80 px-6 py-6 overflow-y-auto lg:hidden flex flex-col justify-between animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
              Navigation
            </span>
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-medium transition-colors",
                    isActive
                      ? "bg-indigo-50 text-indigo-700 font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  )}
                >
                  <span>{item.title}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
                </Link>
              );
            })}
          </div>

          <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col gap-3">
            <Button
              href="/request-demo"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Request a Demo
            </Button>
            <p className="text-center text-xs text-slate-500">
              Enterprise-grade AI operations agent • No custom backend needed
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
