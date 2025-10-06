export interface DashboardKPI {
  totalLeads: number;
  leadsAtivos: number;
  leadsConvertidos: number;
  taxaConversao: number;
  ticketMedio: number;
  leadsHoje: number;
  leadsSemana: number;
  leadsMes: number;
  leadsPendentes: number;
  leadsEmNegociacao: number;
  leadsAguardandoDocumentacao: number;
  leadsFechados: number;
}

export interface LeadsPorSituacao {
  situacao: string;
  quantidade: number;
  percentual: number;
  cor: string;
}

export interface LeadsPorFase {
  fase: string;
  faseId: number;
  quantidade: number;
  percentual: number;
  cor: string;
  icone: string;
}

export interface LeadsPorOrigem {
  origem: string;
  quantidade: number;
  percentual: number;
}

export interface LeadsPorProduto {
  produto: string;
  quantidade: number;
  valorTotal: number;
  ticketMedio: number;
}

export interface FunilVendas {
  etapa: string;
  quantidade: number;
  percentualConversao: number;
  ordem: number;
}

export interface PerformanceVendedor {
  vendedorID: number;
  nome: string;
  totalLeads: number;
  leadsConvertidos: number;
  taxaConversao: number;
  valorTotal: number;
  ticketMedio: number;
}

export interface TendenciaTemporal {
  data: Date;
  leadsRecebidos: number;
  leadsConvertidos: number;
  valorTotal: number;
}

export interface DashboardData {
  kpis: DashboardKPI;
  leadsPorFase: LeadsPorFase[];
  leadsPorSituacao: LeadsPorSituacao[];
  leadsPorOrigem: LeadsPorOrigem[];
  leadsPorProduto: LeadsPorProduto[];
  funilVendas: FunilVendas[];
  performanceVendedores: PerformanceVendedor[];
  tendenciaTemporal: TendenciaTemporal[];
}
