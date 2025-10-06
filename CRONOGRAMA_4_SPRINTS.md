# Cronograma 4 Sprints - CRM Consórcio (200 horas)
## Backend .NET Core + Frontend Angular EM PARALELO

---

## 📊 Resumo Executivo - 4 SPRINTS SEMANAIS

| Sprint | Duração | Backend | Frontend | Testes/Deploy | Total/Sprint |
|--------|---------|---------|----------|---------------|--------------|
| **Sprint 1** | Semana 1 | 32h | 20h | - | **52h** |
| **Sprint 2** | Semana 2 | 32h | 20h | - | **52h** |
| **Sprint 3** | Semana 3 | 24h | 20h | 8h | **52h** |
| **Sprint 4** | Semana 4 | 8h | 4h | 32h | **44h** |
| **TOTAL** | **4 semanas** | **96h** | **64h** | **40h** | **200h** |

> **🔑 Estratégia**: Backend e Frontend trabalham **simultaneamente** para maximizar velocidade de entrega

---

## 🚀 SPRINT 1 - FUNDAÇÃO (52 horas)
### Semana 1: Estrutura Base + Protótipo Funcional

### 🔧 BACKEND (32h)

#### 📦 Infraestrutura e Setup (14h)
**Segunda-Terça**
- [ ] Criar solução .NET Core 8 (1.5h)
- [ ] Configurar estrutura de projetos (Clean Architecture) (2h)
- [ ] Configurar Entity Framework Core + SQL Server (2h)
- [ ] Setup de injeção de dependências (1.5h)
- [ ] Configurar AutoMapper (1.5h)
- [ ] Configurar Swagger/OpenAPI (1.5h)
- [ ] Configurar CORS e segurança (2h)
- [ ] Implementar JWT authentication (2h)

#### 🗄️ Banco de Dados (18h)
**Quarta-Sexta**
- [ ] Criar entidades principais do domínio (6h)
  - Lead, VendaHistorico, Cliente, Situacao, Fase
- [ ] Configurar relacionamentos EF Core (4h)
- [ ] Criar migrations iniciais (2h)
- [ ] Criar entidades de consolidação (3h)
- [ ] Seed de dados essenciais (2h)
- [ ] Implementar índices críticos (1h)

**Entrega Sprint 1 - Backend**:
- ✅ Projeto estruturado com autenticação
- ✅ Banco de dados completo e funcional

---

### 🎨 FRONTEND (20h)

#### 🔐 Autenticação e Integração Base (8h)
**Segunda-Terça**
- [ ] Configurar HttpClient e Interceptors (2h)
- [ ] Implementar AuthService com JWT (3h)
- [ ] Criar guard de autenticação (1h)
- [ ] Implementar login funcional (2h)

#### 📊 Serviços Core (12h)
**Quarta-Sexta**
- [ ] Implementar LeadService (HTTP) (4h)
- [ ] Implementar DashboardService (HTTP) (4h)
- [ ] Implementar error handling global (2h)
- [ ] Implementar loading states (2h)

**Entrega Sprint 1 - Frontend**:
- ✅ Login funcional
- ✅ Serviços integrados com backend
- ✅ Error handling implementado

---

## 🏗️ SPRINT 2 - CORE FEATURES (52 horas)
### Semana 2: APIs REST + CRUD de Leads

### 🔧 BACKEND (32h)

#### 🏪 Repositórios e Services (16h)
**Segunda-Terça**
- [ ] Implementar IRepository genérico (2h)
- [ ] LeadRepository com queries otimizadas (4h)
- [ ] VendaHistoricoRepository (3h)
- [ ] ConsolidacaoRepository (3h)
- [ ] LeadService (business logic) (2h)
- [ ] DashboardService (2h)

