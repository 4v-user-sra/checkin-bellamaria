import { 
  TrendingUp, 
  Target, 
  AlertTriangle, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  DollarSign, 
  ShoppingBag, 
  Flame, 
  Eye, 
  MousePointerClick, 
  Repeat, 
  Clock, 
  Instagram, 
  Award, 
  UserCheck, 
  Video, 
  Layers, 
  FileSpreadsheet, 
  MessageCircle 
} from 'lucide-react';

export const presentationMeta = {
  date: "20/10/2026",
  title: "Check-in Mensal",
  brand: "Bella Maria Pizzaria Napoletana",
  methodology: "R O P R E",
  methodologyFullName: "Report • Objetivos • Premissas • Riscos • Entregas",
  period: "01/10 a 20/10/2026",
  agency: "V4 Company",
  client: "Bella Maria"
};

export const indexSections = [
  { id: "resultados", label: "Resultados", subtitle: "Report Meta Ads & CRM", tag: "Report" },
  { id: "criativos", label: "Melhores Criativos", subtitle: "Performance e Insights", tag: "Report" },
  { id: "objetivos", label: "Objetivos & OKRs", subtitle: "Avanço e Metas", tag: "Objetivos" },
  { id: "melhorias", label: "Melhorias & Escala", subtitle: "Always On e Conteúdo", tag: "Objetivos" },
  { id: "funil", label: "Funil Completo", subtitle: "Do Topo à Retenção LTV", tag: "Estratégia" },
  { id: "pendencias", label: "Pendências & Ações", subtitle: "NPS, Clientes e Destaques", tag: "Operação" },
  { id: "riscos", label: "Premissas e Riscos", subtitle: "Matriz P x I com Scores", tag: "Riscos" },
  { id: "entregas", label: "Entregas", subtitle: "Realizadas e Previstas", tag: "Entregas" },
];

export const financialOverview = {
  spend: 2481.03,
  spendFormatted: "R$ 2.481,03",
  revenue: 12809.25,
  revenueFormatted: "R$ 12.809,25",
  roas: "5,16x",
  purchases: 92,
  ticketMedio: "R$ 139,23",
  cac: "R$ 26,96",
  addToCart: 262,
  cartConversionRate: "35,1%",
  reach: 245023,
  reachFormatted: "245.023",
  impressions: 504689,
  clicksAll: 3616,
  clicksLink: 1773,
  ctrAll: "9,85%",
  ctrLink: "5,97%",
  viewSite: 878,
  period: "01/10 a 20/10/2026",
  conversionContext: "O volume de 262 adições ao carrinho convertendo em 92 vendas concluídas representa uma taxa de conversão de carrinho de 35,1%, demonstrando tráfego altamente qualificado e com forte intenção de compra imediata via Cardápio Web."
};

export const campaignBreakdown = [
  {
    name: "V4 | MANU | VENDAS | CARDAPIO WEB",
    badge: "Fundo de Funil • Conversão Direta",
    status: "Ativo",
    budget: "R$ 60,00/dia",
    spend: "R$ 850,97",
    purchases: 71,
    revenue: "R$ 10.219,95",
    roas: "12,01x",
    cac: "R$ 11,99",
    ticketMedio: "R$ 143,94",
    addToCart: 183,
    ctrLink: "1,21%",
    linkClicks: 524,
    description: "Principal motor de receita imediata. ROAS espetacular de 12x com CAC de apenas R$ 11,99 frente a um ticket médio de R$ 144."
  },
  {
    name: "V4 | MANU | REMARKETING | CARDAPIO WEB",
    badge: "Retargeting • Recuperação",
    status: "Ativo",
    budget: "R$ 20,00/dia",
    spend: "R$ 701,52",
    purchases: 17,
    revenue: "R$ 1.900,30",
    roas: "2,71x",
    cac: "R$ 41,27",
    ticketMedio: "R$ 111,78",
    addToCart: 55,
    ctrLink: "0,91%",
    linkClicks: 461,
    description: "Reimpacto em visitantes do cardápio e engajamento recente. Garante recompra e fechamento de pedidos hesitantes."
  },
  {
    name: "V4 | MANU | RECONHECIMENTO",
    badge: "Topo de Funil • Branding Regional",
    status: "Ativo",
    budget: "Orçamento estruturado",
    spend: "R$ 776,85",
    purchases: 3,
    revenue: "R$ 468,00",
    roas: "0,60x (Indireto)",
    cac: "—",
    ticketMedio: "R$ 156,00",
    addToCart: 19,
    ctrLink: "0,09%",
    linkClicks: 350,
    reach: "197.730 pessoas",
    impressions: "399.105",
    cpm: "R$ 1,95",
    description: "Atingiu quase 200 mil pessoas com CPM ultra econômico de R$ 1,95. Fixa o desejo pela pizza napoletana em Alphaville e Aldeia da Serra."
  },
  {
    name: "V4 | MANU | TRÁFEGO | SEGUIDORES",
    badge: "Meio de Funil • Atração de Perfil",
    status: "Ativo",
    budget: "R$ 8,00/dia",
    spend: "R$ 151,69",
    purchases: 1,
    revenue: "R$ 221,00",
    roas: "1,46x",
    cac: "R$ 151,69",
    ticketMedio: "R$ 221,00",
    addToCart: 5,
    ctrLink: "3,77%",
    linkClicks: 438,
    profileVisits: "379 visitas",
    cpc: "R$ 0,40",
    description: "Gerou 379 visitas ao perfil do Instagram com custo por visita de R$ 0,40, fortalecendo a base de seguidores locais."
  }
];

