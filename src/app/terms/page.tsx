import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service (Draft)",
  description: "Terms of Service draft for Opsvian AI. Structured draft requiring corporate legal counsel review.",
};

export default function TermsPage() {
  const lastUpdated = "November 9, 2026";

  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container size="small">
        {/* Draft Disclaimer Notice */}
        <div className="mb-10 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-bold text-amber-950">Draft Terms — Subject to Corporate Legal Counsel Review</p>
            <p className="text-amber-800 mt-1 leading-relaxed">
              These terms are provided as a professional draft template. All business placeholders
              (e.g. [Jurisdiction], [Arbitration Rules]) must be reviewed by legal counsel before commercial execution.
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <Badge variant="outline">Governance</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500 font-mono">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-650 space-y-6 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website located at <code>{siteConfig.url}</code>, or by requesting
              a demonstration of the Opsvian AI agent platform, you agree to be bound by these Terms of Service.
              If you are agreeing on behalf of an enterprise or entity, you represent that you have authority to bind that entity.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Description of Service & Architecture</h2>
            <p>
              Opsvian AI develops autonomous operational AI agent technology designed to assist engineering teams
              with diagnostic context gathering, incident triage, and tool orchestration.
            </p>
            <p>
              The marketing website is provided on a frontend-only basis without hosting a custom backend server
              or persisting personal data in web databases. Inquiries are processed via third-party submission
              infrastructure (Formspree).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Acceptable Use Policy</h2>
            <p>You agree not to use the website or demonstration services to:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Submit fraudulent, automated spam, or malicious payloads through the demo forms.</li>
              <li>Attempt to probe, scan, or compromise our web hosting infrastructure.</li>
              <li>Reverse engineer the frontend application bundle or proprietary agent orchestration schemas.</li>
              <li>Impersonate any corporate entity or representative.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Intellectual Property</h2>
            <p>
              All trademarks, design components, software code, and architectural documentation presented on
              this website are the proprietary property of [Opsvian Technologies Inc.] or its licensors.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Disclaimer of Warranties & Limitation of Liability</h2>
            <p>
              The website and any preliminary materials are provided &quot;as is&quot; and &quot;as available&quot;
              without warranties of any kind. In no event shall [Opsvian Technologies Inc.] be liable for indirect,
              incidental, consequential, or punitive damages arising from the use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">6. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [State of California, United States],
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">7. Contact Information</h2>
            <p>
              For legal inquiries or notices regarding these Terms:<br />
              Email: <code>{siteConfig.contact.email}</code><br />
              Entity: [Opsvian Technologies Inc. - Legal Department]
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