#### 🌐 APIs REST (16h)
**Quarta-Sexta**
- [ ] LeadsController (CRUD completo) (5h)
  - GET /api/leads (list + paginação)
  - GET /api/leads/{id} (detalhes)
  - POST /api/leads (criar)
  - PUT /api/leads/{id} (atualizar)
  - DELETE /api/leads/{id}
- [ ] DashboardController (KPIs) (4h)
- [ ] Criar DTOs para requests/responses (3h)
- [ ] Implementar validações (FluentValidation) (2h)
- [ ] Tratamento de erros global (2h)

**Entrega Sprint 2 - Backend**:
- ✅ API REST completa e documentada
- ✅ CRUD de Leads funcionando
- ✅ Endpoints de Dashboard

---

### 🎨 FRONTEND (20h)

#### 📝 CRUD de Leads (14h)
**Segunda-Quinta**
- [ ] Formulário de criação de lead (4h)
- [ ] Formulário de edição de lead (4h)
- [ ] Validações de formulário (2h)
- [ ] Lista de leads com paginação (4h)

#### 🔍 Filtros e Busca (6h)
**Sexta**
- [ ] Implementar filtros por fase/situação (3h)
- [ ] Implementar busca por nome/CPF (2h)
- [ ] Implementar ordenação de colunas (1h)

**Entrega Sprint 2 - Frontend**:
- ✅ CRUD completo de leads
- ✅ Filtros e busca funcionando
- ✅ Lista com paginação

---

## 📈 SPRINT 3 - DASHBOARDS & AUTOMAÇÃO (52 horas)
### Semana 3: Jobs + Gráficos + Exportação

### 🔧 BACKEND (24h)

#### ⚙️ Background Jobs (12h)
**Segunda-Terça**
- [ ] Configurar Hangfire (2h)
- [ ] Job de consolidação de Dashboard (4h)
- [ ] Job de consolidação de Funil (3h)
- [ ] Job de consolidação de Performance (2h)
- [ ] Configurar schedules (1h)

#### 📊 Analytics API (12h)
**Quarta-Sexta**
- [ ] AnalyticsController (relatórios) (4h)
- [ ] Endpoint de exportação (Excel) (4h)
- [ ] Endpoint de exportação (PDF) (4h)

**Entrega Sprint 3 - Backend**:
- ✅ Jobs de consolidação automatizados
- ✅ APIs de analytics e relatórios
- ✅ APIs de exportação

---

### 🎨 FRONTEND (20h)

#### 📊 Gráficos e Visualizações (14h)
**Segunda-Quinta**
- [ ] Integrar Chart.js (2h)
- [ ] Implementar gráfico de pizza (fases) (3h)
- [ ] Implementar gráfico de pizza (situações) (2h)
- [ ] Implementar gráfico de barras (tendências) (3h)
- [ ] Implementar gráfico de funil (2h)
- [ ] Responsividade dos gráficos (2h)

#### 📥 Exportação (6h)
**Sexta**
- [ ] Exportar leads para Excel (3h)
- [ ] Exportar relatórios para PDF (3h)

**Entrega Sprint 3 - Frontend**:
- ✅ Dashboard com gráficos interativos
- ✅ Sistema de exportação funcional

---

### 🧪 TESTES INICIAIS (8h)
**Paralelo durante a semana**
- [ ] Testes unitários críticos de Services (4h)
- [ ] Testes de APIs principais (2h)
- [ ] Testes de componentes críticos (2h)

---

## 🚀 SPRINT 4 - TESTES & DEPLOY (44 horas)
### Semana 4: Finalização, Testes e Implantação

### 🔧 BACKEND (8h)

#### 🔧 Ajustes Finais (8h)
**Segunda-Terça**
- [ ] Otimizações de queries (2h)
- [ ] Ajustes de validações (2h)
- [ ] Melhorias de logging (2h)
- [ ] Documentação de APIs (2h)

**Entrega Sprint 4 - Backend**:
- ✅ Backend otimizado e documentado

---

### 🎨 FRONTEND (4h)

