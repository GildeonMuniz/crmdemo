# Cronograma de Desenvolvimento - CRM Consórcio
## Backend .NET Core + Frontend Angular

---

## 📊 Resumo Executivo

| Fase | Duração | Horas Totais |
|------|---------|--------------|
| **Backend .NET Core** | 15 dias úteis | **120h** |
| **Frontend Angular** | 10 dias úteis | **80h** |
| **Integração e Testes** | 5 dias úteis | **40h** |
| **Deploy e Ajustes** | 3 dias úteis | **24h** |
| **TOTAL** | **33 dias úteis (~7 semanas)** | **264h** |

---

## 🔧 FASE 1: BACKEND .NET CORE (120 horas)

### Sprint 1 - Infraestrutura e Setup (24h)

#### Dia 1-2: Configuração Inicial (16h)
- [ ] Criar solução .NET Core 8 (2h)
- [ ] Configurar estrutura de projetos (API, Application, Domain, Infrastructure) (3h)
- [ ] Configurar Entity Framework Core (2h)
- [ ] Configurar SQL Server connection strings (1h)
- [ ] Setup de injeção de dependências (2h)
- [ ] Configurar AutoMapper (2h)
- [ ] Configurar Swagger/OpenAPI (2h)
- [ ] Configurar CORS e segurança básica (2h)

#### Dia 3: Autenticação e Autorização (8h)
- [ ] Implementar JWT authentication (4h)
- [ ] Configurar refresh tokens (2h)
- [ ] Implementar middleware de autorização (2h)

**Entrega**: Projeto estruturado, documentado e com autenticação funcional

---

### Sprint 2 - Domínio e Banco de Dados (32h)

#### Dia 4-5: Mapeamento de Entidades (16h)
- [ ] Criar entidades do domínio baseadas no esquema (6h)
  - Lead, VendaHistorico, Cliente, etc.
- [ ] Configurar relacionamentos no EF Core (4h)
- [ ] Criar migrations iniciais (2h)
- [ ] Seed de dados iniciais (2h)
- [ ] Testes de mapeamento (2h)

#### Dia 6-7: Tabelas de Consolidação (16h)
- [ ] Criar entidades de consolidação (4h)
- [ ] Configurar tabelas de consolidação no EF (3h)
- [ ] Criar migrations para consolidações (2h)
- [ ] Implementar índices e otimizações (3h)
- [ ] Documentar estrutura de dados (2h)
- [ ] Testes de performance das queries (2h)

**Entrega**: Banco de dados completo com todas as tabelas e relacionamentos

---

### Sprint 3 - Repositórios e Services (24h)

#### Dia 8-9: Repositórios (16h)
- [ ] Implementar IRepository genérico (3h)
- [ ] LeadRepository com queries otimizadas (4h)
- [ ] VendaHistoricoRepository (3h)
- [ ] ConsolidacaoRepository (4h)
- [ ] Unit of Work pattern (2h)

#### Dia 10: Services de Negócio (8h)
- [ ] LeadService (business logic) (3h)
- [ ] DashboardService (3h)
- [ ] AnalyticsService (2h)

**Entrega**: Camada de dados e lógica de negócio implementada

---

### Sprint 4 - APIs REST (24h)

#### Dia 11-12: Controllers e Endpoints (16h)
- [ ] LeadsController (CRUD completo) (5h)
- [ ] DashboardController (KPIs e métricas) (4h)
- [ ] AnalyticsController (relatórios) (4h)
- [ ] Implementar paginação e filtros (3h)

#### Dia 13: DTOs e Validações (8h)
- [ ] Criar DTOs para requests/responses (3h)
- [ ] Implementar FluentValidation (3h)
- [ ] Tratamento de erros global (2h)

**Entrega**: API REST completa e documentada

---

### Sprint 5 - Jobs e Background Services (16h)

#### Dia 14-15: Implementação de Jobs (16h)
- [ ] Configurar Hangfire ou Quartz.NET (3h)
- [ ] Job de consolidação diária de Dashboard (4h)
- [ ] Job de consolidação de Funil (3h)
- [ ] Job de consolidação de Performance (3h)
- [ ] Configurar schedules e monitoramento (2h)
- [ ] Testes dos jobs (1h)

**Entrega**: Sistema de consolidação automatizado funcionando

---

## 🎨 FASE 2: FRONTEND ANGULAR (80 horas)

> **Nota**: Esta fase já está parcialmente implementada com dados mockados

