# Cronograma FASE 1 - MVP (Minimum Viable Product)
## CRM Consórcio - Primeira Entrega

---

## 📊 Resumo Executivo - FASE 1

| Área | Horas Estimadas |
|------|-----------------|
| **1. Estrutura da Aplicação + Jobs (Semana 1)** | 48h |
| **2. Dashboard e Lista de Leads + Consolidação (Semana 2)** | 54h |
| **TOTAL FASE 1** | **102h** |

> **🔑 Estratégia**: Entregar um MVP funcional com dados consolidados reais através de Jobs automatizados (Hangfire). Login será implementado na Fase 2. **CRUD de leads NÃO será implementado.**

---

## 🏗️ SEMANA 1: ESTRUTURA BASE DA APLICAÇÃO (48 horas)

### 🔧 BACKEND .NET Core (32h)

#### 📦 1. Setup e Infraestrutura (10h)
**Segunda-Terça**
- [ ] Criar solução .NET Core 8 (1h)
- [ ] Configurar estrutura de projetos (Clean Architecture) (2h)
  - CRM.Domain (entidades)
  - CRM.Application (services, interfaces)
  - CRM.Infrastructure (EF Core, repositórios)
  - CRM.API (controllers)
- [ ] Configurar Entity Framework Core + SQL Server (2h)
- [ ] Setup de injeção de dependências (1.5h)
- [ ] Configurar AutoMapper (1.5h)
- [ ] Configurar Swagger/OpenAPI (1h)
- [ ] Configurar CORS para Angular (1h)

#### 🗄️ 2. Banco de Dados (12h)
**Terça-Quarta**
- [ ] Criar entidades do domínio (6h)
  - Lead (campos completos)
  - Fase (Recebido, Distribuído, Redistribuído, Sem Interesse, Venda, Outros)
  - Situacao (7 situações diferentes)
  - VendaHistorico
  - ConsolidacaoAtendente
  - ConsolidacaoFase
  - ConsolidacaoSituacao
- [ ] Configurar relacionamentos EF Core (2h)
- [ ] Criar migrations iniciais (1h)
- [ ] Seed de dados de teste (3h)
  - Fases
  - Situações
  - 250 leads de exemplo
  - Consolidações

#### 🌐 3. APIs REST Básicas (6h)
**Quinta-Sexta**
- [ ] DashboardController (4h)
  - GET /api/dashboard/kpis
  - GET /api/dashboard/status-atendentes
  - GET /api/dashboard/leads-por-fase
  - GET /api/dashboard/leads-por-situacao
  - GET /api/dashboard/funil-vendas
- [ ] LeadsController (básico) (2h)
  - GET /api/leads (lista simples)
  - GET /api/leads/{id} (detalhes)

#### ⚙️ 4. Jobs de Consolidação (4h)
**Sexta**
- [ ] Configurar Hangfire (1h)
- [ ] Job de consolidação de Dashboard (1.5h)
  - Consolida KPIs em tempo real ou agendado
  - Calcula totais, conversões, ticket médio
- [ ] Job de consolidação de Funil (1h)
  - Consolida etapas do funil
  - Calcula percentuais de conversão
- [ ] Configurar schedule inicial (30min)

**Entrega Backend Semana 1**:
- ✅ Projeto estruturado e funcional
- ✅ Banco de dados com seed completo
- ✅ APIs de Dashboard funcionando
- ✅ API de lista de leads funcionando
- ✅ Jobs de consolidação configurados
- ✅ Dados consolidados reais
- ✅ Swagger documentado

---

### 🎨 FRONTEND Angular (16h)

#### 🔧 4. Setup e Estrutura (6h)
**Segunda-Terça**
- [ ] Configurar projeto Angular standalone (1h)
- [ ] Configurar Angular Material ou Bootstrap (1h)
- [ ] Criar estrutura de pastas (30min)
  - /pages (dashboard, leads-list)
  - /services (dashboard, leads)
  - /models (interfaces)
  - /components (shared)
