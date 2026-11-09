import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  Cpu,
  Mail,
  Shield,
  ExternalLink,
  CheckCircle,
  HelpCircle,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  const currentYear = 2026; // Current year from metadata
  const isFormspreeConfigured = siteConfig.formspree.isConfigured();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <Container size="default">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-white group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF] rounded-lg"
              aria-label={`${siteConfig.name} Home`}
            >
              <div className="w-8 h-8 rounded-lg bg-[#5B8CFF] flex items-center justify-center text-white shadow-sm">
                <Cpu className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            {/* Formspree Status Indicator */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1.5 text-xs">
                <div
                  className={`w-2 h-2 rounded-full ${
                    isFormspreeConfigured ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                  }`}
                  aria-hidden="true"
                />
                <span className="text-slate-300 font-medium">Form Submissions:</span>
                <span className={isFormspreeConfigured ? "text-emerald-400" : "text-amber-300"}>
                  {isFormspreeConfigured ? "Formspree Active" : "Formspree Ready (Configure in .env.local)"}
                </span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Product
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/product" className="hover:text-white transition-colors">
                  Product Overview
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-white transition-colors">
                  Enterprise Use Cases
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-white transition-colors">
                  Tool Integrations
                </Link>
              </li>
              <li>
                <Link href="/request-demo" className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                  Request a Demo &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Trust & Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Security Architecture
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Inquiries
                </Link>
              </li>
              <li>
                <a
                  href="https://formspree.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors text-slate-400"
                >
                  <span>Formspree Service</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Governance */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Legal & Policy
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy (Draft)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service (Draft)
                </Link>
              </li>
              <li>
                <span className="text-xs text-slate-500 block pt-1">
                  Draft policies require final corporate legal review.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved. Zero-backend frontend architecture.
          </p>
          <div className="flex items-center gap-6">
            <span>Powered by Client-Side React & Formspree</span>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

