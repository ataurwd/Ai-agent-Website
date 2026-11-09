import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problemsData } from "@/config/site";
import { Layers, Clock, Code2, ShieldAlert } from "lucide-react";

const problemIconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-6 h-6 text-rose-600" aria-hidden="true" />,
  Clock: <Clock className="w-6 h-6 text-rose-600" aria-hidden="true" />,
  Code2: <Code2 className="w-6 h-6 text-rose-600" aria-hidden="true" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-rose-600" aria-hidden="true" />,
};

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 border-t border-b border-slate-200/80">
      <Container size="default">
        <SectionHeading
          badge="The Operational Challenge"
          badgeVariant="outline"
          title="Modern DevOps & Cloud Workflows Are Fragmented"
          subtitle="Engineering teams are overloaded with operational friction, fragile glue scripts, and endless alert fatigue."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemsData.map((prob) => {
            const icon = problemIconMap[prob.icon] || (
              <ShieldAlert className="w-6 h-6 text-rose-600" aria-hidden="true" />
            );

            return (
              <div
                key={prob.id}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-subtle hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-5">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2.5">
                    {prob.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {prob.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100">
                  <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md inline-block">
                    {prob.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