- [ ] Configurar HttpClient e Interceptors (1.5h)
- [ ] Configurar roteamento básico (1h)
- [ ] Criar layout base (header, sidebar, container) (1h)

#### 📊 5. Serviços HTTP (4h)
**Quarta**
- [ ] Criar models TypeScript (1h)
  - DashboardKPI, LeadsPorFase, LeadsPorSituacao, etc.
- [ ] Implementar DashboardService (2h)
  - getDashboardData()
  - getStatusAtendentes()
  - getLeadsPorFase()
  - getLeadsPorSituacao()
  - getFunilVendas()
- [ ] Implementar LeadsService (básico) (1h)
  - getLeads()
  - getLeadById()

#### 🎨 6. Layout e Navegação (6h)
**Quinta-Sexta**
- [ ] Criar componente de navegação (2h)
  - Menu lateral ou superior
  - Links para Dashboard e Leads
  - Logo e branding
- [ ] Implementar roteamento (1h)
  - /dashboard
  - /leads
  - /leads/:id (preparação)
- [ ] Criar componente de loading (1h)
- [ ] Criar componente de error handling (1h)
- [ ] Estilização base e responsividade (1h)

**Entrega Frontend Semana 1**:
- ✅ Aplicação Angular estruturada
- ✅ Serviços HTTP integrados
- ✅ Layout e navegação funcionando
- ✅ Preparado para receber componentes

---

## 📊 SEMANA 2: DASHBOARD E LISTA DE LEADS (54 horas)

### 🔧 BACKEND .NET Core (20h)

#### 📈 7. Otimizações de APIs (8h)
**Segunda-Terça**
- [ ] Implementar DTOs específicos (2h)
  - DashboardKPIDto
  - LeadsPorFaseDto
  - LeadsPorSituacaoDto
  - LeadListDto
- [ ] Otimizar queries (3h)
  - Eager loading
  - Select otimizados
  - Índices no banco
- [ ] Implementar paginação (2h)
- [ ] Tratamento de erros global (1h)

#### 🔍 8. Filtros e Busca (6h)
**Quarta-Quinta**
- [ ] Implementar filtros na API de Leads (4h)
  - Por fase (faseId)
  - Por situação (situacao)
  - Por data (dateFrom, dateTo)
  - Por vendedor
- [ ] Implementar busca (2h)
  - Por nome do lead
  - Por CPF/CNPJ
  - Por telefone

#### 📊 9. Consolidação Avançada (6h)
**Quinta-Sexta**
- [ ] Job de consolidação por Situação (2h)
  - Agrupa leads por situação
  - Calcula percentuais
- [ ] Job de consolidação de Status de Atendentes (2h)
  - Monitora atendentes em real-time
  - Agrupa por status
- [ ] Job de Performance de Vendedores (2h)
  - Consolida dados de conversão
  - Calcula ticket médio por vendedor

**Entrega Backend Semana 2**:
- ✅ APIs otimizadas e performáticas
- ✅ Filtros e busca funcionando
- ✅ Paginação implementada
- ✅ Todos os jobs de consolidação funcionando
- ✅ Dados reais consolidados e atualizados
- ✅ Pronto para consumo do frontend

---

### 🎨 FRONTEND Angular (34h)

#### 📊 9. Dashboard - KPIs (8h)
**Segunda-Terça**
- [ ] Criar componente DashboardComponent (1h)
- [ ] Implementar cards de KPIs (4h)
  - Total de Leads
  - Leads Convertidos
  - Ticket Médio
  - Em Negociação
- [ ] Estilização dos cards (2h)
  - Cores por tipo
  - Ícones
  - Animações
  - Responsividade
- [ ] Integração com serviço (1h)

#### 👥 10. Dashboard - Status de Atendentes (4h)
**Terça**
- [ ] Criar componente de status (2h)
  - Grid horizontal
  - Status com cores
  - Contador total
