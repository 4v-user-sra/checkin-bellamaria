import { objectivesData, strategicImprovements } from '../data';
import { FadeIn } from './FadeIn';
import { Target, Flag, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export function Objectives() {
  return (
    <section id="objetivos" className="py-28 px-6 md:px-12 bg-brand-coral text-brand-white relative overflow-hidden">
      {/* Decorative Brand Overlays */}
      <div className="absolute -top-32 -right-32 w-[650px] h-[650px] bg-brand-accent rounded-bl-[140px] mix-blend-multiply opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-brand-dark rounded-tr-[140px] mix-blend-multiply opacity-60 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Pill & Title */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-brand-white" />
            <span className="font-bold tracking-widest uppercase text-sm text-brand-white/90">
              Avanço das OKRs & Step do Projeto • R O P R E
            </span>
          </div>
          <h2 className="text-brand-white mb-6 text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
            Objetivos & Metas de Escala
          </h2>
          <p className="text-xl text-brand-white/90 max-w-3xl font-medium leading-relaxed mb-16">
            Alinhamento entre meta financeira macro, metas de eficiência operacional (OKRs) e o plano de expansão digital para a Bella Maria.
          </p>
        </FadeIn>

        {/* Macro Objective Banner */}
        <FadeIn delay={0.1} className="bg-brand-white text-brand-graphite rounded-[14px] p-8 md:p-12 mb-16 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-brand-graphite/10">
            <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase tracking-widest text-brand-coral">
              <Flag className="w-4 h-4 text-brand-coral" /> Objetivo Estratégico Macro
            </div>
            <div className="bg-brand-coral text-brand-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Orçamento de Mídia: {objectivesData.macro.budget}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-graphite mb-4 leading-tight">
                Escalar a Operação com Margem Saudável
              </h3>
              <p className="text-base md:text-lg text-brand-graphite/85 font-medium leading-relaxed">
                {objectivesData.macro.description}
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-brand-graphite/5 border border-brand-graphite/10 p-5 rounded-[12px]">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-graphite/60 block mb-1">
                  Faturamento Atual
                </span>
                <span className="text-xl md:text-2xl font-heading font-bold text-brand-graphite block">
                  {objectivesData.macro.currentRevenue}
                </span>
                <span className="text-xs text-brand-graphite/60 mt-1 block">Base consolidada</span>
              </div>

              <div className="bg-brand-coral/10 border-2 border-brand-coral/30 p-5 rounded-[12px]">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-coral block mb-1">
                  Meta de Escala
                </span>
                <span className="text-xl md:text-2xl font-heading font-bold text-brand-coral block">
                  {objectivesData.macro.targetRevenue}
                </span>
                <span className="text-xs text-brand-coral font-medium mt-1 block">Expansão Digital</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* KRs (Key Results) Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {objectivesData.krs.map((kr, idx) => (
            <FadeIn key={idx} delay={0.2 + (idx * 0.1)} className="bg-brand-dark/70 border-2 border-brand-white/20 p-8 md:p-10 rounded-[14px] flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-brand-white text-brand-dark px-3 py-1 rounded text-xs font-mono font-bold tracking-wider uppercase">
                    {kr.code}
                  </span>
                  <span className="text-xs uppercase font-bold tracking-widest text-brand-white/70">
                    {kr.badge}
                  </span>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-brand-white leading-snug">
                  {kr.title}
                </h4>

                <div className="bg-brand-white/10 p-4 rounded-[10px] mb-4 text-sm font-semibold text-brand-white">
                  {kr.goal}
                </div>

                <p className="text-sm md:text-base text-brand-white/85 font-medium leading-relaxed mb-6">
                  {kr.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-white/15 flex items-center justify-between text-xs text-brand-white/80 font-bold">
                <span>Status de Execução:</span>
                <span className="bg-brand-white text-brand-coral px-3 py-1 rounded-full text-xs font-bold">
                  {kr.progress}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Slide 9: Melhorias Estratégicas */}
        <div id="melhorias" className="pt-8 border-t-2 border-brand-white/20">
          <FadeIn delay={0.3}>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-brand-white" />
              <span className="font-bold tracking-widest uppercase text-sm text-brand-white/90">
                Alavancas de Otimização • R O P R E
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-white mb-6">
              Melhorias Estratégicas em Andamento
            </h3>
            <p className="text-lg text-brand-white/90 font-medium mb-12 max-w-3xl">
              Ajustes finos no tráfego, criativos e comunicação no funil de checkout para elevar a taxa de conversão e blindar a marca na cabeça dos clientes.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicImprovements.map((imp, idx) => {
              const Icon = imp.icon;
              return (
                <FadeIn 
                  key={idx} 
                  delay={0.3 + (idx * 0.1)} 
                  className="bg-brand-white text-brand-graphite p-8 rounded-[12px] flex flex-col justify-between hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-[10px] bg-brand-coral flex items-center justify-center text-brand-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs uppercase font-bold tracking-wider bg-brand-coral/10 text-brand-coral px-3 py-1 rounded-full">
                        {imp.badge}
                      </span>
                    </div>

                    <h4 className="text-2xl font-heading font-bold text-brand-graphite mb-3">
                      {imp.title}
                    </h4>

                    <p className="text-sm md:text-base text-brand-graphite/85 font-medium leading-relaxed">
                      {imp.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
