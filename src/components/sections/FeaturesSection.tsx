import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/product/FeatureCard";
import { featuresData } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FeaturesSection() {
  // Spans configured for a 6-column Bento Grid on large screens:
  // Row 1: 4 + 2 = 6 (Full)
  // Row 2: 2 + 4 = 6 (Full)
  // Row 3: 3 + 3 = 6 (Full, 50/50 split with zero empty gaps)
  const colSpans = [
    "lg:col-span-4 md:col-span-1",
    "lg:col-span-2 md:col-span-1",
    "lg:col-span-2 md:col-span-1",
    "lg:col-span-4 md:col-span-1",
    "lg:col-span-3 md:col-span-1",
    "lg:col-span-3 md:col-span-1",
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <Container size="default">
        <SectionHeading
          badge="Verified Capabilities"
          title="Engineered for Scalable Enterprise Autonomy"
          subtitle="Explore the verified architecture that powers multi-step reasoning, tool coordination, and deterministic policy enforcement."
        />

        {/* Balanced Bento Grid (Zero empty gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
          {featuresData.map((feat, idx) => (
            <FeatureCard
              key={feat.id}
              feature={feat}
              colSpan={colSpans[idx] || "lg:col-span-2 md:col-span-1"}
            />
          ))}
        </div>

        {/* Bottom CTA to Product Page */}
        <div className="text-center pt-4">
          <Button
            href="/product"
            variant="secondary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
          >
            Explore Complete Product Capabilities
          </Button>
        </div>
      </Container>
    </section>
  );
}