- [ ] Estilização e ícones (1h)
- [ ] Integração com dados (1h)

#### 📊 11. Dashboard - Leads por Fase (6h)
**Quarta**
- [ ] Criar componente visual (3h)
  - Lista com cores
  - Ícones por fase
  - Percentuais
  - Quantidade
- [ ] Implementar navegação clicável (2h)
  - Click handler
  - Navegação para /leads com filtro
  - Tooltip
- [ ] Estilização e hover effects (1h)

#### 📋 12. Dashboard - Leads por Situação (5h)
**Quarta-Quinta**
- [ ] Criar componente visual (2.5h)
  - Lista com cores
  - Percentuais
  - Quantidade
- [ ] Implementar navegação clicável (1.5h)
  - Click handler
  - Navegação para /leads com filtro
- [ ] Estilização e hover effects (1h)

#### 🎯 13. Dashboard - Funil de Vendas (5h)
**Quinta**
- [ ] Criar componente de funil (3h)
  - Barras horizontais
  - Gradiente de cores
  - Percentuais de conversão
  - Valores
- [ ] Animações de transição (1h)
- [ ] Estilização final (1h)

#### 📋 14. Lista de Leads (6h)
**Sexta**
- [ ] Criar componente LeadsListComponent (1h)
- [ ] Implementar tabela de leads (3h)
  - Colunas: Nome, CPF, Telefone, Fase, Situação, Data
  - Ordenação por coluna
  - Paginação
  - Loading state
- [ ] Implementar filtros básicos (1h)
  - Dropdown de fase
  - Dropdown de situação
- [ ] Estilização da lista (1h)

**Entrega Frontend Semana 2**:
- ✅ Dashboard completo e funcional
- ✅ KPIs visíveis e atualizados com dados reais consolidados
- ✅ Status de Atendentes com dados reais
- ✅ Leads por Fase (clicável, dados consolidados)
- ✅ Leads por Situação (clicável, dados consolidados)
- ✅ Funil de Vendas com dados reais
- ✅ Lista de Leads com filtros básicos
- ✅ Navegação entre telas funcionando
- ✅ Integração completa com jobs de consolidação

---

## 📅 CRONOGRAMA VISUAL

```
┌─────────────────────────────────────────────────────────────┐
│                    SEMANA 1 - ESTRUTURA (48h)               │
├──────────────────────────────────┬──────────────────────────┤
│ BACKEND (32h)                    │ FRONTEND (16h)           │
├──────────────────────────────────┼──────────────────────────┤
│ Segunda-Terça:                   │ Segunda-Terça:           │
│ • Setup .NET Core (10h)          │ • Setup Angular (6h)     │
│ • Clean Architecture             │ • Estrutura de pastas    │
│ • Entity Framework               │ • HttpClient             │
│ • Swagger + CORS                 │ • Roteamento             │
│                                  │                          │
│ Terça-Quarta:                    │ Quarta:                  │
│ • Banco de Dados (12h)           │ • Services HTTP (4h)     │
│ • Entidades + Consolidações      │ • Models TypeScript      │
│ • Migrations                     │ • Dashboard Service      │
│ • Seed de dados                  │ • Leads Service          │
│                                  │                          │
│ Quinta-Sexta:                    │ Quinta-Sexta:            │
│ • APIs REST (6h)                 │ • Layout (6h)            │
│ • DashboardController            │ • Navegação              │
│ • LeadsController                │ • Components base        │
│ • Jobs Consolidação (4h)         │                          │
│ • Hangfire + Jobs                │                          │
└──────────────────────────────────┴──────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              SEMANA 2 - DASHBOARD E LEADS (54h)             │
├──────────────────────────────────┬──────────────────────────┤
│ BACKEND (20h)                    │ FRONTEND (34h)           │
├──────────────────────────────────┼──────────────────────────┤
│ Segunda-Terça:                   │ Segunda-Terça:           │
│ • Otimizações API (8h)           │ • Dashboard KPIs (8h)    │
│ • DTOs                           │ • Cards estatísticos     │
│ • Queries otimizadas             │ • Animações              │
│ • Paginação                      │                          │
│                                  │ Terça:                   │
│ Quarta-Quinta:                   │ • Status Atendentes (4h) │
│ • Filtros e Busca (6h)           │                          │
│ • Filtros por fase/situação      │ Quarta:                  │
│ • Busca por nome/CPF             │ • Leads por Fase (6h)    │
│                                  │ • Links clicáveis        │
│ Quinta-Sexta:                    │                          │
│ • Consolidação Avançada (6h)     │ Quarta-Quinta:           │
│ • Job Situação                   │ • Leads por Situação(5h) │
│ • Job Status Atendentes          │ • Links clicáveis        │
│ • Job Performance Vendedores     │                          │
│                                  │ Quinta:                  │
│                                  │ • Funil de Vendas (5h)   │
│                                  │                          │
│                                  │ Sexta:                   │
│                                  │ • Lista de Leads (6h)    │
│                                  │ • Tabela                 │
│                                  │ • Filtros                │
└──────────────────────────────────┴──────────────────────────┘
```