#### 🎨 Polimento Final (4h)
**Segunda**
- [ ] Ajustes de UX/UI (2h)
- [ ] Melhorias de responsividade (1h)
- [ ] Ajustes de performance (1h)

**Entrega Sprint 4 - Frontend**:
- ✅ Interface polida e responsiva

---

### 🧪 TESTES COMPLETOS (16h)

#### 🧪 Testes Backend (8h)
**Terça-Quarta**
- [ ] Testes unitários de Services (4h)
- [ ] Testes de integração de Repositories (2h)
- [ ] Testes de APIs (Controllers) (2h)

#### 🧪 Testes Frontend (4h)
**Quarta**
- [ ] Testes unitários de componentes (2h)
- [ ] Testes de serviços (1h)
- [ ] Testes E2E básicos (1h)

#### 🧪 Testes de Integração (4h)
**Quinta**
- [ ] Teste de criação de lead fim-a-fim (1.5h)
- [ ] Teste de dashboard e consolidações (1.5h)
- [ ] Correção de bugs encontrados (1h)

**Cobertura Esperada**: ~50%

---

### 🚀 DEPLOY (16h)

#### 📦 Preparação (8h)
**Quinta**
- [ ] Configurar ambiente de produção (2.5h)
- [ ] Configurar CI/CD básico (2.5h)
- [ ] Configurar variáveis de ambiente (1h)
- [ ] Preparar scripts de deployment (2h)

#### 🌐 Implantação (8h)
**Sexta**
- [ ] Deploy do backend (.NET Core) (2h)
- [ ] Deploy do frontend (Angular) (2h)
- [ ] Configurar logging básico (2h)
- [ ] Testes em produção (1h)
- [ ] Ajustes finais (1h)

**Entrega Sprint 4 - Deploy**:
- ✅ Sistema em produção
- ✅ Monitoramento básico ativo
- ✅ Documentação entregue

---

## 📅 CRONOGRAMA VISUAL - 4 SEMANAS

```
┌─────────────────────────────────────────────────────────────┐
│                    SEMANA 1 (52h)                           │
├──────────────────────┬──────────────────────────────────────┤
│ BACKEND (32h)        │ FRONTEND (20h)                       │
├──────────────────────┼──────────────────────────────────────┤
│ • Infraestrutura     │ • Autenticação                       │
│ • Entity Framework   │ • Services HTTP                      │
│ • Autenticação JWT   │ • Error Handling                     │
│ • Banco de Dados     │ • Loading States                     │
│ • Migrations         │                                      │
└──────────────────────┴──────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    SEMANA 2 (52h)                           │
├──────────────────────┬──────────────────────────────────────┤
│ BACKEND (32h)        │ FRONTEND (20h)                       │
├──────────────────────┼──────────────────────────────────────┤
│ • Repositórios       │ • CRUD de Leads                      │
│ • Services           │ • Formulários                        │
│ • APIs REST          │ • Validações                         │
│ • DTOs & Validações  │ • Filtros e Busca                    │
│ • CRUD Leads API     │ • Paginação                          │
└──────────────────────┴──────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    SEMANA 3 (52h)                           │
├──────────────────────┬──────────────────────┬───────────────┤
│ BACKEND (24h)        │ FRONTEND (20h)       │ TESTES (8h)   │
├──────────────────────┼──────────────────────┼───────────────┤
│ • Hangfire Jobs      │ • Gráficos           │ • Unit Tests  │
│ • Consolidações      │ • Chart.js           │ • API Tests   │
│ • Analytics API      │ • Dashboards         │ • Component   │
│ • Export API         │ • Exportação         │   Tests       │
└──────────────────────┴──────────────────────┴───────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    SEMANA 4 (44h)                           │
├──────────┬───────────┬──────────────────┬──────────────────┤
│ BACK (8h)│ FRONT (4h)│ TESTES (16h)     │ DEPLOY (16h)     │
├──────────┼───────────┼──────────────────┼──────────────────┤
│ • Otimiz.│ • UX/UI   │ • Testes Backend │ • CI/CD          │
│ • Logging│ • Polish  │ • Testes Frontend│ • Produção       │
│ • Docs   │           │ • Testes E2E     │ • Monitoramento  │
│          │           │ • Bug Fixes      │ • Go Live        │
└──────────┴───────────┴──────────────────┴──────────────────┘
```

