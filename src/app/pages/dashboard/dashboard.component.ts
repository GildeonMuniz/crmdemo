import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardData } from '../../models/dashboard.model';
import { FeatureService } from '../../services/feature.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardData: DashboardData | null = null;
  loading = true;

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    public featureService: FeatureService
  ) {
    // Inscreve para mudanças de configuração
    this.featureService.getFeatures$().subscribe(() => {
      // Força atualização da view quando configurações mudam
    });
  }

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {
    this.loading = true;
    this.dashboardService.getDashboardData().subscribe({
      next: (data) => {
        this.dashboardData = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar dashboard:', error);
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

  getTotalAtendentes(): number {
    if (!this.dashboardData?.statusAtendentes) return 0;
    return this.dashboardData.statusAtendentes.reduce((total, item) => total + item.quantidade, 0);
  }

  navigateToLeadsByFase(faseId: number): void {
    // Verifica se a rota de leads está habilitada
    if (!this.featureService.isRouteEnabled('leads')) {
      return;
    }
    // Navega para a página de leads com filtro de fase
    // Quando implementado o real, será usado: this.router.navigate(['/leads'], { queryParams: { faseId } });
    this.router.navigate(['/leads']);
  }

  navigateToLeadsBySituacao(situacao: string): void {
    // Verifica se a rota de leads está habilitada
    if (!this.featureService.isRouteEnabled('leads')) {
      return;
    }
    // Navega para a página de leads com filtro de situação
    // Quando implementado o real, será usado: this.router.navigate(['/leads'], { queryParams: { situacao } });
    this.router.navigate(['/leads']);
  }
}
