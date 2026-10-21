import { financialOverview, campaignBreakdown, topCreatives } from '../data';
import { FadeIn } from './FadeIn';
import { 
  TrendingUp, 
  Wallet, 
  ShoppingBag, 
  Target, 
  PlaySquare, 
  MousePointerClick, 
  Eye, 
  ArrowRight, 
  Zap, 
  Percent, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export function Results() {
  return (
    <section id="resultados" className="py-28 px-6 md:px-12 bg-brand-white border-t-4 border-brand-graphite/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <FadeIn>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-brand-coral w-8 h-8" />
              <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">
                Report de Campanha • R O P R E
              </span>
            </div>
            <h2 className="text-brand-coral text-4xl md:text-[56px] leading-tight font-heading font-bold">
              Resultados Digitais ({financialOverview.period})
            </h2>
          </div>
        </FadeIn>

        {/* Master Financial Highlight Box */}
        <FadeIn delay={0.1} className="bg-brand-coral rounded-[14px] p-8 md:p-12 mb-16 relative overflow-hidden text-brand-white shadow-xl">
          {/* Decorative collage shapes */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-dark rounded-bl-[90px] mix-blend-multiply opacity-80 pointer-events-none"></div>
          <div className="absolute -bottom-16 left-[20%] w-56 h-56 bg-brand-accent rounded-tr-[90px] mix-blend-multiply opacity-90 pointer-events-none"></div>
           
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-brand-white/20">
              <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs md:text-sm text-brand-white/90">
                <Wallet className="w-5 h-5 text-brand-white" /> Faturamento Digital Gerado (Cardápio Web)
              </div>
              <div className="inline-flex items-center gap-2 bg-brand-white text-brand-coral px-4 py-1.5 rounded-full font-bold text-sm">
                <Zap className="w-4 h-4 fill-brand-coral" /> ROAS Geral: {financialOverview.roas}
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div>
                <span className="text-sm uppercase tracking-wider opacity-85 block mb-1 font-bold">Total Faturado no Período</span>
                <div className="font-heading font-bold tracking-tight whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-none">
                  <AnimatedCounter 
                    value={financialOverview.revenue} 
                    prefix="R$ " 
                  />
                </div>
              </div>
              
              <div className="bg-brand-dark/70 border border-brand-white/20 px-8 py-5 rounded-[12px] backdrop-blur-sm">
                <div className="text-xs uppercase tracking-widest text-brand-white/80 font-bold mb-1">Custo por Aquisição (CAC)</div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-brand-white mb-1">{financialOverview.cac}</div>
                <div className="text-xs text-brand-white/80 font-medium">Ticket Médio: <strong className="text-brand-white">{financialOverview.ticketMedio}</strong></div>
              </div>
            </div>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t-2 border-brand-white/20 pt-8">
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80 mb-1 font-bold">Valor Investido</div>
                <div className="text-2xl sm:text-3xl font-heading font-bold mb-1">{financialOverview.spendFormatted}</div>
                <div className="text-xs opacity-75 font-medium">Orçamento executado</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80 mb-1 font-bold flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5" /> Vendas Concluídas
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-bold mb-1">{financialOverview.purchases} compras</div>
                <div className="text-xs opacity-75 font-medium">Pedidos fechados</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80 mb-1 font-bold flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" /> Adições ao Carrinho
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-bold mb-1">{financialOverview.addToCart}</div>
                <div className="text-xs opacity-75 font-medium">Add to Cart registrados</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80 mb-1 font-bold flex items-center gap-1.5">
                  <Percent className="w-3.5 h-3.5" /> Conversão do Carrinho
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-brand-white mb-1">
                  {financialOverview.cartConversionRate}
                </div>
                <div className="text-xs opacity-75 font-medium">Do carrinho para compra</div>
              </div>
            </div>

            {/* Context Callout */}
            <div className="mt-8 pt-6 border-t border-brand-white/15 bg-brand-white/10 -mx-4 md:-mx-8 -mb-4 md:-mb-8 p-6 md:px-8 rounded-b-[12px] flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-white shrink-0 mt-0.5" />
              <p className="text-sm md:text-base font-medium leading-relaxed text-brand-white/95">
                <strong className="text-brand-white">Contexto da Conversão:</strong> {financialOverview.conversionContext}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Traffic & Operational Funnel Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          <FadeIn delay={0.1} className="bg-brand-white border-2 border-brand-graphite/10 p-6 rounded-[12px] hover:border-brand-coral transition-colors">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-coral block mb-2">Alcance Único</span>
            <div className="text-3xl md:text-4xl font-heading font-bold text-brand-graphite mb-1">{financialOverview.reachFormatted}</div>
            <p className="text-xs text-brand-graphite/70 font-medium">Pessoas impactadas na microrregião</p>
          </FadeIn>

          <FadeIn delay={0.15} className="bg-brand-white border-2 border-brand-graphite/10 p-6 rounded-[12px] hover:border-brand-coral transition-colors">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-coral block mb-2">Visualizações de Destino</span>
            <div className="text-3xl md:text-4xl font-heading font-bold text-brand-graphite mb-1">{financialOverview.viewSite}</div>
            <p className="text-xs text-brand-graphite/70 font-medium">Visitas ativas no Cardápio Web</p>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-brand-white border-2 border-brand-graphite/10 p-6 rounded-[12px] hover:border-brand-coral transition-colors">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-coral block mb-2">Cliques no Link</span>
            <div className="text-3xl md:text-4xl font-heading font-bold text-brand-graphite mb-1">{financialOverview.clicksLink.toLocaleString('pt-BR')}</div>
            <p className="text-xs text-brand-graphite/70 font-medium">CTR no link: <strong className="text-brand-graphite">{financialOverview.ctrLink}</strong> (CTR Todos: {financialOverview.ctrAll})</p>
          </FadeIn>

          <FadeIn delay={0.25} className="bg-brand-white border-2 border-brand-graphite/10 p-6 rounded-[12px] hover:border-brand-coral transition-colors">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-coral block mb-2">Total de Interações</span>
            <div className="text-3xl md:text-4xl font-heading font-bold text-brand-graphite mb-1">{financialOverview.clicksAll.toLocaleString('pt-BR')}</div>
            <p className="text-xs text-brand-graphite/70 font-medium">Cliques totais nos anúncios</p>
          </FadeIn>
        </div>

        {/* Detailed Breakdown By Campaign (Meta Ads CSV Data) */}
        <FadeIn delay={0.3} className="mb-24">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="text-brand-coral w-7 h-7" />
            <h3 className="text-brand-graphite text-2xl md:text-4xl font-heading font-bold">
              Detalhamento de Performance por Canal & Campanha
            </h3>
          </div>
          <p className="text-brand-graphite/70 font-medium mb-8 text-base md:text-lg">
            Extração auditada das campanhas ativas no gerenciador Meta Ads entre 01/10 e 20/10/2026.
          </p>

          <div className="space-y-4">
            {campaignBreakdown.map((camp, idx) => (
              <div 
                key={idx} 
                className="bg-brand-white border-2 border-brand-graphite/10 hover:border-brand-coral rounded-[12px] p-6 transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-brand-graphite/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="bg-brand-coral text-brand-white text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
                        {camp.badge}
                      </span>
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                        {camp.status}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-xl md:text-2xl text-brand-graphite">{camp.name}</h4>
                  </div>
                  <div className="flex items-center gap-4 text-right">
                    <div>
                      <div className="text-xs font-bold uppercase text-brand-graphite/50 tracking-wider">Investimento</div>
                      <div className="text-lg font-bold text-brand-graphite">{camp.spend}</div>
                    </div>
                    {camp.revenue !== "—" && (
                      <div className="bg-brand-coral/10 px-4 py-2 rounded-[8px]">
                        <div className="text-xs font-bold uppercase text-brand-coral tracking-wider">ROAS</div>
                        <div className="text-lg font-heading font-bold text-brand-coral">{camp.roas}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-sm mb-4">
                  {camp.purchases > 0 && (
                    <div className="bg-brand-graphite/5 p-3 rounded-[8px]">
                      <div className="text-xs text-brand-graphite/60 font-medium">Vendas</div>
                      <div className="text-lg font-heading font-bold text-brand-graphite">{camp.purchases} compras</div>
                    </div>
                  )}
                  {camp.revenue !== "—" && (
                    <div className="bg-brand-graphite/5 p-3 rounded-[8px]">
                      <div className="text-xs text-brand-graphite/60 font-medium">Faturamento</div>
                      <div className="text-lg font-heading font-bold text-brand-graphite">{camp.revenue}</div>
                    </div>
                  )}
                  {camp.cac !== "—" && (
                    <div className="bg-brand-graphite/5 p-3 rounded-[8px]">
                      <div className="text-xs text-brand-graphite/60 font-medium">Custo por Compra</div>
                      <div className="text-lg font-heading font-bold text-brand-graphite">{camp.cac}</div>
                    </div>
                  )}
                  {camp.ticketMedio && (
                    <div className="bg-brand-graphite/5 p-3 rounded-[8px]">
                      <div className="text-xs text-brand-graphite/60 font-medium">Ticket Médio</div>
                      <div className="text-lg font-heading font-bold text-brand-graphite">{camp.ticketMedio}</div>
                    </div>
                  )}
                  {camp.reach && (
                    <div className="bg-brand-graphite/5 p-3 rounded-[8px]">
                      <div className="text-xs text-brand-graphite/60 font-medium">Alcance Único</div>
                      <div className="text-lg font-heading font-bold text-brand-graphite">{camp.reach}</div>
                    </div>
                  )}
                  {camp.cpm && (
                    <div className="bg-brand-graphite/5 p-3 rounded-[8px]">
                      <div className="text-xs text-brand-graphite/60 font-medium">CPM Médio</div>
                      <div className="text-lg font-heading font-bold text-brand-graphite">{camp.cpm}</div>
                    </div>
                  )}
                  {camp.profileVisits && (
                    <div className="bg-brand-graphite/5 p-3 rounded-[8px]">
                      <div className="text-xs text-brand-graphite/60 font-medium">Visitas ao Perfil</div>
                      <div className="text-lg font-heading font-bold text-brand-graphite">{camp.profileVisits}</div>
                    </div>
                  )}
                  {camp.cpc && (
                    <div className="bg-brand-graphite/5 p-3 rounded-[8px]">
                      <div className="text-xs text-brand-graphite/60 font-medium">Custo por Visita</div>
                      <div className="text-lg font-heading font-bold text-brand-graphite">{camp.cpc}</div>
                    </div>
                  )}
                  {camp.addToCart > 0 && (
                    <div className="bg-brand-graphite/5 p-3 rounded-[8px]">
                      <div className="text-xs text-brand-graphite/60 font-medium">Add to Cart</div>
                      <div className="text-lg font-heading font-bold text-brand-graphite">{camp.addToCart} carrinhos</div>
                    </div>
                  )}
                </div>

                <p className="text-xs md:text-sm text-brand-graphite/80 font-medium leading-relaxed bg-brand-white p-3 rounded border border-brand-graphite/10">
                  <strong className="text-brand-graphite">Análise Estratégica:</strong> {camp.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Slide 4: Melhores Criativos Grid */}
        <div id="criativos">
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-3 mb-4">
              <PlaySquare className="text-brand-coral w-8 h-8" />
              <h3 className="text-brand-graphite text-3xl md:text-5xl font-heading font-bold">
                Melhores Criativos • R O P R E
              </h3>
            </div>
            <p className="text-lg text-brand-graphite font-medium mb-12 max-w-3xl">
              Levantamento baseado na veiculação e validações estratégicas no Meta Ads. Mensagens com forte apelo sensorial e apelo geolocalizado dominaram a tração.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topCreatives.map((creative, idx) => (
              <FadeIn 
                key={creative.id} 
                delay={0.1 + (idx * 0.1)} 
                className="bg-brand-white border-2 border-brand-graphite/10 rounded-[14px] overflow-hidden flex flex-col hover:border-brand-coral hover:shadow-xl transition-all duration-300 group"
              >
                {/* Media banner */}
                <div className="h-64 bg-brand-graphite/10 relative overflow-hidden border-b border-brand-graphite/10">
                  <img 
                    src={creative.image} 
                    alt={creative.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-brand-coral text-brand-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    Top {idx + 1}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-brand-graphite/90 text-brand-white text-xs font-mono px-2.5 py-1 rounded font-bold backdrop-blur-xs">
                    CTR: {creative.ctr}
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-brand-coral font-bold mb-1">
                      {creative.tag}
                    </div>
                    <h4 className="text-brand-graphite font-heading font-bold text-2xl mb-4 leading-tight">
                      "{creative.title}"
                    </h4>

                    {/* Performance metrics pill */}
                    <div className="bg-brand-coral/5 border border-brand-coral/15 p-4 rounded-[10px] mb-6">
                      <div className="grid grid-cols-2 gap-3 pb-3 mb-3 border-b border-brand-coral/10">
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-brand-graphite/60 font-bold">Compras</div>
                          <div className="text-2xl font-heading font-bold text-brand-coral">{creative.sales}</div>
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-brand-graphite/60 font-bold">Custo / Venda (CPV)</div>
                          <div className="text-2xl font-heading font-bold text-brand-graphite">{creative.cpv}</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-brand-graphite/60 font-bold">Valor Gerado</div>
                        <div className="text-xl font-heading font-bold text-emerald-700">{creative.revenue}</div>
                      </div>
                    </div>

                    <div className="text-sm font-medium leading-relaxed text-brand-graphite/85 bg-brand-white border border-brand-graphite/10 p-4 rounded-[10px] mb-4">
                      <strong className="text-brand-graphite block mb-1 font-bold">Insight Estratégico:</strong>
                      {creative.insight}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-graphite/10 flex items-center justify-between text-xs text-brand-graphite/60 font-medium">
                    <span>Status: <strong className="text-emerald-700">{creative.status}</strong></span>
                    <span>Meta Ads</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
