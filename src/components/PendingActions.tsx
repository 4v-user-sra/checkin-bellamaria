import { pendingActions } from '../data';
import { FadeIn } from './FadeIn';
import { CheckSquare, Sparkles } from 'lucide-react';

export function PendingActions() {
  return (
    <section id="pendencias" className="py-28 px-6 md:px-12 bg-brand-white border-t-4 border-brand-graphite/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <CheckSquare className="text-brand-coral w-8 h-8" />
            <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">
              Plano de Ação • R O P R E
            </span>
          </div>
          <h2 className="text-brand-coral mb-6 text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
            Entregas e Pendências
          </h2>
          <p className="text-lg md:text-xl text-brand-graphite font-medium leading-relaxed max-w-3xl mb-16">
            Iniciativas detalhadas para expandir o LTV, aperfeiçoar a experiência do cliente e garantir controle de margem matemática junto à operação da Bella Maria.
          </p>
        </FadeIn>

        {/* Pending Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pendingActions.map((action, idx) => (
            <FadeIn 
              key={idx} 
              delay={idx * 0.08}
              className="bg-brand-white border-2 border-brand-graphite/10 rounded-[14px] p-6 flex flex-col justify-between hover:border-brand-coral hover:shadow-lg transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-heading font-bold text-brand-graphite mb-3 leading-snug">
                  {action.title}
                </h3>

                <p className="text-sm text-brand-graphite/85 font-medium leading-relaxed mb-6">
                  {action.description}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-graphite/10 bg-brand-graphite/5 -mx-6 -mb-6 p-4 rounded-b-[12px]">
                <div className="text-[11px] uppercase tracking-wider font-bold text-brand-coral mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Impacto Estratégico
                </div>
                <div className="text-xs font-semibold text-brand-graphite leading-relaxed">
                  {action.impact}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
