import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";
import {
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Business Inquiries & Technical Support",
  description:
    "Get in touch with the Opsvian AI team for architecture reviews, enterprise licensing, or technical inquiries. Form submissions delivered directly via Formspree.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-16 pb-16 bg-gradient-to-b from-indigo-50/50 via-white to-white border-b border-slate-200/80">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="brand" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
              Contact Our Engineering Team
            </h1>
            <p className="mt-4 text-lg text-slate-650 leading-relaxed">
              Have questions about deploying Opsvian in your environment? Connect directly with
              our product and solutions architects.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 bg-white">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Business Inquiry Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Direct Business Inquiry Channels
                  </h3>
                  <p className="text-xs text-slate-600">
                    Feel free to reach out directly through our dedicated team channels:
                  </p>
                </div>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-slate-900">General Inquiries</p>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-indigo-600 hover:underline">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-slate-900">Enterprise Solutions</p>
                      <a href={`mailto:${siteConfig.contact.salesEmail}`} className="text-indigo-600 hover:underline">
                        {siteConfig.contact.salesEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-slate-900">Operating Hours & Response</p>
                      <p className="text-xs text-slate-600">{siteConfig.contact.hours}</p>
                      <p className="text-xs text-slate-500">{siteConfig.contact.responseExpectation}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-slate-900">Headquarters</p>
                      <p className="text-xs text-slate-600">{siteConfig.contact.location}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span className="font-medium">Direct Formspree client delivery</span>
                  </div>
                  <p>
                    Submissions are routed directly to our inbox via encrypted Formspree endpoints.
                    No personal data or emails are stored on web servers.
                  </p>
                </div>
              </div>

              {/* Quick Demo CTA */}
              <div className="p-6 rounded-2xl bg-indigo-900 text-white space-y-3">
                <h4 className="text-base font-bold">Looking to schedule a technical demo?</h4>
                <p className="text-xs text-indigo-200">
                  If you need a 30-minute tailored walk-through of autonomous agent capabilities,
                  use our dedicated Demo Request portal.
                </p>
                <a
                  href="/request-demo"
                  className="inline-block text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-colors shadow-sm"
                >
                  Go to Demo Request Form &rarr;
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
