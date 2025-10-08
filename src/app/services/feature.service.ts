import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { FeatureConfig } from '../config/features.config';

/**
 * Service para gerenciar features habilitadas/desabilitadas da aplicação
 * Carrega configurações de um arquivo JSON externo que pode ser editado em tempo real
 */
@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private features$ = new BehaviorSubject<FeatureConfig>({
    menu: { dashboard: true, leads: true, analytics: true },
    dashboardPanels: {
      kpis: true,
      statusAtendentes: true,
      leadsPorFase: true,
      leadsPorSituacao: true,
      funilVendas: true,
      leadsPorProduto: true,
      performanceVendedores: true,
      leadsPorOrigem: true,
      tendenciaTemporal: true
    },
    routes: { dashboard: true, leads: true, leadDetail: true, analytics: true }
  });

  private configUrl = 'assets/config/features.json';

  constructor(private http: HttpClient) {
    this.loadFeatures();
  }

  /**
   * Carrega as configurações do arquivo JSON
   */
  async loadFeatures(): Promise<void> {
    try {
      // Adiciona timestamp para evitar cache
      const timestamp = new Date().getTime();
      const config = await firstValueFrom(
        this.http.get<FeatureConfig>(`${this.configUrl}?t=${timestamp}`)
      );
      this.features$.next(config);
      console.log('Configurações de features carregadas:', config);
    } catch (error) {
      console.error('Erro ao carregar configurações de features:', error);
      // Mantém as configurações padrão em caso de erro
    }
  }

  /**
   * Recarrega as configurações do arquivo JSON
   */
  async reloadFeatures(): Promise<void> {
    await this.loadFeatures();
  }

  /**
   * Obtém as configurações atuais
   */
  private getCurrentFeatures(): FeatureConfig {
    return this.features$.value;
  }

  /**
   * Observable das configurações (para componentes que precisam reagir a mudanças)
   */
  getFeatures$(): Observable<FeatureConfig> {
    return this.features$.asObservable();
  }

  /**
   * Verifica se um item do menu está habilitado
   */
  isMenuEnabled(menuItem: keyof FeatureConfig['menu']): boolean {
    return this.getCurrentFeatures().menu[menuItem];
  }

  /**
   * Verifica se uma rota está habilitada
   */
  isRouteEnabled(route: keyof FeatureConfig['routes']): boolean {
    return this.getCurrentFeatures().routes[route];
  }

  /**
   * Verifica se um painel do dashboard está habilitado
   */
  isDashboardPanelEnabled(panel: keyof FeatureConfig['dashboardPanels']): boolean {
    return this.getCurrentFeatures().dashboardPanels[panel];
  }

  /**
   * Retorna todos os itens de menu habilitados
   */
  getEnabledMenuItems(): string[] {
    return Object.entries(this.getCurrentFeatures().menu)
      .filter(([_, enabled]) => enabled)
      .map(([key, _]) => key);
  }

  /**
   * Retorna configuração completa de features
   */
  getFeatures(): FeatureConfig {
    return this.getCurrentFeatures();
  }
}
