import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutionsData } from "@/config/site";
import { Cpu, Boxes, UserCheck, FileCheck, CheckCircle2, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const solutionIconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-indigo-600" aria-hidden="true" />,
  Boxes: <Boxes className="w-6 h-6 text-indigo-600" aria-hidden="true" />,
  UserCheck: <UserCheck className="w-6 h-6 text-indigo-600" aria-hidden="true" />,
  FileCheck: <FileCheck className="w-6 h-6 text-indigo-600" aria-hidden="true" />,
};

export function SolutionSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container size="default">
        <SectionHeading
          badge="The Autonomous Solution"
          title="From Fragile Scripts to Reasoning AI Agents"
          subtitle="Opsvian bridges high-level intent with low-level execution, executing permitted operational tasks with mathematical rigor and human oversight."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutionsData.map((sol, index) => {
            const icon = solutionIconMap[sol.icon] || (
              <Cpu className="w-6 h-6 text-indigo-600" aria-hidden="true" />
            );

            return (
              <div
                key={sol.id}
                className="rounded-2xl border border-slate-200/90 p-8 hover:border-[#5B8CFF]/50 hover:shadow-card transition-all duration-300 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#f0f5ff] border border-[#c7dbff] flex items-center justify-center">
                      {icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      SOLUTION 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                    {sol.title}
                  </h3>

                  <p className="text-slate-650 leading-relaxed text-sm sm:text-base">
                    {sol.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-[#5B8CFF] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span>Enforced by policy engine & audit logs</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Banner */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B8CFF]">
              Enterprise Governance
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2 mb-4">
              Autonomous execution without sacrificing control
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Unlike experimental chatbots, Opsvian treats every operational command as a mission-critical transaction.
              High-impact mutations require multi-factor human confirmation, ensuring complete trust in production.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/security" variant="primary" className="bg-[#5B8CFF] hover:bg-[#4474f2] text-white">
                Review Security Model
              </Button>
              <Button href="/request-demo" variant="outline" className="text-white border-slate-700 hover:bg-slate-800">
                Book Technical Demo &rarr;
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