export const topCreatives = [
  {
    id: 1,
    title: 'Cardápio Web - Conversão',
    tag: 'Público Aberto / Retenção',
    sales: 50,
    cpv: 'R$ 27,04',
    revenue: 'R$ 6.975,55',
    ctr: '2,31%',
    insight: 'Maior motor de conversão do mês. Traz o desejo real pela pizza napoletana e impulsiona compras diretas pelo Cardápio Web.',
    image: 'https://i.imgur.com/SB9qePA.png',
    status: 'Campeão de Vendas'
  },
  {
    id: 2,
    title: 'Aldeia da Serra - Geolocalizado',
    tag: 'Convite para o Salão',
    sales: 22,
    cpv: 'R$ 10,24',
    revenue: 'R$ 3.342,00',
    ctr: '1,94%',
    insight: 'Apelo de "encurtar a viagem" para não precisar ir até São Paulo foi perfeitamente recebido pelo público de condomínios da região.',
    image: 'https://i.imgur.com/e44qRFG.png',
    status: 'Campeão de Eficiência'
  },
  {
    id: 3,
    title: 'Pizza de Outubro / Novidades',
    tag: 'Campanha Contínua Food Porn',
    sales: 18,
    cpv: 'R$ 10,74',
    revenue: 'R$ 2.020,00',
    ctr: '1,55%',
    insight: 'Cenas do produto saindo do forno com queijo derretendo e molho de tomate 100% autêntico validam a qualidade da fermentação e ingredientes.',
    image: 'https://i.imgur.com/c9tU2yr.png',
    status: 'Campeão de Retorno'
  }
];

export const objectivesData = {
  macro: {
    title: "Objetivo Macro do Projeto",
    currentRevenue: "R$ 120.000 a R$ 150.000 / mês",
    targetRevenue: "R$ 200.000+ / mês",
    budget: "R$ 3.000,00 / mês",
    description: "Escalar o faturamento atual (que gira em torno de R$ 120.000 a R$ 150.000) acelerando a expansão digital, mantendo o orçamento de mídia inicial em R$ 3.000,00 mensais com alocação técnica e foco no LTV."
  },
  krs: [
    {
      code: "KR 1",
      title: "Monitoramento e Redução do CAC",
      goal: "Mapear, acompanhar e analisar 100% dos indicadores-chave de desempenho.",
      detail: "Foco na redução sustentável do CAC atual (R$ 26,96 para R$ 15 a R$ 20) e controlando o teto de CPA tolerável de até 10% a 15% do ticket médio. O ROAS em 5,16x demonstra excelente tração e margem para escala segura.",
      progress: "Em Execução • ROAS 5,16x Validado",
      badge: "Performance"
    },
    {
      code: "KR 2",
      title: "Playbook & Padronização Step V1",
      goal: "Executar 100% do checklist e playbook do Step V1.",
      detail: "Garantir a correta implementação das boas práticas comerciais, de tráfego, gestão da base de dados e padronização da identidade visual premium em todos os canais digitais da Bella Maria.",
      progress: "85% Concluído",
      badge: "Estruturação"
    }
  ]
};