### Sprint 6 - Integração com Backend (24h)

#### Dia 16-17: Services HTTP (16h)
- [ ] Configurar HttpClient e Interceptors (3h)
- [ ] Implementar AuthService com JWT (4h)
- [ ] Implementar LeadService (endpoints reais) (3h)
- [ ] Implementar DashboardService (endpoints reais) (3h)
- [ ] Implementar AnalyticsService (endpoints reais) (3h)

#### Dia 18: Error Handling e Loading States (8h)
- [ ] Implementar interceptor de erros (3h)
- [ ] Implementar loading global (2h)
- [ ] Implementar notificações (toast/snackbar) (3h)

**Entrega**: Frontend integrado com backend real

---

### Sprint 7 - Funcionalidades Avançadas (24h)

#### Dia 19-20: CRUD de Leads (16h)
- [ ] Formulário de criação de lead (5h)
- [ ] Formulário de edição de lead (4h)
- [ ] Validações de formulário (3h)
- [ ] Upload de documentos (4h)

#### Dia 21: Filtros Avançados (8h)
- [ ] Implementar filtros dinâmicos (4h)
- [ ] Implementar busca avançada (2h)
- [ ] Implementar ordenação de colunas (2h)

**Entrega**: CRUD completo de leads funcionando

---

### Sprint 8 - Gráficos e Visualizações (16h)

#### Dia 22-23: Biblioteca de Gráficos (16h)
- [ ] Integrar Chart.js ou ng2-charts (3h)
- [ ] Implementar gráfico de pizza (situações) (3h)
- [ ] Implementar gráfico de barras (tendências) (3h)
- [ ] Implementar gráfico de funil (2h)
- [ ] Implementar gráficos de performance (3h)
- [ ] Responsividade dos gráficos (2h)

**Entrega**: Dashboards com gráficos interativos

---

### Sprint 9 - Exportação e Relatórios (16h)

#### Dia 24-25: Funcionalidades de Export (16h)
- [ ] Exportar lista de leads para Excel (4h)
- [ ] Exportar relatórios para PDF (5h)
- [ ] Implementar impressão de detalhes (2h)
- [ ] Exportar gráficos como imagem (3h)
- [ ] Histórico de exportações (2h)

**Entrega**: Sistema de exportação funcionando

---

## 🔗 FASE 3: INTEGRAÇÃO E TESTES (40 horas)

### Sprint 10 - Testes Automatizados (24h)

#### Dia 26-27: Testes Backend (16h)
- [ ] Testes unitários de Services (6h)
- [ ] Testes de integração de Repositories (5h)
- [ ] Testes de APIs (Controllers) (5h)

#### Dia 28: Testes Frontend (8h)
- [ ] Testes unitários de componentes (4h)
- [ ] Testes de serviços (2h)
- [ ] Testes E2E (Cypress/Playwright) (2h)

**Entrega**: Cobertura de testes > 70%

---

### Sprint 11 - Testes de Integração (16h)

#### Dia 29-30: Testes de Fluxo Completo (16h)
- [ ] Teste de criação de lead fim-a-fim (3h)
- [ ] Teste de atualização e histórico (3h)
- [ ] Teste de dashboard e consolidações (3h)
- [ ] Teste de performance (load testing) (4h)
- [ ] Correção de bugs encontrados (3h)

**Entrega**: Sistema validado e bugs corrigidos

---

## 🚀 FASE 4: DEPLOY E AJUSTES (24 horas)

### Sprint 12 - Deployment (24h)

#### Dia 31: Preparação (8h)
- [ ] Configurar ambiente de produção (3h)
- [ ] Configurar CI/CD (Azure DevOps/GitHub Actions) (3h)
- [ ] Configurar variáveis de ambiente (1h)
- [ ] Preparar scripts de deployment (1h)

#### Dia 32: Deploy e Monitoramento (8h)
- [ ] Deploy do backend (.NET Core) (2h)
- [ ] Deploy do frontend (Angular) (2h)
- [ ] Configurar Application Insights/Logging (2h)
- [ ] Configurar monitoramento (2h)

#### Dia 33: Ajustes Finais (8h)
- [ ] Testes em produção (3h)
- [ ] Ajustes de performance (2h)
- [ ] Documentação final (2h)
- [ ] Treinamento da equipe (1h)

**Entrega**: Sistema em produção e operacional

---

## 📈 Distribuição de Horas por Atividade

