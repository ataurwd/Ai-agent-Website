import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/product/FeatureCard";
import { featuresData } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <Container size="default">
        <SectionHeading
          badge="Verified Capabilities"
          title="Engineered for Scalable Enterprise Autonomy"
          subtitle="Explore the verified architecture that powers multi-step reasoning, tool coordination, and deterministic policy enforcement."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuresData.map((feat, idx) => (
            <FeatureCard
              key={feat.id}
              feature={feat}
              isLarge={idx === 0 || idx === 3}
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