export const strategicImprovements = [
  {
    title: "Aumento Gradual e Always On",
    badge: "Mídia Contínua",
    description: "As campanhas de Reconhecimento precisam continuar operando 'Always On' (R$ 15/dia, todos os dias da semana), não pausando na sexta ou no sábado, para garantir que na hora de decidir, a marca já esteja na mente do cliente.",
    icon: Flame
  },
  {
    title: "Minissérie em Vídeo (30 Episódios)",
    badge: "Audiovisual com Léo",
    description: "Trabalhar com o videomaker Léo na gravação de uma série fragmentada de 30 pequenos episódios diários (ex: Dia 1: 'Nosso molho de tomate autêntico', Dia 2: 'Tempo de fermentação de 48h', Dia 3: 'Nossa embalagem térmica especial').",
    icon: Video
  }
];

export const projectFunnel = [
  {
    stage: "Topo de Funil",
    name: "Descoberta & Reconhecimento",
    goal: "Quebrar o gargalo de quem ainda não conhece a Bella Maria na região (raio até 10/15km).",
    actions: "Campanhas de Alcance/Reconhecimento geolocalizadas em Alphaville (Residencial Zero, 1, 2) e Aldeia da Serra.",
    message: '"Pizza Napoletana de verdade sem precisar ir até São Paulo."',
    icon: Eye,
    tag: "Alcance: 245k pessoas"
  },
  {
    stage: "Meio de Funil",
    name: "Engajamento & Consideração",
    goal: "Atração de seguidores qualificados e construção de autoridade gastronômica.",
    actions: "Conteúdo de marca, bastidores da cozinha, revelação da massa com 65% de hidratação e agilidade de entrega de 15 a 20 min.",
    message: '"Tradição italiana artesanal feita com farinha de importação direta."',
    icon: Sparkles,
    tag: "379 visitas ao perfil (CPC R$ 0,40)"
  },
  {
    stage: "Fundo de Funil",
    name: "Conversão Direta (Delivery)",
    goal: "Tráfego direto e retargeting com fechamento de pedido imediato.",
    actions: "Tráfego para o Cardápio Web (Delivery) + Campanhas de Retargeting de visitantes e engajamento recente.",
    message: '"Peça direto no Cardápio Web oficial com benefícios exclusivos."',
    icon: Target,
    tag: "92 vendas • ROAS 12x na conversão"
  },
  {
    stage: "Retenção & LTV",
    name: "Fidelização & Salão Físico",
    goal: "Maximizar o ciclo de vida do cliente (LTV) e levar o consumidor de delivery para o salão.",
    actions: "LTV Mapping, réguas de Aniversariantes, régua para promotores NPS e convite para mini bar de drinks (Aperol, Negroni).",
    message: '"Clientes frequentes acumulam até 61 recompras."',
    icon: UserCheck,
    tag: "Até 61 recompras identificadas"
  }
];

export const risksData = [
  {
    id: 3,
    title: "Demora no retorno dos materiais e captações em aprovação",
    level: "Médio",
    probability: 3,
    impact: 10,
    score: 30,
    cause: "Rotina intensa do cliente no 'chão da cozinha', atrapalhando o fluxo de gravação dos vídeos com o videomaker parceiro e o envio à equipe da V4.",
    effect: "Saturação dos criativos nas campanhas e fadiga de comunicação (aumento do custo de clique e conversão).",
    mitigation: "Gravações concentradas em lote (batching) com roteiros pré-validados."
  },
  {
    id: 4,
    title: "Falta de Feedback entre Marketing e Operação (Caixa/Salão)",
    level: "Alto",
    probability: 6,
    impact: 10,
    score: 60,
    cause: "Falhas em rastrear pessoas que foram ao balcão/salão após terem sido ativadas por uma oferta digital ou cupom de influenciador local.",
    effect: "Falta de clareza na atribuição dos resultados do PDV (Ponto de Venda) físico em relação ao tráfego.",
    mitigation: "Checklist do operador de caixa com campo de código promocional / origem do cliente."
  }
];

