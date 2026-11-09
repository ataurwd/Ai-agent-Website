import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";
import { AlertCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy (Draft)",
  description: "Privacy policy draft for Opsvian AI. Structured draft requiring corporate legal review.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 9, 2026";

  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container size="small">
        {/* Draft Disclaimer Notice */}
        <div className="mb-10 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-bold text-amber-950">Draft Legal Document — Pending Corporate Legal Counsel Review</p>
            <p className="text-amber-800 mt-1 leading-relaxed">
              This document is a professionally structured template provided for operational evaluation.
              Placeholders enclosed in brackets (e.g. [Company Legal Name], [Jurisdiction]) must be reviewed
              and formally adopted by corporate legal counsel before production publication.
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <Badge variant="outline">Legal Documentation</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 font-mono">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-650 space-y-6 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Overview & Data Philosophy</h2>
            <p>
              This Privacy Policy describes how [Opsvian Technologies Inc.] (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              collects, uses, and safeguards information when you visit our website at{" "}
              <code>{siteConfig.url}</code> or submit inquiries regarding our autonomous AI agent platform.
            </p>
            <p>
              We adhere to a privacy-first, zero-backend frontend architecture. We do not store personal customer records
              in web databases or sell contact information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when completing our Demo Request or Contact forms:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Full Name and Professional Title</li>
              <li>Work Email Address</li>
              <li>Company Name and Optional Website URL</li>
              <li>Engineering Team Size and Selected Operational Interests</li>
              <li>Any additional context or messages you choose to supply</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. How Form Inquiries Are Processed (Formspree Integration)</h2>
            <p>
              Our website utilizes Formspree (Formspree, Inc.) as a secure client-side form submission processor.
              When you submit a demo request, your data is transmitted over encrypted Transport Layer Security (TLS 1.3)
              directly to Formspree&apos;s API, which immediately forwards the inquiry to our designated enterprise email inbox.
              No credentials or personal data are stored in a website database.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Zero Foundation Model Training Guarantee</h2>
            <p>
              We explicitly state that customer inquiries, code snippets shared during technical evaluations,
              and telemetry traces analyzed by Opsvian are strictly proprietary to the customer.
              We do not use customer data, codebases, or incident transcripts to train public large language models.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Cookies and Telemetry</h2>
            <p>
              This website uses standard essential session cookies required for frontend performance and security.
              We do not employ invasive cross-site behavioral tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">6. Data Retention and Rights</h2>
            <p>
              You may request access to, correction of, or deletion of any contact information we have received
              by emailing our privacy representative at <code>{siteConfig.contact.email}</code>.
              Inquiries are retained only as long as necessary to conduct business discussions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">7. Contact & Legal Entity</h2>
            <p>
              [Opsvian Technologies Inc.]<br />
              Attn: Legal & Privacy Review<br />
              Address: [100 Montgomery St, Suite 400, San Francisco, CA 94104 - Placeholder]<br />
              Email: <code>{siteConfig.contact.email}</code>
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