```
┌─────────────────────────────────────────┐
│ BACKEND (.NET Core)           120h (45%)│
├─────────────────────────────────────────┤
│  - Infraestrutura              24h      │
│  - Banco de Dados              32h      │
│  - Repositórios/Services       24h      │
│  - APIs REST                   24h      │
│  - Jobs Background             16h      │
├─────────────────────────────────────────┤
│ FRONTEND (Angular)             80h (30%)│
├─────────────────────────────────────────┤
│  - Integração HTTP             24h      │
│  - CRUD e Formulários          24h      │
│  - Gráficos                    16h      │
│  - Exportação                  16h      │
├─────────────────────────────────────────┤
│ INTEGRAÇÃO E TESTES            40h (15%)│
├─────────────────────────────────────────┤
│  - Testes Automatizados        24h      │
│  - Testes de Integração        16h      │
├─────────────────────────────────────────┤
│ DEPLOY E AJUSTES               24h (10%)│
└─────────────────────────────────────────┘
TOTAL: 264 horas (~33 dias úteis)
```

---

## 👥 Recursos Necessários

### Equipe Mínima Recomendada

1. **1 Desenvolvedor Backend (.NET Core)** - 120h
2. **1 Desenvolvedor Frontend (Angular)** - 80h
3. **1 QA/Tester** - 40h (part-time nos últimos sprints)
4. **1 DevOps** - 24h (part-time no final)

### Equipe Otimizada (Paralelo)

1. **1 Desenvolvedor Full Stack** - trabalhando em paralelo
2. **Timeline**: ~5-6 semanas

---

## 🎯 Marcos e Entregas

| Semana | Entrega Principal | Status |
|--------|-------------------|--------|
| **Semana 1-2** | Backend estruturado + Banco de dados | 🔄 |
| **Semana 3-4** | APIs REST + Jobs de consolidação | 🔄 |
| **Semana 5** | Frontend integrado + CRUD | 🔄 |
| **Semana 6** | Gráficos + Exportações | 🔄 |
| **Semana 7** | Testes + Deploy | 🔄 |

---

## ⚠️ Riscos e Mitigações

### Riscos Identificados

1. **Performance de queries no SQL Server**
   - Mitigação: Implementar tabelas de consolidação desde o início
   - Impacto: +8h

2. **Complexidade de integração com API externa (Itaú)**
   - Mitigação: Criar camada de abstração e mocks
   - Impacto: +16h

3. **Requisitos não mapeados**
   - Mitigação: Reuniões semanais de validação
   - Impacto: +8h por semana

4. **Bugs em produção**
   - Mitigação: Testes automatizados + ambiente de staging
   - Impacto: +16h

**Buffer recomendado**: +20% (53h) = **317 horas totais**

---

## 📝 Observações

### Premissas
- ✅ Protótipo Angular já desenvolvido (economiza ~40h)
- ✅ Esquema de banco de dados já definido
- ✅ Equipe com experiência em .NET Core e Angular
- ✅ Infraestrutura (servidor, SQL Server) já disponível

### Não Incluído Neste Cronograma
- ❌ Integração com sistemas externos (ERP, etc.)
- ❌ Módulo de CRM completo (apenas leads)
- ❌ App mobile
- ❌ Notificações por email/SMS automatizadas
- ❌ Integração com WhatsApp Business API

### Próximas Fases (Futuro)
- 📱 App Mobile (React Native) - 120h
- 📧 Módulo de Comunicação (Email/SMS) - 80h
- 🤖 Automações e Workflows - 60h
- 📊 Relatórios Avançados (BI) - 40h

---

## 🎯 KPIs de Sucesso

### Performance
- ✅ Dashboard carrega em < 2 segundos
- ✅ Listagem de leads (1000 registros) em < 1 segundo
- ✅ APIs respondem em média < 200ms

### Qualidade
- ✅ Cobertura de testes > 70%
- ✅ Zero bugs críticos em produção
- ✅ Uptime > 99%

### Produtividade
- ✅ Cronograma cumprido em ±10%
- ✅ Todas as funcionalidades principais entregues
- ✅ Equipe treinada e documentação completa

---

## 📞 Contatos e Responsabilidades

| Função | Responsável | Horas/Semana |
|--------|-------------|--------------|
| Tech Lead | - | 40h |
| Backend Developer | - | 40h |
| Frontend Developer | - | 40h |
| QA Engineer | - | 20h |
| DevOps | - | 10h |

---

**Última Atualização**: 2025-01-XX
**Versão**: 1.0
**Status**: Em Andamento 🚀
