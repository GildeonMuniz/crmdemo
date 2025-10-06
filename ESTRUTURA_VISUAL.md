# 🏗️ Estrutura Visual do Projeto

## 📐 Arquitetura da Aplicação

```
┌─────────────────────────────────────────────────────────────────┐
│                     CRM CONSÓRCIO - ANGULAR v20                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐  ┌──────────────────────────────────────────┐ │
│  │   SIDEBAR   │  │          MAIN CONTENT AREA               │ │
│  │             │  │                                          │ │
│  │ 📊 Dashboard│  │  ┌────────────────────────────────────┐ │ │
│  │ 👥 Leads    │  │  │        ROUTER OUTLET               │ │ │
│  │ 📈 Analytics│  │  │                                    │ │ │
│  │             │  │  │  Dashboard / Leads / Analytics     │ │ │
│  │             │  │  │                                    │ │ │
│  │             │  │  └────────────────────────────────────┘ │ │
│  │             │  │                                          │ │
│  └─────────────┘  └──────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🗂️ Estrutura de Diretórios

```
C:\Funchal/
│
├── 📄 package.json                    # Dependências do projeto
├── 📄 angular.json                    # Configuração Angular
├── 📄 tsconfig.json                   # Configuração TypeScript
├── 📄 .gitignore                      # Arquivos ignorados pelo Git
│
├── 📚 DOCUMENTAÇÃO/
│   ├── 📄 README.md                   # Visão geral do projeto
│   ├── 📄 INSTALACAO.md              # Guia de instalação
│   ├── 📄 CRONOGRAMA.md              # 264h detalhadas
│   ├── 📄 TABELAS_CONSOLIDACAO.md    # Estratégia de DB
│   ├── 📄 RESUMO_PROJETO.md          # Resumo executivo
│   └── 📄 ESTRUTURA_VISUAL.md        # Este arquivo
│
├── 📁 src/
│   │
│   ├── 📄 index.html                  # HTML principal
│   ├── 📄 main.ts                     # Bootstrap da aplicação
│   ├── 📄 styles.scss                 # Estilos globais
│   │
│   ├── 📁 environments/               # Configurações de ambiente
│   │   ├── 📄 environment.ts          # Desenvolvimento
│   │   └── 📄 environment.prod.ts     # Produção
│   │
│   └── 📁 app/
│       │
│       ├── 📄 app.component.ts        # Componente raiz (sidebar)
│       ├── 📄 app.routes.ts           # Configuração de rotas
│       │
│       ├── 📁 models/                 # Interfaces TypeScript
│       │   ├── 📄 lead.model.ts       # Modelos de Lead
│       │   └── 📄 dashboard.model.ts  # Modelos de Dashboard
│       │
│       ├── 📁 services/               # Serviços (lógica de dados)
│       │   ├── 📄 lead.service.ts     # Serviço de Leads
│       │   └── 📄 dashboard.service.ts # Serviço de Dashboard
│       │
│       └── 📁 pages/                  # Componentes de páginas
│           │
│           ├── 📁 dashboard/          # Página Dashboard
│           │   ├── 📄 dashboard.component.ts
│           │   ├── 📄 dashboard.component.html
│           │   └── 📄 dashboard.component.scss
│           │
│           ├── 📁 leads-list/         # Lista de Leads
│           │   ├── 📄 leads-list.component.ts
│           │   ├── 📄 leads-list.component.html
│           │   └── 📄 leads-list.component.scss
│           │
│           ├── 📁 lead-detail/        # Detalhes do Lead
│           │   ├── 📄 lead-detail.component.ts
│           │   ├── 📄 lead-detail.component.html
│           │   └── 📄 lead-detail.component.scss
│           │
│           └── 📁 analytics/          # Página Analytics
│               ├── 📄 analytics.component.ts
│               ├── 📄 analytics.component.html
│               └── 📄 analytics.component.scss
│
└── 📁 node_modules/                   # Dependências (não versionar)
```

---

## 🔄 Fluxo de Dados

```
┌─────────────────────────────────────────────────────────────────┐
│                        FLUXO DE DADOS                           │
└─────────────────────────────────────────────────────────────────┘

    COMPONENTE                   SERVIÇO                   DADOS
    (página)                    (lógica)                 (mockados)