---

## 👥 RECURSOS E ALOCAÇÃO

### Opção 1: Time de 2 Pessoas (Recomendado)

| Papel | Semana 1 | Semana 2 | Semana 3 | Semana 4 | Total |
|-------|----------|----------|----------|----------|-------|
| **Dev Backend** | 32h | 32h | 24h | 12h | **100h** |
| **Dev Frontend** | 20h | 20h | 20h | 20h | **80h** |
| **QA (ambos)** | - | - | 8h | 12h | **20h** |

**Total Time**: 100h + 80h + 20h = **200h**

---

### Opção 2: Dev Full Stack Solo

| Semana | Backend | Frontend | Testes/Deploy | Horas/Semana |
|--------|---------|----------|---------------|--------------|
| **Semana 1** | 32h | 20h | - | **52h** |
| **Semana 2** | 32h | 20h | - | **52h** |
| **Semana 3** | 24h | 20h | 8h | **52h** |
| **Semana 4** | 8h | 4h | 32h | **44h** |

**Total**: **200h** em 4 semanas

> ⚠️ **Atenção**: Trabalhar 52h/semana é intenso. Considere distribuir em 5 semanas (40h/semana)

---

## 📋 CHECKLIST DE ENTREGAS POR SPRINT

### ✅ Sprint 1 - Fundação
- [ ] Projeto .NET estruturado
- [ ] Banco de dados completo com migrations
- [ ] Autenticação JWT funcionando
- [ ] Login frontend integrado
- [ ] Serviços HTTP configurados
- [ ] Error handling implementado

### ✅ Sprint 2 - Core Features
- [ ] API REST completa (Leads CRUD)
- [ ] Dashboard API (KPIs básicos)
- [ ] CRUD de Leads no frontend
- [ ] Filtros e busca funcionando
- [ ] Paginação implementada
- [ ] Validações completas

### ✅ Sprint 3 - Analytics & Automation
- [ ] Jobs de consolidação rodando
- [ ] APIs de analytics funcionais
- [ ] Gráficos interativos no dashboard
- [ ] Sistema de exportação (Excel/PDF)
- [ ] Testes iniciais passando

### ✅ Sprint 4 - Produção
- [ ] Sistema testado (50% cobertura)
- [ ] Bugs críticos corrigidos
- [ ] CI/CD configurado
- [ ] Sistema em produção
- [ ] Documentação entregue
- [ ] Monitoramento ativo

---

## 🎯 DAILY STANDUP - Sugestão de Agenda

### Segunda-feira
- **Backend**: Setup/Infraestrutura ou Repositórios
- **Frontend**: Autenticação ou CRUD
- **Review**: Alinhamento semanal

### Terça-feira
- **Backend**: Banco de Dados ou Services
- **Frontend**: Services HTTP ou Formulários
- **Review**: Daily rápido

### Quarta-feira
- **Backend**: Entidades ou APIs
- **Frontend**: Error Handling ou Filtros
- **Review**: Mid-week check

### Quinta-feira
- **Backend**: Migrations ou Controllers
- **Frontend**: Loading States ou Gráficos
- **Review**: Progress review

### Sexta-feira
- **Backend**: Testes ou Analytics
- **Frontend**: Polimento ou Exportação
- **Review**: Sprint review + planning

---

## ⚠️ RISCOS E MITIGAÇÕES - 4 SPRINTS

### Riscos Principais