---

## 📋 DETALHAMENTO POR DIA

### 📆 SEMANA 1

#### **Segunda-feira (8h)**
- **Backend (5h)**: Setup .NET, Clean Architecture
- **Frontend (3h)**: Setup Angular, Estrutura de pastas

#### **Terça-feira (8h)**
- **Backend (5h)**: Entity Framework, início entidades
- **Frontend (3h)**: HttpClient, Models, Services base

#### **Quarta-feira (8h)**
- **Backend (5h)**: Entidades, Migrations, Consolidações
- **Frontend (3h)**: DashboardService, LeadsService

#### **Quinta-feira (10h)**
- **Backend (7h)**: Seed dados, APIs REST, Hangfire setup
- **Frontend (3h)**: Layout base, Navegação

#### **Sexta-feira (10h)**
- **Backend (6h)**: Jobs de Consolidação, Testes, Swagger
- **Frontend (4h)**: Components base, Responsividade

**Total Semana 1: 44h úteis + 4h buffer = 48h**

---

### 📆 SEMANA 2

#### **Segunda-feira (8h)**
- **Backend (4h)**: DTOs, Queries otimizadas
- **Frontend (4h)**: Dashboard KPIs cards

#### **Terça-feira (8h)**
- **Backend (4h)**: Paginação, tratamento de erros
- **Frontend (4h)**: KPIs finalização + Status Atendentes

#### **Quarta-feira (10h)**
- **Backend (3h)**: Filtros API
- **Frontend (7h)**: Leads por Fase + início Situação

#### **Quinta-feira (12h)**
- **Backend (5h)**: Busca + Job consolidação Situação
- **Frontend (7h)**: Leads por Situação + Funil Vendas

#### **Sexta-feira (10h)**
- **Backend (4h)**: Jobs Status Atendentes + Performance Vendedores
- **Frontend (6h)**: Lista de Leads completa

#### **Sábado (4h) - Opcional**
- **Backend (2h)**: Testes finais dos jobs
- **Frontend (2h)**: Polimento, ajustes finais, responsividade

**Total Semana 2: 50h úteis + 4h buffer = 54h**

---

## 🎯 ENTREGAS FINAIS - FASE 1

### ✅ Backend Entregas
- [x] Solução .NET Core 8 estruturada (Clean Architecture)
- [x] Banco de dados SQL Server com EF Core
- [x] 250 leads de exemplo com seed
- [x] **Hangfire configurado e funcional**
- [x] **Jobs de consolidação implementados:**
  - Job consolidação Dashboard (KPIs)
  - Job consolidação Funil de Vendas
  - Job consolidação por Situação
  - Job consolidação Status de Atendentes
  - Job consolidação Performance de Vendedores
