# Cronograma OTIMIZADO - CRM Consórcio (200 horas)
## Backend .NET Core + Frontend Angular

---

## 📊 Resumo Executivo - VERSÃO OTIMIZADA

| Fase | Duração | Horas Totais | Redução |
|------|---------|--------------|---------|
| **Backend .NET Core** | 12 dias úteis | **96h** | -24h (20%) |
| **Frontend Angular** | 8 dias úteis | **64h** | -16h (20%) |
| **Integração e Testes** | 3 dias úteis | **24h** | -16h (40%) |
| **Deploy e Ajustes** | 2 dias úteis | **16h** | -8h (33%) |
| **TOTAL** | **25 dias úteis (~5 semanas)** | **200h** | **-64h (24%)** |

> **⚠️ ATENÇÃO**: Esta versão prioriza a entrega rápida com testes focados e deploy enxuto. Recomenda-se período de estabilização pós-entrega.

---

## 🔧 FASE 1: BACKEND .NET CORE (96 horas)

### Sprint 1 - Infraestrutura e Setup (18h)

#### Dia 1-2: Configuração Inicial (12h)
- [ ] Criar solução .NET Core 8 (1.5h)
- [ ] Configurar estrutura de projetos (API, Application, Domain, Infrastructure) (2h)
- [ ] Configurar Entity Framework Core (1.5h)
- [ ] Configurar SQL Server connection strings (0.5h)
- [ ] Setup de injeção de dependências (1.5h)
- [ ] Configurar AutoMapper (1.5h)
- [ ] Configurar Swagger/OpenAPI (1.5h)
- [ ] Configurar CORS e segurança básica (2h)

#### Dia 3: Autenticação e Autorização (6h)
- [ ] Implementar JWT authentication (3h)
- [ ] Configurar refresh tokens (1.5h)
- [ ] Implementar middleware de autorização (1.5h)

**Entrega**: Projeto estruturado e autenticação funcional

---

### Sprint 2 - Domínio e Banco de Dados (26h)

#### Dia 4-5: Mapeamento de Entidades (14h)
- [ ] Criar entidades do domínio baseadas no esquema (5h)
  - Lead, VendaHistorico, Cliente, etc.
- [ ] Configurar relacionamentos no EF Core (3h)
- [ ] Criar migrations iniciais (2h)
- [ ] Seed de dados essenciais (2h)
- [ ] Validação básica de mapeamento (2h)

#### Dia 6: Tabelas de Consolidação (12h)
- [ ] Criar entidades de consolidação (3h)
- [ ] Configurar tabelas de consolidação no EF (2.5h)
- [ ] Criar migrations para consolidações (1.5h)
- [ ] Implementar índices essenciais (3h)
- [ ] Documentar estrutura básica (2h)

**Entrega**: Banco de dados funcional com tabelas principais

---

### Sprint 3 - Repositórios e Services (20h)

#### Dia 7-8: Repositórios (14h)
- [ ] Implementar IRepository genérico (2.5h)
- [ ] LeadRepository com queries essenciais (3.5h)
- [ ] VendaHistoricoRepository (2.5h)
- [ ] ConsolidacaoRepository (3.5h)
- [ ] Unit of Work pattern (2h)

#### Dia 9: Services de Negócio (6h)
- [ ] LeadService (business logic core) (2.5h)
- [ ] DashboardService (2h)
- [ ] AnalyticsService (1.5h)

**Entrega**: Camada de dados funcional

---

### Sprint 4 - APIs REST (20h)

#### Dia 10-11: Controllers e Endpoints (14h)
- [ ] LeadsController (CRUD essencial) (4h)
- [ ] DashboardController (KPIs principais) (3.5h)
- [ ] AnalyticsController (relatórios básicos) (3.5h)
- [ ] Implementar paginação básica (3h)

#### Dia 12: DTOs e Validações (6h)
- [ ] Criar DTOs principais (2.5h)
- [ ] Implementar validações essenciais (2h)
- [ ] Tratamento de erros básico (1.5h)

**Entrega**: API REST funcional

---

### Sprint 5 - Jobs e Background Services (12h)

#### Dia 13: Implementação de Jobs (12h)
- [ ] Configurar Hangfire (2h)
- [ ] Job de consolidação de Dashboard (3.5h)
- [ ] Job de consolidação de Funil (3h)
- [ ] Job de consolidação de Performance (2.5h)
- [ ] Configurar schedules básicos (1h)