#### 🔴 RISCO 1: Sobrecarga na Semana 3
- **Probabilidade**: ALTA
- **Impacto**: Atraso de 1-2 dias
- **Mitigação**:
  - Começar jobs na Semana 2 (sábado/extra)
  - Simplificar gráficos se necessário
  - Ter templates prontos de exportação

#### 🔴 RISCO 2: Integração Backend-Frontend
- **Probabilidade**: MÉDIA
- **Impacto**: Bugs e retrabalho
- **Mitigação**:
  - Sync diário entre devs
  - Contrato de API definido na Sprint 1
  - Usar Swagger desde o início

#### 🟡 RISCO 3: Testes Insuficientes
- **Probabilidade**: MÉDIA
- **Impacto**: Bugs em produção
- **Mitigação**:
  - Testes desde Sprint 3
  - Foco em fluxos críticos
  - Buffer de 1 semana pós-deploy

#### 🟡 RISCO 4: Deploy Complexo
- **Probabilidade**: MÉDIA
- **Impacto**: Atraso no go-live
- **Mitigação**:
  - Preparar ambiente na Sprint 3
  - Testar deploy em staging
  - Documentar processo

---

## 📊 MÉTRICAS DE SUCESSO

### Por Sprint

| Sprint | Funcionalidades | Bugs Permitidos | Cobertura |
|--------|-----------------|-----------------|-----------|
| **Sprint 1** | 5 core | ≤ 3 | N/A |
| **Sprint 2** | 8 features | ≤ 5 | N/A |
| **Sprint 3** | 6 features | ≤ 4 | ~30% |
| **Sprint 4** | 0 (testes) | 0 críticos | ~50% |

### Performance (Sprint 4)
- ✅ Dashboard < 2s
- ✅ Lista de leads < 1s
- ✅ APIs < 200ms

---

## 🚀 PLANO DE CONTINGÊNCIA

### Se atrasar na Semana 1-2:
- ❌ Remover: Seed de dados completo
- ❌ Remover: Documentação detalhada
- ⏰ Adicionar: 1-2 dias extras

### Se atrasar na Semana 3:
- ❌ Remover: Gráficos avançados (só básicos)
- ❌ Remover: Exportação de gráficos
- ✂️ Simplificar: Jobs (apenas dashboard)

### Se atrasar na Semana 4:
- ⏰ Estender: Deploy para segunda-feira seguinte
- ✂️ Reduzir: Testes para críticos apenas
- 📅 Planejar: Hotfix sprint (+1 semana)

---

## 📝 DEFINITON OF DONE (DoD)

### Por Funcionalidade
- [ ] Código implementado e revisado
- [ ] Testes unitários criados
- [ ] Integração testada
- [ ] Documentação atualizada
- [ ] Code review aprovado
- [ ] Sem bugs críticos

### Por Sprint
- [ ] Todas as funcionalidades planejadas OK
- [ ] Demo executada com sucesso
- [ ] Retrospectiva realizada
- [ ] Backlog atualizado
- [ ] Documentação de sprint entregue

---

## 🎓 LIÇÕES APRENDIDAS & MELHORIAS

### Após Sprint 1
- Ajustar estimativas se necessário
- Identificar impedimentos cedo
- Validar arquitetura

### Após Sprint 2
- Avaliar velocidade do time
- Ajustar escopo se necessário
- Melhorar comunicação

### Após Sprint 3
- Priorizar bugs críticos
- Preparar para deploy
- Documentar lições

### Após Sprint 4
- Retrospectiva completa
- Documentar melhorias
- Planejar próxima fase

---

**Versão**: 3.0 - 4 SPRINTS PARALELOS
**Data**: Janeiro 2025
**Duração**: 4 semanas (200h)
**Modelo**: Backend + Frontend em Paralelo
**Status**: ⚡ CRONOGRAMA ÁGIL E EFICIENTE

> **💡 VANTAGEM**: Paralelização reduz tempo de entrega de 5 para 4 semanas mantendo as 200h!
