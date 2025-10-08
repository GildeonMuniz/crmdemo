# Configuração de Features em Tempo Real

Este sistema permite habilitar/desabilitar funcionalidades da aplicação **SEM PRECISAR RECOMPILAR**.

## Como Usar

### 1. Editar Configurações

Abra o arquivo: **`src/assets/config/features.json`**

```json
{
  "menu": {
    "dashboard": true,
    "leads": true,
    "analytics": false
  },
  "dashboardPanels": {
    "kpis": true,
    "statusAtendentes": true,
    "leadsPorFase": true,
    "leadsPorSituacao": true,
    "funilVendas": true,
    "leadsPorProduto": true,
    "performanceVendedores": false,
    "leadsPorOrigem": true,
    "tendenciaTemporal": true
  },
  "routes": {
    "dashboard": true,
    "leads": true,
    "leadDetail": true,
    "analytics": false
  }
}
```

### 2. Aplicar Mudanças

Após editar o arquivo JSON:

1. **Salve o arquivo**
2. **Recarregue a aplicação** (F5 ou reabra o navegador)
3. As configurações atualizadas serão carregadas automaticamente

## O que cada seção controla:

### `menu`
Controla a visibilidade dos itens no menu de navegação superior.

- `dashboard`: Mostra/oculta item "Dashboard"
- `leads`: Mostra/oculta item "Leads"
- `analytics`: Mostra/oculta item "Analytics"

### `dashboardPanels`
Controla quais painéis aparecem na página de Dashboard.

- `kpis`: Cartões com KPIs principais
- `statusAtendentes`: Painel de status dos atendentes
- `leadsPorFase`: Gráfico de leads por fase
- `leadsPorSituacao`: Gráfico de leads por situação
- `funilVendas`: Gráfico de funil de vendas
- `leadsPorProduto`: Tabela de leads por produto
- `performanceVendedores`: Tabela de performance de vendedores
- `leadsPorOrigem`: Gráfico de leads por origem
- `tendenciaTemporal`: Gráfico de tendência temporal

### `routes`
Controla o acesso às rotas da aplicação.

- `dashboard`: Bloqueia acesso à rota `/dashboard`
- `leads`: Bloqueia acesso à rota `/leads`
- `leadDetail`: Bloqueia acesso aos detalhes do lead (`/leads/:id`)
- `analytics`: Bloqueia acesso à rota `/analytics`

**Nota:** Quando uma rota está desabilitada:
- O menu não mostra o item
- Links clicáveis ficam desabilitados
- Acesso direto pela URL redireciona ao dashboard

## Exemplo: Configuração Fase 1

```json
{
  "menu": {
    "dashboard": true,
    "leads": true,
    "analytics": false
  },
  "dashboardPanels": {
    "kpis": true,
    "statusAtendentes": true,
    "leadsPorFase": true,
    "leadsPorSituacao": true,
    "funilVendas": true,
    "leadsPorProduto": false,
    "performanceVendedores": false,
    "leadsPorOrigem": false,
    "tendenciaTemporal": false
  },
  "routes": {
    "dashboard": true,
    "leads": true,
    "leadDetail": true,
    "analytics": false
  }
}
```

## Exemplo: Todas Features Habilitadas

```json
{
  "menu": {
    "dashboard": true,
    "leads": true,
    "analytics": true
  },
  "dashboardPanels": {
    "kpis": true,
    "statusAtendentes": true,
    "leadsPorFase": true,
    "leadsPorSituacao": true,
    "funilVendas": true,
    "leadsPorProduto": true,
    "performanceVendedores": true,
    "leadsPorOrigem": true,
    "tendenciaTemporal": true
  },
  "routes": {
    "dashboard": true,
    "leads": true,
    "leadDetail": true,
    "analytics": true
  }
}
```

## Observações Importantes

1. **Não precisa recompilar** - Apenas edite o JSON e recarregue a página (F5)
2. **O arquivo é carregado do servidor** - As mudanças afetam todos os usuários
3. **Validação JSON** - Certifique-se de que o JSON está válido (sem vírgulas extras, etc.)
4. **Cache** - O sistema adiciona timestamp na URL para evitar cache do navegador
5. **Desenvolvimento** - Funciona tanto em desenvolvimento quanto em produção
6. **Atualização automática** - Ao recarregar a página ou acessar novamente, as configurações atualizadas são carregadas

## Localização do Arquivo

- **Desenvolvimento e Produção**: `src/assets/config/features.json`
- O arquivo é copiado automaticamente para a build e servido em `assets/config/features.json`