export const pendingActions = [
  {
    category: "Automação & CRM",
    title: "Automação de disparo para pedido com alto NPS",
    description: "Configurar no WhatsApp/CRM a régua para promotores, incentivando boca-a-boca com envio de mimos (ex: Cannoli cortesia) nos dias de menor movimento (Terças e Quartas).",
    impact: "Gera recorrência em dias ociosos e multiplica indicações de forma espontânea.",
    status: "Em configuração"
  },
  {
    category: "Conversão Cruzada",
    title: "Mensagem exclusiva para clientes de delivery irem ao salão",
    description: "Utilizar o banco de dados enriquecido (clientes de alto LTV) para estimular a primeira visita ao salão e consumir drinks (Mini bar, Aperol Spritz, Negroni).",
    impact: "Eleva o ticket médio presencial e fortalece o valor afetivo da marca física.",
    status: "Roteiro pronto"
  },
  {
    category: "Experiência WOW",
    title: "Ação especial para cliente de maior recorrência",
    description: "Criar um momento 'wow' inesquecível. Exemplo mapeado: Cliente Fernando Schoder, com mais de 30 pedidos do Alphaville Residencial Zero. Emoldurar a caixa com mensagem personalizada e enviar de brinde.",
    impact: "Gera fidelidade extrema e alto potencial de compartilhamento orgânico em condomínios fechados.",
    status: "Em alinhamento"
  },
  {
    category: "Parcerias Locais",
    title: "Cupom exclusivo para influenciadores locais",
    description: "Ativar estratégia de captação orgânica via afiliados da região de Alphaville e Aldeia da Serra, remunerando comissão/bonificação por resultado gerado via Cardápio Web.",
    impact: "Canal de aquisição com risco zero e endosso social forte.",
    status: "Em prospecção"
  },
  {
    category: "Gestão Financeira",
    title: "Planilha de volume e margem de cada produto (CMV)",
    description: "Avançar na documentação do CMV, aluguel, plataforma e demais custos junto com o Rodrigo. Fundamental para definição de viabilidade e acompanhamento de ofertas sem afetar a lucratividade.",
    impact: "Segurança matemática para escalar verba de tráfego com margem garantida.",
    status: "Aguardando insumos"
  }
];

export const deliverablesData = {
  done: [
    {
      title: "Onboarding Estratégico Completo",
      detail: "Condução da Growth Class, reunião de Kickoff e Aprovação oficial do Planejamento Estratégico."
    },
    {
      title: "Diretrizes de Identidade Visual",
      detail: "Tipografia refinada, estética italiana de requinte, eliminação de fundos escuros e foco total na beleza do produto."
    },
    {
      title: "Estruturação Completa de Campanhas Meta Ads",
      detail: "Campanhas de Reconhecimento regional, Engajamento de seguidores e Fundo de Funil focadas no Cardápio Web."
    },
    {
      title: "Segmentações Específicas Validadas",
      detail: "Veiculação das campanhas 'Pizza de Outubro' e foco geolocalizado em condomínios de 'Aldeia da Serra'."
    },
    {
      title: "Integração e Acompanhamento de Dados (CRM & LTV)",
      detail: "Mapeamento das bases do Cardápio Web e identificação de clientes de alta recorrência (até 61 pedidos)."
    }
  ],
  upcoming: [
    {
      title: "Layout dos Destaques do Instagram (Mini Storytelling)",
      detail: "Finalização das artes artesanais explicando fermentação, insumos italianos e tempo de entrega."
    },
    {
      title: "Roteiros da Minissérie em Vídeo (30 Episódios)",
      detail: "Elaboração e gravação com o videomaker Léo destacando processos de cozinha e molho artesanal."
    },
    {
      title: "Ativação de Automações e CRM (WhatsApp)",
      detail: "Disparos para clientes de alto NPS, régua de aniversariantes e campanhas focadas no mini bar de drinks e sobremesas."
    },
    {
      title: "Visita Presencial da V4 no Restaurante (Novembro)",
      detail: "Imersão presencial no salão Bella Maria para reforço de laço executivo, experiência do cliente e captações adicionais."
    }
  ]
};

export const closingQuote = {
  quote: "A estrela do negócio já existe e o produto está super validado. Nossa missão agora é a amplificação contínua.",
  subtext: "Check-in Executivo 20/10/2026 • Bella Maria Pizzaria Napoletana & V4 Company"
};
