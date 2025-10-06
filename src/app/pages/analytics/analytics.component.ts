import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';
import {
  DashboardKPI,
  LeadsPorSituacao,
  LeadsPorOrigem,
  LeadsPorProduto,
  FunilVendas,
  PerformanceVendedor,
  TendenciaTemporal
} from '../../models/dashboard.model';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  kpis: DashboardKPI | null = null;
  leadsPorSituacao: LeadsPorSituacao[] = [];
  leadsPorOrigem: LeadsPorOrigem[] = [];
  leadsPorProduto: LeadsPorProduto[] = [];
  funilVendas: FunilVendas[] = [];
  performanceVendedores: PerformanceVendedor[] = [];
  tendenciaTemporal: TendenciaTemporal[] = [];
  loading = true;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadAnalytics();
  }

  loadAnalytics(): void {
    this.loading = true;
    this.dashboardService.getDashboardData().subscribe({
      next: (data) => {
        this.kpis = data.kpis;
        this.leadsPorSituacao = data.leadsPorSituacao;
        this.leadsPorOrigem = data.leadsPorOrigem;
        this.leadsPorProduto = data.leadsPorProduto;
        this.funilVendas = data.funilVendas;
        this.performanceVendedores = data.performanceVendedores;
        this.tendenciaTemporal = data.tendenciaTemporal;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar analytics:', error);
        this.loading = false;
      }
    });
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }

  formatPercent(value: number): string {
    return `${value.toFixed(2)}%`;
  }

  formatNumber(value: number): string {
    return new Intl.NumberFormat('pt-BR').format(value);
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  }

  getMaxValue(data: TendenciaTemporal[]): number {
    return Math.max(...data.map(d => d.leadsRecebidos));
  }

  getBarHeight(value: number, maxValue: number): number {
    return (value / maxValue) * 100;
  }
}
