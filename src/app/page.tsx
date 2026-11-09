import React from "react";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkflowVisualization } from "@/components/product/WorkflowVisualization";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Problem Section */}
      <ProblemSection />

      {/* 3. Solution Section */}
      <SolutionSection />

      {/* 4. How It Works Interactive Preview */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
        <Container size="default">
          <SectionHeading
            badge="The 6-Stage Execution Lifecycle"
            title="How Opsvian Executes Operational Goals"
            subtitle="From initial natural language intent to sandboxed tool execution and verified remediation report."
          />
          <WorkflowVisualization />
        </Container>
      </section>

      {/* 5. Core Features Bento Grid */}
      <FeaturesSection />

      {/* 6. Product Showcase Mockup */}
      <ProductShowcase />

      {/* 7. Enterprise Use Cases */}
      <UseCasesSection />

      {/* 8. Security & Trust */}
      <SecuritySection />

      {/* 9. FAQ Accordion */}
      <FAQSection />

      {/* 10. Final CTA */}
      <FinalCTA />
    </div>
  );
}