**Entrega**: Sistema de consolidação automatizado

---

## 🎨 FASE 2: FRONTEND ANGULAR (64 horas)

> **Nota**: Frontend já parcialmente implementado com mocks

### Sprint 6 - Integração com Backend (18h)

#### Dia 14-15: Services HTTP (14h)
- [ ] Configurar HttpClient e Interceptors (2h)
- [ ] Implementar AuthService com JWT (3h)
- [ ] Implementar LeadService (endpoints reais) (3h)
- [ ] Implementar DashboardService (3h)
- [ ] Implementar AnalyticsService (3h)

#### Dia 16: Error Handling e Loading (4h)
- [ ] Implementar interceptor de erros (2h)
- [ ] Implementar loading states (2h)

**Entrega**: Frontend integrado

---

### Sprint 7 - Funcionalidades Principais (20h)

#### Dia 17-18: CRUD de Leads (14h)
- [ ] Formulário de criação de lead (4h)
- [ ] Formulário de edição de lead (3.5h)
- [ ] Validações principais (3h)
- [ ] Upload básico de documentos (3.5h)

#### Dia 19: Filtros (6h)
- [ ] Implementar filtros essenciais (3.5h)
- [ ] Implementar busca simples (2.5h)

**Entrega**: CRUD funcional

---

### Sprint 8 - Gráficos (14h)

#### Dia 20-21: Biblioteca de Gráficos (14h)
- [ ] Integrar Chart.js (2h)
- [ ] Implementar gráfico de pizza (3h)
- [ ] Implementar gráfico de barras (3h)
- [ ] Implementar gráfico de funil (2h)
- [ ] Gráficos de performance básicos (2h)
- [ ] Responsividade básica (2h)

**Entrega**: Dashboards com gráficos

---

### Sprint 9 - Exportação (12h)

#### Dia 22: Funcionalidades de Export (12h)
- [ ] Exportar leads para Excel (4h)
- [ ] Exportar relatórios para PDF (4h)
- [ ] Implementar impressão básica (2h)
- [ ] Exportar gráficos como imagem (2h)

**Entrega**: Sistema de exportação básico

---

## 🔗 FASE 3: INTEGRAÇÃO E TESTES (24 horas)

### Sprint 10 - Testes Focados (24h)

#### Dia 23: Testes Backend (10h)
- [ ] Testes unitários críticos de Services (4h)
- [ ] Testes de integração principais (3h)
- [ ] Testes básicos de APIs (3h)

#### Dia 24: Testes Frontend (8h)
- [ ] Testes de componentes principais (4h)
- [ ] Testes de serviços críticos (2h)
- [ ] Testes E2E dos fluxos principais (2h)

#### Dia 25: Testes de Integração (6h)
- [ ] Teste de criação de lead completo (2h)
- [ ] Teste de dashboard e KPIs (2h)
- [ ] Correção de bugs críticos (2h)

**Entrega**: Testes dos fluxos principais (cobertura ~50%)

---

## 🚀 FASE 4: DEPLOY E AJUSTES (16 horas)

### Sprint 11 - Deployment Enxuto (16h)

#### Dia 26: Preparação e Deploy (10h)
- [ ] Configurar ambiente de produção (2.5h)
- [ ] Configurar CI/CD básico (2.5h)
- [ ] Configurar variáveis de ambiente (1h)
- [ ] Deploy do backend (.NET Core) (2h)
- [ ] Deploy do frontend (Angular) (2h)

#### Dia 27: Monitoramento e Ajustes (6h)
- [ ] Configurar logging básico (2h)
- [ ] Testes em produção (2h)
- [ ] Ajustes críticos (1h)
- [ ] Documentação essencial (1h)

**Entrega**: Sistema em produção

---

## 📈 Distribuição de Horas - VERSÃO OTIMIZADA

