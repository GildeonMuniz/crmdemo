# 🚀 Guia de Instalação - CRM Consórcio

## Pré-requisitos

### Obrigatórios
- ✅ **Node.js** v18 ou superior ([Download](https://nodejs.org/))
- ✅ **npm** v9 ou superior (vem com Node.js)
- ✅ **Angular CLI** v20 (`npm install -g @angular/cli@latest`)

### Recomendados
- ✅ **VS Code** ([Download](https://code.visualstudio.com/))
- ✅ **Git** ([Download](https://git-scm.com/))

---

## 📦 Instalação Rápida

### 1. Instalar Dependências

```bash
# Na raiz do projeto (C:\Funchal)
npm install
```

### 2. Executar Aplicação

```bash
# Modo desenvolvimento
npm start

# Ou usando Angular CLI diretamente
ng serve
```

### 3. Acessar Aplicação

Abra o navegador em: **http://localhost:4200**

---

## 🛠️ Comandos Disponíveis

### Desenvolvimento
```bash
# Executar em modo desenvolvimento (com hot-reload)
npm start
# ou
ng serve

# Executar e abrir automaticamente no navegador
ng serve --open
```

### Build
```bash
# Build de produção
npm run build
# ou
ng build

# Build com watch (recompila ao salvar)
npm run watch
# ou
ng build --watch
```

### Testes
```bash
# Executar testes unitários
npm test
# ou
ng test
```

---

## 📁 Estrutura do Projeto

```
C:\Funchal/
├── src/
│   ├── app/
│   │   ├── models/              # Modelos TypeScript
│   │   ├── services/            # Serviços (dados mockados)
│   │   ├── pages/               # Componentes de páginas
│   │   │   ├── dashboard/
│   │   │   ├── leads-list/
│   │   │   ├── lead-detail/
│   │   │   └── analytics/
│   │   ├── app.component.ts     # Componente raiz
│   │   └── app.routes.ts        # Rotas
│   ├── index.html
│   ├── main.ts
│   └── styles.scss              # Estilos globais
├── angular.json                 # Configuração Angular
├── package.json                 # Dependências
├── tsconfig.json               # Configuração TypeScript
├── README.md                    # Documentação
├── CRONOGRAMA.md               # Cronograma detalhado
├── TABELAS_CONSOLIDACAO.md     # Estratégia de banco
└── INSTALACAO.md               # Este arquivo
```

---

## 🌐 Navegação na Aplicação

Após iniciar a aplicação, você terá acesso às seguintes rotas:

### 📊 Dashboard
**URL**: `http://localhost:4200/dashboard`

Visão geral com:
- KPIs principais
- Distribuição de leads
- Funil de vendas
- Performance de vendedores

### 👥 Lista de Leads
**URL**: `http://localhost:4200/leads`

Tela sintética com:
- Listagem completa de leads
- Filtros (situação, produto, responsável)
- Busca geral

### 🔍 Detalhes do Lead
**URL**: `http://localhost:4200/leads/:id`

Tela analítica com:
- Dados completos do lead
- Histórico de interações
- Agendamentos
- Timeline de eventos

### 📈 Analytics
**URL**: `http://localhost:4200/analytics`

Análises detalhadas com:
- Gráficos interativos
- Tendências temporais
- Ranking de vendedores
- Insights

---

## 🐛 Solução de Problemas

### Erro: "ng: command not found"
```bash
# Instalar Angular CLI globalmente
npm install -g @angular/cli@latest
```

### Erro: "Cannot find module"
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Erro de porta 4200 já em uso
```bash
# Executar em outra porta
ng serve --port 4300
```

### Erro de compilação TypeScript
```bash
# Limpar cache do Angular
ng cache clean

# Reinstalar dependências
npm install
```

---

## 💡 Dicas de Desenvolvimento

### VS Code - Extensões Recomendadas
1. **Angular Language Service** (Angular.ng-template)
2. **ESLint** (dbaeumer.vscode-eslint)
3. **Prettier** (esbenp.prettier-vscode)
4. **Angular Snippets** (johnpapa.Angular2)

### Atalhos Úteis

```bash
# Gerar novo componente
ng generate component nome-componente
# ou
ng g c nome-componente

# Gerar novo serviço
ng generate service nome-servico
# ou
ng g s nome-servico

# Gerar novo modelo (interface)
ng generate interface nome-modelo
# ou
ng g i nome-modelo
```

---

## 🔄 Próximos Passos

### Para Desenvolvimento
1. Explorar os dados mockados em [lead.service.ts](src/app/services/lead.service.ts)
2. Entender os modelos em [models/](src/app/models/)
3. Customizar componentes em [pages/](src/app/pages/)

### Para Integração com Backend
1. Configurar `environment.ts` com URL da API
2. Atualizar services para consumir endpoints reais
3. Implementar interceptors para autenticação

Exemplo:
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000'  // URL do backend .NET Core
};
```

---

## 📚 Recursos Adicionais

### Documentação
- [Angular Docs](https://angular.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [RxJS Docs](https://rxjs.dev/)

### Este Projeto
- [README.md](README.md) - Visão geral do projeto
- [CRONOGRAMA.md](CRONOGRAMA.md) - Cronograma completo (264h)
- [TABELAS_CONSOLIDACAO.md](TABELAS_CONSOLIDACAO.md) - Estratégia de banco de dados

---

## ✅ Checklist de Instalação

- [ ] Node.js v18+ instalado
- [ ] Angular CLI instalado globalmente
- [ ] Dependências instaladas (`npm install`)
- [ ] Aplicação rodando (`npm start`)
- [ ] Navegador acessando `http://localhost:4200`
- [ ] Dashboard carregando corretamente
- [ ] Leads listando
- [ ] Detalhes de lead funcionando
- [ ] Analytics carregando

---

## 🆘 Suporte

### Problemas Comuns
1. **Tela branca**: Verifique o console do navegador (F12)
2. **Dados não aparecem**: Aguarde o delay de 500ms dos dados mockados
3. **Erros de compilação**: Limpe o cache (`ng cache clean`)

### Contato
Para dúvidas sobre o projeto, consulte a documentação ou entre em contato com a equipe de desenvolvimento.

---

**Versão**: 1.0
**Última atualização**: Janeiro 2025
**Status**: ✅ Pronto para uso