- [x] API de Dashboard (KPIs, Status, Fases, Situações, Funil) **com dados consolidados reais**
- [x] API de Leads (lista, filtros, busca, paginação)
- [x] Swagger documentado
- [x] CORS configurado para Angular

### ✅ Frontend Entregas
- [x] Aplicação Angular standalone
- [x] Dashboard com **dados consolidados reais**:
  - Cards de KPIs (Total Leads, Convertidos, Ticket Médio, Em Negociação)
  - Status de Atendentes (com contadores em tempo real)
  - Leads por Fase (clicável, navega para lista filtrada)
  - Leads por Situação (clicável, navega para lista filtrada)
  - Funil de Vendas (visualização com barras, dados consolidados)
- [x] Lista de Leads com:
  - Tabela responsiva
  - Colunas: Nome, CPF, Telefone, Fase, Situação, Data
  - Filtros por Fase e Situação
  - Paginação
  - Loading states
- [x] Navegação funcional entre Dashboard e Leads
- [x] Layout responsivo
- [x] **Integração completa com dados consolidados pelo backend**

---

## 💰 CÁLCULO DE HORAS

### Resumo por Área

| Área | Backend | Frontend | Total |
|------|---------|----------|-------|
| **Semana 1 - Estrutura + Jobs** | 32h | 16h | 48h |
| **Semana 2 - Dashboard/Leads + Consolidação** | 20h | 34h | 54h |
| **TOTAL FASE 1** | **52h** | **50h** | **102h** |

### Distribuição por Atividade

| # | Atividade | Horas |
|---|-----------|-------|
| 1 | Setup e Infraestrutura Backend | 10h |
| 2 | Banco de Dados | 12h |
| 3 | APIs REST Básicas | 6h |
| 4 | **Jobs de Consolidação Iniciais** | **4h** |
| 5 | Setup e Estrutura Frontend | 6h |
| 6 | Serviços HTTP | 4h |
| 7 | Layout e Navegação | 6h |
| 8 | Otimizações de APIs | 8h |
| 9 | Filtros e Busca Backend | 6h |
| 10 | **Consolidação Avançada (Jobs)** | **6h** |
| 11 | Dashboard - KPIs | 8h |
| 12 | Dashboard - Status Atendentes | 4h |
| 13 | Dashboard - Leads por Fase | 6h |
| 14 | Dashboard - Leads por Situação | 5h |
| 15 | Dashboard - Funil de Vendas | 5h |
| 16 | Lista de Leads | 6h |
| **TOTAL** | | **102h** |

---

## 👥 RECURSOS NECESSÁRIOS

### Opção 1: Dev Full Stack (1 pessoa)
- **51h/semana** durante 2 semanas
- **Total**: 102 horas

### Opção 2: Time de 2 Pessoas (Recomendado)
- **Dev Backend**: 52h (distribuído em 2 semanas)
  - Semana 1: 32h (estrutura + jobs)
  - Semana 2: 20h (otimizações + consolidação)
- **Dev Frontend**: 50h (distribuído em 2 semanas)
  - Semana 1: 16h (estrutura)
  - Semana 2: 34h (dashboard + lista)
- **Trabalho paralelo**: Maximiza eficiência

---

## ⚠️ PREMISSAS E EXCLUSÕES

### ✅ Incluído na Fase 1
- Estrutura completa da aplicação
- Dashboard visual com **dados consolidados reais**
- **Hangfire e Jobs de consolidação funcionando**
- **Consolidação automática de:**
  - KPIs do Dashboard
  - Funil de Vendas
  - Leads por Situação
  - Status de Atendentes
  - Performance de Vendedores
- Lista de leads funcional
- Filtros básicos (fase, situação)
- Navegação entre telas
- Seed de 250 leads de teste
- APIs REST completas

### ❌ Excluído da Fase 1 (Próximas Fases)
- Sistema de login/autenticação
- Guards de rota
- **CRUD de leads (NUNCA será implementado)**
- Detalhes de lead (visualização apenas)
- Histórico completo de vendas
- Relatórios avançados
- Exportação (Excel/PDF)
- Gráficos avançados (Chart.js)
- Testes automatizados
- Deploy em produção

