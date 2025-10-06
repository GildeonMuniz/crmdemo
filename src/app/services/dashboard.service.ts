import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import {
  DashboardData,
  DashboardKPI,
  StatusAtendente,
  LeadsPorFase,
  LeadsPorSituacao,
  LeadsPorOrigem,
  LeadsPorProduto,
  FunilVendas,
  PerformanceVendedor,
  TendenciaTemporal
} from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private mockKPIs: DashboardKPI = {
    totalLeads: 248,
    leadsAtivos: 187,
    leadsConvertidos: 42,
    taxaConversao: 16.93,
    ticketMedio: 165420,
    leadsHoje: 8,
    leadsSemana: 34,
    leadsMes: 248,
    leadsPendentes: 56,
    leadsEmNegociacao: 78,
    leadsAguardandoDocumentacao: 32,
    leadsFechados: 42
  };

  private mockStatusAtendentes: StatusAtendente[] = [
    { status: 'Disponível', quantidade: 12, cor: '#28a745', icone: '✓' },
    { status: 'Em Ligação', quantidade: 8, cor: '#007bff', icone: '📞' },
    { status: 'Pós-Ligação', quantidade: 5, cor: '#ffc107', icone: '📝' },
    { status: 'Pausa', quantidade: 3, cor: '#6c757d', icone: '⏸' }
  ];

  private mockLeadsPorFase: LeadsPorFase[] = [
    { fase: 'Recebido a Distribuir', faseId: 1, quantidade: 45, percentual: 18.15, cor: '#17a2b8', icone: '📥' },
    { fase: 'Distribuídos para Contato', faseId: 2, quantidade: 98, percentual: 39.52, cor: '#007bff', icone: '📞' },
    { fase: 'Redistribuído', faseId: 3, quantidade: 32, percentual: 12.90, cor: '#6c757d', icone: '🔄' },
    { fase: 'Sem Interesse', faseId: 4, quantidade: 19, percentual: 7.66, cor: '#dc3545', icone: '❌' },
    { fase: 'Venda', faseId: 5, quantidade: 48, percentual: 19.35, cor: '#28a745', icone: '✅' },
    { fase: 'Outros', faseId: 6, quantidade: 6, percentual: 2.42, cor: '#ffc107', icone: '📋' }
  ];

  private mockLeadsPorSituacao: LeadsPorSituacao[] = [
    { situacao: 'Distribuir para 1º acionamento', quantidade: 56, percentual: 22.58, cor: '#007bff' },
    { situacao: 'Contato com sucesso  /pediu retorno', quantidade: 78, percentual: 31.45, cor: '#ffc107' },
    { situacao: 'Red./ Contato com Sucesso pediu retorno', quantidade: 32, percentual: 12.90, cor: '#17a2b8' },
    { situacao: 'Venda com 1 pagamento já realizado', quantidade: 21, percentual: 8.47, cor: '#6c757d' },
    { situacao: 'Venda em Andamento', quantidade: 42, percentual: 16.93, cor: '#28a745' },
    { situacao: 'Contato sem interesse/Baixar da Carteira', quantidade: 19, percentual: 7.66, cor: '#dc3545' }
  ];

  private mockLeadsPorOrigem: LeadsPorOrigem[] = [
    { origem: 'Indicação gerente', quantidade: 114, percentual: 45.7 },
    { origem: 'SINAL', quantidade: 67, percentual: 26.09 },
    { origem: 'Grupo Roma', quantidade: 45, percentual: 18.07 },
    { origem: 'CREDIMORAR', quantidade: 23, percentual: 9.23 }
  ];

  private mockLeadsPorProduto: LeadsPorProduto[] = [
    { produto: 'Consórcio Imóvel', quantidade: 142, valorTotal: 38500000, ticketMedio: 271126 },
    { produto: 'Consórcio Auto', quantidade: 78, valorTotal: 6890000, ticketMedio: 88333 } 
  ];

  private mockFunilVendas: FunilVendas[] = [
    { etapa: 'Leads Recebidos', quantidade: 248, percentualConversao: 100, ordem: 1 },
    { etapa: 'Qualificados', quantidade: 187, percentualConversao: 75.4, ordem: 2 },
    { etapa: 'Em Negociação', quantidade: 110, percentualConversao: 44.35, ordem: 3 },
    { etapa: 'Proposta Enviada', quantidade: 74, percentualConversao: 29.84, ordem: 4 },
    { etapa: 'Documentação OK', quantidade: 53, percentualConversao: 21.37, ordem: 5 },
    { etapa: 'Fechados', quantidade: 42, percentualConversao: 16.93, ordem: 6 }
  ];

  private mockPerformanceVendedores: PerformanceVendedor[] = [
    {
      vendedorID: 5,
      nome: 'Maria Oliveira',
      totalLeads: 67,
      leadsConvertidos: 14,
      taxaConversao: 20.90,
      valorTotal: 4250000,
      ticketMedio: 303571
    },
    {
      vendedorID: 8,
      nome: 'Carlos Mendes',
      totalLeads: 58,
      leadsConvertidos: 11,
      taxaConversao: 18.97,
      valorTotal: 1980000,
      ticketMedio: 180000
    },
    {
      vendedorID: 12,
      nome: 'Ana Santos',
      totalLeads: 54,
      leadsConvertidos: 9,
      taxaConversao: 16.67,
      valorTotal: 2150000,
      ticketMedio: 238888
    },
    {
      vendedorID: 15,
      nome: 'Roberto Lima',
      totalLeads: 42,
      leadsConvertidos: 5,
      taxaConversao: 11.90,
      valorTotal: 890000,
      ticketMedio: 178000
    },
    {
      vendedorID: 18,
      nome: 'Juliana Costa',
      totalLeads: 27,
      leadsConvertidos: 3,
      taxaConversao: 11.11,
      valorTotal: 540000,
      ticketMedio: 180000
    }
  ];

  private mockTendenciaTemporal: TendenciaTemporal[] = [
    { data: new Date('2024-12-01'), leadsRecebidos: 42, leadsConvertidos: 6, valorTotal: 980000 },
    { data: new Date('2024-12-08'), leadsRecebidos: 38, leadsConvertidos: 5, valorTotal: 850000 },
    { data: new Date('2024-12-15'), leadsRecebidos: 45, leadsConvertidos: 7, valorTotal: 1150000 },
    { data: new Date('2024-12-22'), leadsRecebidos: 51, leadsConvertidos: 9, valorTotal: 1380000 },
    { data: new Date('2024-12-29'), leadsRecebidos: 34, leadsConvertidos: 4, valorTotal: 720000 },
    { data: new Date('2025-01-05'), leadsRecebidos: 56, leadsConvertidos: 8, valorTotal: 1420000 },
    { data: new Date('2025-01-12'), leadsRecebidos: 62, leadsConvertidos: 11, valorTotal: 1890000 },
    { data: new Date('2025-01-19'), leadsRecebidos: 58, leadsConvertidos: 9, valorTotal: 1540000 },
    { data: new Date('2025-01-26'), leadsRecebidos: 48, leadsConvertidos: 7, valorTotal: 1180000 }
  ];

  getDashboardData(): Observable<DashboardData> {
    const dashboardData: DashboardData = {
      kpis: this.mockKPIs,
      statusAtendentes: this.mockStatusAtendentes,
      leadsPorFase: this.mockLeadsPorFase,
      leadsPorSituacao: this.mockLeadsPorSituacao,
      leadsPorOrigem: this.mockLeadsPorOrigem,
      leadsPorProduto: this.mockLeadsPorProduto,
      funilVendas: this.mockFunilVendas,
      performanceVendedores: this.mockPerformanceVendedores,
      tendenciaTemporal: this.mockTendenciaTemporal
    };

    return of(dashboardData).pipe(delay(800));
  }

  getLeadsPorFase(): Observable<LeadsPorFase[]> {
    return of(this.mockLeadsPorFase).pipe(delay(500));
  }

  getKPIs(): Observable<DashboardKPI> {
    return of(this.mockKPIs).pipe(delay(500));
  }

  getLeadsPorSituacao(): Observable<LeadsPorSituacao[]> {
    return of(this.mockLeadsPorSituacao).pipe(delay(500));
  }

  getFunilVendas(): Observable<FunilVendas[]> {
    return of(this.mockFunilVendas).pipe(delay(500));
  }

  getPerformanceVendedores(): Observable<PerformanceVendedor[]> {
    return of(this.mockPerformanceVendedores).pipe(delay(500));
  }

  getTendenciaTemporal(): Observable<TendenciaTemporal[]> {
    return of(this.mockTendenciaTemporal).pipe(delay(500));
  }
}