┌──────────────┐          ┌──────────────┐          ┌──────────────┐
│              │          │              │          │              │
│  Dashboard   │ ───────> │  Dashboard   │ ───────> │  Mock Data   │
│  Component   │ <─────── │  Service     │ <─────── │  (Arrays)    │
│              │          │              │          │              │
└──────────────┘          └──────────────┘          └──────────────┘
      │                         │                         │
      │ Observable              │ Observable              │
      │ (RxJS)                  │ (RxJS)                  │
      v                         v                         v

┌──────────────┐          ┌──────────────┐          ┌──────────────┐
│              │          │              │          │              │
│  Leads List  │ ───────> │    Lead      │ ───────> │  12 Leads    │
│  Component   │ <─────── │   Service    │ <─────── │  Mockados    │
│              │          │              │          │              │
└──────────────┘          └──────────────┘          └──────────────┘

┌──────────────┐          ┌──────────────┐          ┌──────────────┐
│              │          │              │          │              │
│ Lead Detail  │ ───────> │    Lead      │ ───────> │ Histórico +  │
│  Component   │ <─────── │   Service    │ <─────── │ Agendamentos │
│              │          │              │          │              │
└──────────────┘          └──────────────┘          └──────────────┘
```

---

## 🎨 Dashboard - Componentes Visuais

```
┌─────────────────────────────────────────────────────────────────┐
│                         DASHBOARD                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │  Total   │  │Convertid.│  │  Ticket  │  │    Em    │      │
│  │  Leads   │  │   42     │  │  Médio   │  │Negociação│      │
│  │   248    │  │  16.93%  │  │ 165.420  │  │    78    │      │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────────────┐  ┌────────────────────────┐       │
│  │  Leads por Situação    │  │   Funil de Vendas      │       │
│  │  ┌──────────────────┐  │  │  ┌──────────────────┐  │       │
│  │  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  │  │  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  │       │
│  │  │ Novo: 56 (22%)   │  │  │  │ Recebidos: 248   │  │       │
│  │  │ Em Neg: 78 (31%) │  │  │  │ Qualificados:187 │  │       │
│  │  │ Convertido: 42   │  │  │  │ Fechados: 42     │  │       │
│  │  └──────────────────┘  │  │  └──────────────────┘  │       │
│  └────────────────────────┘  └────────────────────────┘       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │         Performance de Vendedores (Tabela)              │   │
│  │  ┌──────────────┬────────┬──────────┬────────────────┐  │   │
│  │  │ Nome         │ Leads  │ Convert. │ Taxa Conv.     │  │   │
│  │  ├──────────────┼────────┼──────────┼────────────────┤  │   │
│  │  │ Maria        │   67   │    14    │  20.90%  ✓     │  │   │
│  │  │ Carlos       │   58   │    11    │  18.97%  ✓     │  │   │
│  │  │ Ana          │   54   │     9    │  16.67%  ~     │  │   │
│  │  └──────────────┴────────┴──────────┴────────────────┘  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 👥 Leads List - Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                       GESTÃO DE LEADS                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────── FILTROS ───────────────────────┐         │
│  │                                                    │         │
│  │  [Busca Geral...] [Situação ▼] [Produto ▼]       │         │
│  │  [Responsável ▼]  [Limpar Filtros]                │         │
│  │                                                    │         │
│  │  Resultados: 12 lead(s) encontrado(s)             │         │
│  └────────────────────────────────────────────────────┘         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────── TABELA DE LEADS ──────────────────┐        │
│  │ ID │Nome         │CPF        │Situação    │Ações  │        │
│  ├────┼─────────────┼───────────┼────────────┼───────┤        │
│  │ 1  │João Silva   │123.456... │Em Negoc.   │👁️ ✏️  │        │
│  │ 2  │Ana Paula    │987.654... │Novo Lead   │👁️ ✏️  │        │
│  │ 3  │Pedro Costa  │456.789... │Aguard Doc  │👁️ ✏️  │        │
│  │ 4  │Juliana Lima │321.654... │Convertido  │👁️ ✏️  │        │
│  └────┴─────────────┴───────────┴────────────┴───────┘        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔍 Lead Detail - Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Voltar    JOÃO SILVA SANTOS                                  │
│              🟡 Em Negociação    ID: 1    Resp: Maria Oliveira  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────┐  ┌──────────────────┐  ┌─────────────┐  │
│  │ 👤 Dados Pessoais│  │ 🏷️  Produto       │  │ 📍 Origem   │  │
│  ├──────────────────┤  ├──────────────────┤  ├─────────────┤  │
│  │ Nome: João Silva │  │ Produto: Imóvel  │  │ Site        │  │
│  │ CPF: 123.456...  │  │ Valor: 250.000   │  │ Campanha X  │  │
│  │ Tel: (11) 98765..│  │ Data: 15/01/2025 │  │ Cluster A   │  │
│  │ Email: joao@...  │  │ Ação: Enviar doc │  │             │  │
│  └──────────────────┘  └──────────────────┘  └─────────────┘  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  📅 AGENDAMENTOS                                                │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ 📅 25/01/2025 às 10:00 - Manhã (09h-12h) ✓ Agendado   │   │
│  │ 📅 28/01/2025 às 15:00 - Tarde (14h-17h) ✓ Agendado   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  📋 HISTÓRICO DE INTERAÇÕES                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  ●  📞 Ligação - 15/01/2025 10:30                        │   │
│  │  │  Cliente demonstrou interesse. Solicitou mais info.  │   │
│  │  │  Contato: Telefone                                   │   │
│  │                                                          │   │
│  │  ●  ✉️  Email - 17/01/2025 14:15                         │   │
│  │  │  Enviada proposta comercial com 3 opções.            │   │
│  │  │  Crédito Negociado: R$ 250.000                       │   │
│  │                                                          │   │
│  │  ●  💬 WhatsApp - 19/01/2025 11:00                       │   │
│  │  │  Cliente aceitou proposta de R$ 250.000 em 120 meses │   │
│  │  │  Expectativa de Contemplação: 15/06/2026             │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📈 Analytics - Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                   ANALYTICS - ANÁLISE DETALHADA                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                       │
│  │ 248  │  │16.93%│  │165K  │  │  78  │                       │
│  │Leads │  │Conv. │  │Ticket│  │ Neg. │                       │
│  └──────┘  └──────┘  └──────┘  └──────┘                       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  📊 Distribuição por Situação (Pizza)                   │   │
│  │  ▓▓▓▓▓▓░░░░░░░░░░░░                                     │   │
│  │  ▓ Novo: 22%   ░ Em Negociação: 31%   ● Convertido: 17%│   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  🎯 Funil de Conversão                                   │   │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ Leads Recebidos: 248    │   │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ Qualificados: 187                │   │
│  │  ▓▓▓▓▓▓▓▓▓▓ Em Negociação: 110                          │   │
│  │  ▓▓▓▓▓ Fechados: 42                                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  📈 Tendência (Últimas 9 Semanas)                        │   │
│  │     ▇                                                    │   │
│  │    ▇▇     ▇                                              │   │
│  │   ▇▇▇  ▇ ▇▇ ▇  ▇                                         │   │
│  │  ▇▇▇▇ ▇▇ ▇▇▇▇ ▇▇▇                                        │   │
│  │  ━━━━━━━━━━━━━━━━━━                                      │   │
│  │  Dez  Jan  Fev                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  🏆 Ranking de Vendedores                                │   │
│  │  🥇 Maria Oliveira   - 67 leads - 20.90% conv.          │   │
│  │  🥈 Carlos Mendes    - 58 leads - 18.97% conv.          │   │
│  │  🥉 Ana Santos       - 54 leads - 16.67% conv.          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔗 Rotas e Navegação