---

## 🎯 CRITÉRIOS DE SUCESSO

### Técnicos
- [ ] Aplicação compila sem erros
- [ ] APIs retornam dados em < 500ms
- [ ] Frontend responsivo (mobile/desktop)
- [ ] Seed de 250 leads carrega corretamente
- [ ] Navegação entre telas funciona
- [ ] Filtros aplicam corretamente

### Funcionais
- [ ] Dashboard exibe todos os quadros
- [ ] **KPIs calculados corretamente com dados consolidados**
- [ ] **Jobs de consolidação executam automaticamente**
- [ ] **Hangfire dashboard acessível**
- [ ] Links clicáveis navegam para lista filtrada
- [ ] Lista de leads exibe dados paginados
- [ ] Filtros por fase/situação funcionam
- [ ] Dados consolidados atualizam periodicamente

### Qualidade
- [ ] Código organizado e limpo
- [ ] Sem erros no console
- [ ] UX intuitiva
- [ ] Performance aceitável

---

## 📝 PRÓXIMOS PASSOS (Fase 2)

### Fase 2 - Autenticação e Visualizações (Estimativa: 45h)
1. Implementar sistema de login (Backend + Frontend) - 16h
2. Guards de autenticação - 4h
3. Detalhes de lead (visualização apenas, sem edição) - 8h
4. Histórico de ações (visualização) - 10h
5. Melhorias de UX - 7h

### Fase 3 - Relatórios e Gráficos (Estimativa: 40h)
1. Gráficos avançados (Chart.js) - 20h
   - Gráfico de pizza interativo
   - Gráficos de linha (tendências)
   - Gráficos de barras avançados
2. Exportação Excel/PDF - 12h
3. Relatórios personalizados - 8h

**IMPORTANTE**: CRUD de leads (criar, editar, excluir) NÃO será implementado em nenhuma fase.

---

## 📊 RISCOS E MITIGAÇÕES

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Atraso no setup inicial | Média | Alto | Ter templates prontos |
| Problemas no seed de dados | Baixa | Médio | Dados simples, validar cedo |
| Integração Backend-Frontend | Média | Alto | Definir contratos de API cedo, usar Swagger |
| **Complexidade do Hangfire** | **Média** | **Alto** | Seguir documentação oficial, testes frequentes |
| **Jobs de consolidação com bugs** | **Média** | **Médio** | Implementar logs detalhados, testar com dados reais |
| Responsividade complexa | Média | Baixo | Usar framework CSS (Bootstrap/Material) |

---

## ✅ CHECKLIST DE INÍCIO

Antes de começar, garanta:
- [ ] Visual Studio 2022 ou VS Code instalado
- [ ] .NET Core 8 SDK instalado
- [ ] SQL Server ou SQL Server Express instalado
- [ ] Node.js 18+ instalado
- [ ] Angular CLI instalado (`npm install -g @angular/cli`)
- [ ] Git configurado
- [ ] Editor de API (Postman/Insomnia) opcional

---

**Versão**: 2.0 - FASE 1 MVP COM CONSOLIDAÇÃO
**Data**: Janeiro 2025
**Duração**: 2 semanas (102h)
**Escopo**: Estrutura + Jobs Consolidação + Dashboard + Lista de Leads (sem login, sem CRUD)
**Status**: 🚀 PRONTO PARA INÍCIO

> **💡 Foco**: Entregar valor rapidamente com um MVP visual e funcional com dados consolidados reais através de Jobs automatizados (Hangfire). Autenticação na Fase 2. **CRUD de leads NÃO será implementado.**

> **⚠️ IMPORTANTE**: O sistema será SOMENTE de visualização de dados. Leads são inseridos diretamente no banco de dados (via seed ou integração externa futura). O CRM serve para monitoramento e análise, não para criação/edição manual de leads.