```
┌─────────────────────────────────────────┐
│ BACKEND (.NET Core)            96h (48%)│
├─────────────────────────────────────────┤
│  - Infraestrutura              18h (-6h)│
│  - Banco de Dados              26h (-6h)│
│  - Repositórios/Services       20h (-4h)│
│  - APIs REST                   20h (-4h)│
│  - Jobs Background             12h (-4h)│
├─────────────────────────────────────────┤
│ FRONTEND (Angular)             64h (32%)│
├─────────────────────────────────────────┤
│  - Integração HTTP             18h (-6h)│
│  - CRUD e Formulários          20h (-4h)│
│  - Gráficos                    14h (-2h)│
│  - Exportação                  12h (-4h)│
├─────────────────────────────────────────┤
│ INTEGRAÇÃO E TESTES            24h (12%)│
├─────────────────────────────────────────┤
│  - Testes Backend              10h      │
│  - Testes Frontend              8h      │
│  - Testes Integração            6h      │
├─────────────────────────────────────────┤
│ DEPLOY E AJUSTES               16h  (8%)│
└─────────────────────────────────────────┘
TOTAL: 200 horas (~25 dias úteis)
```

---

## 🎯 Estratégias de Otimização Aplicadas

### 1. **Redução de Testes (-40%)**
- ✂️ Foco em testes críticos e fluxos principais
- ✂️ Cobertura reduzida de 70% para ~50%
- ✂️ Menos testes E2E, mais testes unitários focados
- ⚠️ **Risco**: Possíveis bugs em produção

### 2. **Deploy Simplificado (-33%)**
- ✂️ CI/CD básico em vez de completo
- ✂️ Monitoramento essencial em vez de avançado
- ✂️ Documentação mínima viável
- ⚠️ **Risco**: Mais tempo de troubleshooting inicial

### 3. **Funcionalidades Core Only (-20%)**
- ✂️ Apenas validações essenciais
- ✂️ Upload básico de documentos
- ✂️ Filtros simples em vez de avançados
- ✂️ Gráficos responsivos básicos

### 4. **Otimizações Gerais**
- ✅ Reuso máximo do protótipo Angular existente
- ✅ Foco em features MVP (Minimum Viable Product)
- ✅ Automação apenas dos jobs essenciais
- ✅ Índices de banco otimizados desde o início

---

## ⚠️ RISCOS E MITIGAÇÕES - VERSÃO OTIMIZADA

### Riscos Aumentados

1. **Cobertura de Testes Reduzida (50% vs 70%)**
   - 🔴 Probabilidade: ALTA
   - 💥 Impacto: Bugs em produção
   - 🛡️ Mitigação:
     - Período de estabilização de 2 semanas pós-deploy
     - Hotfixes dedicados (+20h buffer)
     - Priorizar testes manuais nos fluxos críticos

2. **Deploy e Monitoramento Básico**
   - 🔴 Probabilidade: MÉDIA
   - 💥 Impacto: Dificuldade em diagnosticar problemas
   - 🛡️ Mitigação:
     - Implementar logging robusto desde o início
     - Ter equipe de suporte dedicada na primeira semana

3. **Funcionalidades Simplificadas**
   - 🟡 Probabilidade: MÉDIA
   - 💥 Impacto: Necessidade de melhorias futuras
   - 🛡️ Mitigação:
     - Planejar Sprint de melhorias (+40h) após 1 mês
     - Coletar feedback dos usuários rapidamente

4. **Tempo de Desenvolvimento Apertado**
   - 🔴 Probabilidade: ALTA
   - 💥 Impacto: Possível atraso de 1-2 dias
   - 🛡️ Mitigação:
     - Daily standups rigorosos
     - Remover impedimentos imediatamente

**Buffer recomendado**: +15% (30h) = **230 horas totais seguras**

---

## 📝 O QUE FOI REMOVIDO/REDUZIDO

### ❌ Completamente Removido
- Testes de performance (load testing) - 4h
- Histórico de exportações - 2h
- Documentação detalhada - 3h
- Treinamento completo da equipe - 1h

### ✂️ Significativamente Reduzido
- Testes automatizados: 40h → 24h (-40%)
- Deploy e CI/CD: 24h → 16h (-33%)
- Funcionalidades avançadas de filtros - 2h
- Gráficos avançados e interativos - 2h
- Upload avançado de documentos - 0.5h
- Validações complexas - 1h
- Seed de dados completo - 0h (apenas essencial)

### ⚡ Otimizado
- Configuração inicial: 16h → 12h (mais focada)
- Mapeamento de entidades: 16h → 14h (essencial)
- Repositórios: 16h → 14h (core only)
- Controllers: 16h → 14h (CRUD básico)

---

## 👥 Recursos Necessários - OTIMIZADO

### Equipe Mínima

1. **1 Desenvolvedor Full Stack Sênior** - 200h
   - Experiência sólida em .NET Core e Angular
   - Capacidade de trabalhar rápido com qualidade
   - Foco e disciplina para cumprir cronograma enxuto

