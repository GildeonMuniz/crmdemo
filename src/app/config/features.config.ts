/**
 * Configuração de Features da Aplicação
 *
 * Este arquivo centraliza o controle de visibilidade de menus, rotas e painéis.
 * Para habilitar/desabilitar funcionalidades, altere os valores dos flags abaixo.
 *
 * IMPORTANTE: Após alterar este arquivo, recompile a aplicação.
 */

export interface FeatureConfig {
  // Menu items
  menu: {
    dashboard: boolean;
    leads: boolean;
    analytics: boolean;
  };

  // Dashboard panels
  dashboardPanels: {
    kpis: boolean;
    statusAtendentes: boolean;
    leadsPorFase: boolean;
    leadsPorSituacao: boolean;
    funilVendas: boolean;
    leadsPorProduto: boolean;
    performanceVendedores: boolean;
    leadsPorOrigem: boolean;
    tendenciaTemporal: boolean;
  };

  // Rotas
  routes: {
    dashboard: boolean;
    leads: boolean;
    leadDetail: boolean;
    analytics: boolean;
  };
}

/**
 * CONFIGURAÇÃO ATUAL - FASE 1
 *
 * Altere os valores abaixo conforme necessário para cada fase do projeto
 */
export const FEATURES: FeatureConfig = {
  menu: {
    dashboard: true,
    leads: true,
    analytics: false,  // Desabilitado na Fase 1
  },

  dashboardPanels: {
    kpis: true,
    statusAtendentes: true,
    leadsPorFase: true,
    leadsPorSituacao: true,
    funilVendas: true,
    leadsPorProduto: false,
    performanceVendedores: false,  // Desabilitado na Fase 1
    leadsPorOrigem: false,
    tendenciaTemporal: false,
  },

  routes: {
    dashboard: true,
    leads: true,
    leadDetail: false,
    analytics: false,  // Desabilitado na Fase 1
  },
};

/**
 * Exemplos de configuração para outras fases:
 *
 * FASE 2 - Todos os recursos habilitados:
 *
 * export const FEATURES: FeatureConfig = {
 *   menu: {
 *     dashboard: true,
 *     leads: true,
 *     analytics: true,
 *   },
 *   dashboardPanels: {
 *     kpis: true,
 *     statusAtendentes: true,
 *     leadsPorFase: true,
 *     leadsPorSituacao: true,
 *     funilVendas: true,
 *     leadsPorProduto: true,
 *     performanceVendedores: true,
 *     leadsPorOrigem: true,
 *     tendenciaTemporal: true,
 *   },
 *   routes: {
 *     dashboard: true,
 *     leads: true,
 *     leadDetail: true,
 *     analytics: true,
 *   },
 * };
 */
