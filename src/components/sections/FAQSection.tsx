"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqData } from "@/config/site";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First open by default

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container size="small">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know About Opsvian"
          subtitle="Honest answers regarding architecture, security gates, tool integrations, and zero-backend form delivery."
        />

        <div className="space-y-4 mb-14" role="region" aria-label="FAQ Accordion">
          {faqData.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            const contentId = `faq-answer-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <div
                key={idx}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "border-indigo-200 bg-indigo-50/20 shadow-sm"
                    : "border-slate-200/80 bg-white hover:border-slate-300"
                )}
              >
                <h3>
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-indigo-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl"
                  >
                    <span className="text-base sm:text-lg tracking-tight">{item.question}</span>
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200",
                        isOpen && "rotate-180 bg-indigo-100 text-indigo-700"
                      )}
                    >
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-650 leading-relaxed border-t border-slate-100/60 animate-in fade-in slide-in-from-top-1 duration-200"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
          <h4 className="text-base sm:text-lg font-bold text-slate-900">
            Have a question about your specific infrastructure stack?
          </h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Our engineering team is happy to review your architecture and discuss custom MCP tool integrations.
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <Button href="/contact" variant="primary" size="md">
              Ask Our Engineers
            </Button>
            <Button href="/request-demo" variant="outline" size="md">
              Schedule a Demo Call
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

