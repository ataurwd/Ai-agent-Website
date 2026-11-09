import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { integrationsData } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Cloud,
  Code2,
  Workflow,
  Database,
  Activity,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations & Tool Ecosystem",
  description:
    "Explore supported integrations across AWS, GCP, GitHub, GitLab, Datadog, Grafana, Slack, and PostgreSQL via the open Model Context Protocol (MCP).",
};

const categoryIconMap: Record<string, React.ReactNode> = {
  cloud: <Cloud className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
  developer: <Code2 className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
  communication: <Workflow className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
  database: <Database className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
  monitoring: <Activity className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
};

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-indigo-50/50 via-white to-white border-b border-slate-200/80">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="brand" className="mb-4">
              Tool Ecosystem
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
              Native Integrations Across Your Stack
            </h1>
            <p className="mt-4 text-lg text-slate-650 leading-relaxed">
              Opsvian connects to your existing cloud infrastructure, code repositories, telemetry
              dashboards, and collaboration tools using standardized Model Context Protocol (MCP) servers.
            </p>
          </div>
        </Container>
      </section>

      {/* Honest Integrations Notice */}
      <section className="pt-8 pb-4 bg-white">
        <Container size="default">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-650 max-w-4xl mx-auto flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-slate-900 mb-0.5">Honest Compatibility Standards</p>
              <p>
                We do not display misleading marketing partner badges. Each integration listed below represents
                a verified API connector or Model Context Protocol tool module operating with scoped least-privilege tokens.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Integrations Grid */}
      <section className="py-16 bg-white">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {integrationsData.map((item) => {
              const icon = categoryIconMap[item.category] || (
                <Code2 className="w-5 h-5 text-indigo-600" aria-hidden="true" />
              );

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200/90 p-6 bg-white shadow-subtle hover:shadow-card hover:border-indigo-200 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                        {icon}
                      </div>
                      <Badge
                        variant={item.status === "Plug & Play" ? "brand" : item.status === "Supported" ? "success" : "neutral"}
                        size="sm"
                      >
                        {item.status}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="border-t border-slate-100 pt-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                        Supported Capabilities:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {item.capabilities.map((cap, cidx) => (
                          <li key={cidx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" aria-hidden="true" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-indigo-600 font-medium">
                    <span>Model Context Protocol (MCP)</span>
                    <span className="text-slate-400">Scoped Token</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Integration Request */}
          <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-8 sm:p-10 text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Have a Custom Internal Tool or Proprietary Service?</h3>
            <p className="text-sm text-indigo-200 mb-6 max-w-xl mx-auto">
              Opsvian supports the open Model Context Protocol (MCP) standard, allowing you to connect
              internal microservices and run custom tool schemas in under an hour.
            </p>
            <Button href="/request-demo" variant="primary" size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50 border-white">
              Discuss Custom MCP Integration &rarr;
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

