import { risksData } from '../data';
import { FadeIn } from './FadeIn';
import { ShieldAlert } from 'lucide-react';

export function Risks() {
  return (
    <section id="riscos" className="py-28 px-6 md:px-12 bg-brand-graphite text-brand-white relative overflow-hidden">
      {/* Decorative overlays */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-coral rounded-bl-[140px] mix-blend-multiply opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] bg-brand-dark rounded-tr-[140px] mix-blend-multiply opacity-40 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="text-brand-coral w-8 h-8" />
            <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">
              Mapeamento de Riscos • R O P R E
            </span>
          </div>
          <h2 className="text-brand-white mb-12 text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
            Premissas e Riscos do Projeto
          </h2>
        </FadeIn>

        {/* Risk Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {risksData.map((risk, idx) => (
            <FadeIn 
              key={risk.id} 
              delay={idx * 0.1}
              className="bg-brand-white/5 border border-brand-white/15 hover:border-brand-coral/60 rounded-[14px] p-6 md:p-8 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Risk Title */}
                <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-white mb-6 leading-tight">
                  {risk.title}
                </h3>

                {/* Effect on Business */}
                <div className="bg-brand-white/5 p-5 rounded-[10px] border-l-4 border-red-500">
                  <div className="text-xs uppercase tracking-wider font-bold text-red-400 mb-1">
                    Efeito no Negócio
                  </div>
                  <p className="text-sm md:text-base text-brand-white/90 leading-relaxed font-medium">
                    {risk.effect}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