**OU**

2. **2 Desenvolvedores em Paralelo** - 100h cada
   - 1 Backend (.NET) - 96h
   - 1 Frontend (Angular) - 64h + 40h suporte

### Período de Estabilização (Pós-200h)

- **Semana 1 pós-deploy**: 20h (bugs e ajustes)
- **Semana 2 pós-deploy**: 10h (otimizações)
- **Total buffer**: 30h

---

## 🎯 Marcos e Entregas - CRONOGRAMA COMPACTO

| Semana | Entrega Principal | Horas | Status |
|--------|-------------------|-------|--------|
| **Semana 1** | Backend estruturado + BD | 44h | 🔄 |
| **Semana 2** | APIs REST + Jobs | 52h | 🔄 |
| **Semana 3** | Frontend integrado | 46h | 🔄 |
| **Semana 4** | Gráficos + Export | 34h | 🔄 |
| **Semana 5** | Testes + Deploy | 24h | 🔄 |

**Total**: 200h em 5 semanas (40h/semana)

---

## 🎯 KPIs de Sucesso - AJUSTADOS

### Performance (Mantido)
- ✅ Dashboard carrega em < 2 segundos
- ✅ Listagem de leads em < 1 segundo
- ✅ APIs respondem em < 200ms

### Qualidade (Ajustado)
- ⚠️ Cobertura de testes > 50% (vs 70% original)
- ✅ Zero bugs **CRÍTICOS** em produção
- ⚠️ Uptime > 95% (vs 99% original)

### Produtividade
- ✅ Cronograma de 200h cumprido
- ✅ Funcionalidades MVP entregues
- ✅ Sistema operacional e usável

---

## 📅 Cronograma Detalhado Semanal

### **Semana 1 (44h)** - Fundação Backend
- Dias 1-3: Sprint 1 (18h) - Infraestrutura
- Dias 4-6: Sprint 2 (26h) - Banco de Dados

### **Semana 2 (52h)** - Backend Completo
- Dias 7-9: Sprint 3 (20h) - Repositórios
- Dias 10-12: Sprint 4 (20h) - APIs
- Dia 13: Sprint 5 (12h) - Jobs

### **Semana 3 (46h)** - Frontend Core
- Dias 14-16: Sprint 6 (18h) - Integração
- Dias 17-19: Sprint 7 (20h) - CRUD
- Dias 20-21 (início): Sprint 8 (8h de 14h) - Gráficos

### **Semana 4 (34h)** - Finalização Frontend
- Dias 20-21 (fim): Sprint 8 (6h restantes) - Gráficos
- Dia 22: Sprint 9 (12h) - Exportação
- Dias 23-24: Sprint 10 (16h de 24h) - Testes

### **Semana 5 (24h)** - Testes e Deploy
- Dia 25: Sprint 10 (8h restantes) - Testes
- Dias 26-27: Sprint 11 (16h) - Deploy

---

## 📞 Premissas CRÍTICAS para 200h

### ✅ Obrigatórias
1. Protótipo Angular funcional (economiza 40h)
2. Esquema de BD já validado e aprovado
3. Desenvolvedor(es) **sênior** com autonomia
4. Infraestrutura pronta (servidor, SQL, etc.)
5. Stakeholders disponíveis para validação rápida
6. Sem mudanças de escopo durante desenvolvimento

### ⚠️ Assumido
- Integração com API Itaú será fase 2
- Funcionalidades avançadas serão backlog
- Período de estabilização pós-deploy aceito
- Documentação pode ser incremental

---

## 🚀 PRÓXIMOS PASSOS PÓS-200H

### Fase 2 - Melhorias (40h)
- Aumentar cobertura de testes para 70%
- Implementar funcionalidades avançadas
- Melhorar CI/CD e monitoramento
- Documentação completa

### Fase 3 - Expansão (80h)
- Integração com API Itaú
- Módulo de comunicação (Email/SMS)
- Relatórios avançados
- App Mobile (planejamento)

---

**Versão**: 2.0 - OTIMIZADA 200H
**Data**: Janeiro 2025
**Status**: ⚡ CRONOGRAMA ENXUTO E FOCADO
**Aprovação**: Pendente

> **💡 IMPORTANTE**: Este cronograma entrega um MVP funcional e operacional. Para um sistema robusto de produção com alta qualidade, recomenda-se o cronograma original de 264h + buffer.
