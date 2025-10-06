# CRM Consórcio - Sistema de Gestão de Leads

Sistema de CRM desenvolvido em Angular v20 para gestão completa do ciclo de vida de leads de consórcio, desde a captação até o fechamento da venda.

## 📋 Visão Geral

Este é um **protótipo funcional** com dados mockados que demonstra as funcionalidades principais do sistema CRM. O objetivo é validar a interface e fluxos antes da integração com o backend .NET Core.

## 🚀 Funcionalidades Implementadas

### 1. Dashboard
- **KPIs Principais**: Total de leads, conversão, ticket médio, leads em negociação
- **Visualizações**:
  - Distribuição de leads por situação
  - Funil de vendas
  - Leads por produto
  - Performance de vendedores
  - Leads por origem
  - Tendência temporal

### 2. Gestão de Leads
- **Visão Sintética (Lista)**:
  - Listagem completa de leads
  - Filtros avançados (situação, produto, responsável, busca geral)
  - Informações resumidas (nome, CPF, contato, produto, situação, valor)

- **Visão Analítica (Detalhes)**:
  - Dados completos do lead
  - Histórico de interações detalhado
  - Agendamentos
  - Timeline de eventos
  - Informações de campanha e origem

### 3. Analytics
- **Análises Detalhadas**:
  - Gráficos de distribuição por situação
  - Funil de conversão visual
  - Tendências temporais com gráficos de barras
  - Performance por produto
  - Canais de aquisição
  - Ranking de vendedores
  - Insights e métricas chave

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Angular 20** (versão mais recente)
- **TypeScript 5.6**
- **SCSS** para estilização
- **RxJS** para programação reativa
- **Standalone Components** (arquitetura moderna do Angular)

### Estrutura do Projeto

```
src/
├── app/
│   ├── models/              # Interfaces e modelos de dados
│   │   ├── lead.model.ts
│   │   └── dashboard.model.ts
│   ├── services/            # Serviços com dados mockados
│   │   ├── lead.service.ts
│   │   └── dashboard.service.ts
│   ├── pages/               # Componentes de página
│   │   ├── dashboard/
│   │   ├── leads-list/
│   │   ├── lead-detail/
│   │   └── analytics/
│   ├── app.component.ts     # Component principal
│   └── app.routes.ts        # Configuração de rotas
└── styles.scss              # Estilos globais
```

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Passos para instalação

```bash
# 1. Instalar dependências
npm install

# 2. Executar em modo de desenvolvimento
npm start

# 3. Acessar aplicação
# Abrir navegador em http://localhost:4200
```

### Build para produção

```bash
npm run build
```

## 🔄 Integração com Backend

O sistema está preparado para integração com backend .NET Core. Os serviços utilizam `Observable` do RxJS, facilitando a substituição dos dados mockados por chamadas HTTP reais.

### Exemplo de integração:

```typescript
// Atualmente (mockado)
getLeadsSinteticos(): Observable<LeadSintetico[]> {
  return of(this.mockLeadsSinteticos).pipe(delay(500));
}

// Após integração
getLeadsSinteticos(): Observable<LeadSintetico[]> {
  return this.http.get<LeadSintetico[]>(`${this.apiUrl}/api/leads`);
}
```

## 📊 Dados Mockados

O sistema inclui dados mockados baseados no esquema de banco de dados fornecido:
- 12 leads com diferentes situações
- Histórico de interações
- Agendamentos
- Métricas e KPIs
- Performance de vendedores

## 🗄️ Estrutura de Dados

Os modelos foram criados baseados nas seguintes tabelas principais:
- `tblDadosLeadVenda`
- `tblLeadVenda`
- `tblVendaHistorico`
- `tblLeadAgendaHistorico`
- `tblVendaHistoricoAPIItau`
- `tblVendaHistoricoWhatsapp`

## 🎨 Design e UX

- Interface moderna e responsiva
- Sidebar de navegação fixa
- Cards e gráficos visuais
- Sistema de cores consistente
- Feedback visual para ações do usuário
- Loading states

## 📝 Próximos Passos

1. **Integração com Backend .NET Core**
2. **Implementação de autenticação JWT**
3. **Conexão com banco de dados SQL Server**
4. **Implementação de WebSockets para notificações em tempo real**
5. **Exportação de relatórios (PDF/Excel)**
6. **Filtros avançados e busca**
7. **Gestão de permissões por perfil**

## 👥 Autor

Sistema desenvolvido para gestão de leads de consórcio.

## 📄 Licença

Projeto proprietário - Todos os direitos reservados