```
┌────────────────────────────────────────────────────────┐
│                    APP ROUTES                          │
├────────────────────────────────────────────────────────┤
│                                                        │
│  /                    → Redirect to /dashboard         │
│                                                        │
│  /dashboard           → DashboardComponent             │
│                         (KPIs, Gráficos, Métricas)    │
│                                                        │
│  /leads               → LeadsListComponent             │
│                         (Lista + Filtros)             │
│                                                        │
│  /leads/:id           → LeadDetailComponent            │
│                         (Detalhes + Histórico)        │
│                                                        │
│  /analytics           → AnalyticsComponent             │
│                         (Análises + Gráficos)         │
│                                                        │
│  /**                  → Redirect to /dashboard         │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## 📊 Dados Mockados - Estrutura

```
┌─────────────────────────────────────────────────────────────┐
│                    DADOS MOCKADOS                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  LeadService                                                │
│  ├── 12 Leads Sintéticos                                    │
│  │   ├── João Silva Santos (Em Negociação)                 │
│  │   ├── Ana Paula Rodrigues (Novo Lead)                   │
│  │   ├── Pedro Henrique Costa (Aguardando Doc)             │
│  │   ├── Juliana Ferreira Lima (Convertido)                │
│  │   ├── ... (mais 8 leads)                                │
│  │                                                          │
│  ├── Histórico de Interações (Map)                         │
│  │   ├── Lead 1 → 3 interações                             │
│  │   ├── Lead 3 → 2 interações                             │
│  │   └── ...                                               │
│  │                                                          │
│  └── Agendamentos (Map)                                     │
│      ├── Lead 1 → 2 agendamentos                            │
│      ├── Lead 3 → 1 agendamento                             │
│      └── ...                                                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  DashboardService                                           │
│  ├── KPIs                                                   │
│  │   ├── Total Leads: 248                                  │
│  │   ├── Convertidos: 42                                   │
│  │   ├── Taxa Conversão: 16.93%                            │
│  │   └── Ticket Médio: R$ 165.420                          │
│  │                                                          │
│  ├── Leads por Situação (6 categorias)                     │
│  ├── Leads por Origem (5 origens)                          │
│  ├── Leads por Produto (3 produtos)                        │
│  ├── Funil de Vendas (6 etapas)                            │
│  ├── Performance Vendedores (5 vendedores)                 │
│  └── Tendência Temporal (9 semanas)                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Integração Futura (Backend)

```
┌───────────────────────────────────────────────────────────────┐
│              ARQUITETURA COMPLETA (FUTURO)                    │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│  FRONTEND (Angular)          BACKEND (.NET Core)              │
│                                                               │
│  ┌─────────────────┐         ┌─────────────────┐            │
│  │  Dashboard      │         │  Dashboard      │            │
│  │  Component      │ ─HTTP─> │  Controller     │            │
│  │                 │ <─────  │                 │            │
│  └─────────────────┘         └─────────────────┘            │
│         │                            │                        │
│         │                            │                        │
│  ┌─────────────────┐         ┌─────────────────┐            │
│  │  Dashboard      │         │  Dashboard      │            │
│  │  Service        │ ─HTTP─> │  Service        │            │
│  │  (Observable)   │ <─────  │  (Business)     │            │
│  └─────────────────┘         └─────────────────┘            │
│                                      │                        │
│                                      │                        │
│                              ┌───────────────┐               │
│                              │ Repository    │               │
│                              │ Pattern       │               │
│                              └───────────────┘               │
│                                      │                        │
│                                      │                        │
│                              ┌───────────────────────┐       │
│                              │  SQL Server           │       │
│                              │  ┌─────────────────┐  │       │
│                              │  │ Tabelas Quentes │  │       │
│                              │  │ (Transacional)  │  │       │
│                              │  └─────────────────┘  │       │
│                              │  ┌─────────────────┐  │       │
│                              │  │ Tabelas Frias   │  │       │
│                              │  │ (Consolidadas)  │  │       │
│                              │  └─────────────────┘  │       │
│                              └───────────────────────┘       │
│                                      ▲                        │
│                                      │                        │
│                              ┌───────────────┐               │
│                              │ Background    │               │
│                              │ Jobs          │               │
│                              │ (Hangfire)    │               │
│                              └───────────────┘               │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

---

**Criado**: Janeiro 2025
**Versão**: 1.0
**Status**: ✅ Protótipo Completo
