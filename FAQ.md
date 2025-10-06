# ❓ FAQ - Perguntas Frequentes

## Geral

### Q: O que é este projeto?
**R:** Um protótipo funcional de CRM para gestão de leads de consórcio, desenvolvido em Angular v20 com dados mockados. O objetivo é validar a interface antes da integração com backend .NET Core.

### Q: Os dados são reais?
**R:** Não. Todos os dados (leads, histórico, métricas) são mockados (fictícios) para demonstração. Quando integrado com o backend, os dados virão do SQL Server.

### Q: Posso usar em produção?
**R:** Este é um **protótipo**. Para produção, é necessário desenvolver o backend .NET Core e integrar com banco de dados real. Veja [CRONOGRAMA.md](CRONOGRAMA.md) para o plano completo.

---

## Instalação e Execução

### Q: Quais são os requisitos mínimos?
**R:**
- Node.js v18 ou superior
- npm v9 ou superior
- Angular CLI v20
- Navegador moderno (Chrome, Edge, Firefox, Safari)

### Q: Como instalar?
**R:**
```bash
cd C:\Funchal
npm install
npm start
```
Acesse: http://localhost:4200

### Q: Erro "ng: command not found"
**R:**
```bash
npm install -g @angular/cli@latest
```

### Q: A porta 4200 está em uso, como mudar?
**R:**
```bash
ng serve --port 4300
```

### Q: Como fazer build de produção?
**R:**
```bash
npm run build
```
Os arquivos estarão em `dist/crm-consorcio`

---

## Funcionalidades

### Q: Quantos leads estão mockados?
**R:** 12 leads com dados completos, incluindo:
- Dados pessoais
- Histórico de interações (timeline)
- Agendamentos
- Situações variadas (Novo, Em Negociação, Convertido, etc.)

### Q: Posso adicionar novos leads?
**R:** No protótipo atual, não há funcionalidade de criação (CRUD). O botão "Novo Lead" é apenas visual. Isso será implementado na integração com backend.

### Q: Os filtros funcionam?
**R:** Sim! Os filtros na página de leads funcionam completamente:
- Busca geral (nome, CPF, email, telefone)
- Filtro por situação
- Filtro por produto
- Filtro por responsável

### Q: Os gráficos são interativos?
**R:** Os gráficos atuais são visuais em HTML/CSS. Para gráficos totalmente interativos (tooltip, zoom, etc.), será necessário integrar uma biblioteca como Chart.js ou ng2-charts.

---

## Dados e Modelos

### Q: De onde vêm os modelos de dados?
**R:** Os modelos TypeScript foram criados baseados no esquema de banco de dados fornecido (esquema.pdf), incluindo tabelas como:
- tblDadosLeadVenda
- tblVendaHistorico
- tblLeadAgendaHistorico
- E outras

### Q: Como os dados mockados estão organizados?
**R:** Os dados estão nos serviços:
- `src/app/services/lead.service.ts` - Leads, histórico, agendamentos
- `src/app/services/dashboard.service.ts` - KPIs, métricas, analytics

### Q: Posso mudar os dados mockados?
**R:** Sim! Edite os arquivos de serviço mencionados acima. Por exemplo, para adicionar um lead mockado, adicione um objeto ao array `mockLeadsSinteticos` em `lead.service.ts`.

---

## Integração e Backend

### Q: Quando o backend será desenvolvido?
**R:** Segundo o [CRONOGRAMA.md](CRONOGRAMA.md), o backend .NET Core levará aproximadamente **15 dias úteis (120 horas)** para ser desenvolvido.

### Q: Como será a integração?
**R:** Os serviços Angular usam `Observable` do RxJS. A integração será feita substituindo os dados mockados por chamadas HTTP:

```typescript
// Antes (mockado)
getLeads(): Observable<Lead[]> {
  return of(this.mockLeads);
}

// Depois (integrado)
getLeads(): Observable<Lead[]> {
  return this.http.get<Lead[]>(`${this.apiUrl}/leads`);
}
```

### Q: Preciso mudar muito código para integrar?
**R:** Não! A arquitetura foi projetada para facilitar a integração. Basta:
1. Configurar a URL da API em `environment.ts`
2. Atualizar os métodos dos serviços para usar `HttpClient`
3. Adicionar autenticação (JWT)

### Q: O que são as "tabelas de consolidação"?
**R:** São tabelas auxiliares que armazenam dados pré-calculados (KPIs, métricas) para evitar consultas pesadas no banco transacional. Veja detalhes em [TABELAS_CONSOLIDACAO.md](TABELAS_CONSOLIDACAO.md).

---

## Performance

### Q: Por que há delay nos dados mockados?
**R:** O `delay(500)` nos serviços simula latência de rede real, preparando a interface para o comportamento da API real.

### Q: O dashboard está lento, é normal?
**R:** No protótipo, o dashboard deve carregar em < 1 segundo. Se estiver lento:
- Verifique o console do navegador (F12) para erros
- Limpe o cache do Angular: `ng cache clean`
- Reinstale dependências: `npm install`

### Q: Quantos usuários simultâneos suporta?
**R:** Como é frontend apenas, não há limite de usuários. Cada usuário roda a aplicação no próprio navegador. O limite será do backend quando integrado.

---

## Customização

### Q: Como mudar as cores?
**R:** Edite `src/styles.scss` para cores globais, ou os arquivos `.scss` de cada componente para estilos específicos.

### Q: Como adicionar novas páginas?
**R:**
```bash
ng generate component pages/nova-pagina
```
Depois adicione a rota em `src/app/app.routes.ts`

### Q: Como adicionar novos campos aos leads?
**R:**
1. Adicione o campo na interface em `src/app/models/lead.model.ts`
2. Adicione o campo nos dados mockados em `lead.service.ts`
3. Exiba o campo no template do componente

---

## Desenvolvimento

### Q: Posso usar este código como base?
**R:** Sim! O código está estruturado para ser reutilizado e estendido.

### Q: Como contribuir?
**R:**
1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Faça commit das mudanças
4. Abra um Pull Request

### Q: Há testes automatizados?
**R:** No protótipo atual, não. Os testes serão implementados na fase de integração. Veja [CRONOGRAMA.md](CRONOGRAMA.md), Sprint 10.

### Q: Qual o padrão de código?
**R:** O projeto segue:
- Angular Style Guide
- TypeScript strict mode
- Standalone Components (Angular 14+)
- SCSS para estilos
- Nomenclatura em português (conforme modelos do banco)

---

## Cronograma

### Q: Quanto tempo leva para desenvolver o sistema completo?
**R:** Segundo o [CRONOGRAMA.md](CRONOGRAMA.md):
- **Backend .NET Core**: 120h (15 dias)
- **Integração Frontend**: 40h (5 dias)
- **Testes**: 40h (5 dias)
- **Deploy**: 24h (3 dias)
- **TOTAL**: 264h (~7 semanas)

### Q: Qual a equipe recomendada?
**R:**
- 1 Desenvolvedor Backend (.NET Core)
- 1 Desenvolvedor Frontend (Angular) - ou fullstack
- 1 QA/Tester (part-time)
- 1 DevOps (part-time)

### Q: Posso acelerar o desenvolvimento?
**R:** Sim, com mais desenvolvedores trabalhando em paralelo. Com 2 full-stacks, pode-se reduzir para ~4-5 semanas.

---

## Banco de Dados

### Q: Qual banco de dados será usado?
**R:** SQL Server (conforme cronograma e tabelas de consolidação).

### Q: Preciso criar as tabelas manualmente?
**R:** Não. O backend .NET Core usará Entity Framework Core com Migrations para criar as tabelas automaticamente.

### Q: O que são "tabelas quentes" e "frias"?
**R:**
- **Quentes**: Tabelas transacionais (CRUD de leads, histórico)
- **Frias**: Tabelas de consolidação (KPIs pré-calculados, atualizadas por jobs)

Veja [TABELAS_CONSOLIDACAO.md](TABELAS_CONSOLIDACAO.md) para detalhes.

---

## Segurança

### Q: Há autenticação?
**R:** No protótipo, não. A autenticação JWT será implementada no backend. Veja [CRONOGRAMA.md](CRONOGRAMA.md), Dia 3.

### Q: Os dados são seguros?
**R:** Como são dados mockados, não há risco. Na produção, será necessário:
- HTTPS
- Autenticação JWT
- Autorização por perfil
- Criptografia de dados sensíveis

---

## Deploy

### Q: Como fazer deploy do frontend?
**R:**
1. Build: `npm run build`
2. Arquivos estarão em `dist/crm-consorcio`
3. Hospedar em:
   - Azure Static Web Apps
   - Netlify
   - Vercel
   - IIS (Windows Server)
   - Nginx (Linux)

### Q: Preciso de servidor?
**R:** Para o frontend Angular, qualquer servidor web (Apache, Nginx, IIS) ou serviço de hosting estático serve. Para o backend .NET Core, será necessário um servidor Windows/Linux com .NET 8 Runtime.

### Q: Há CI/CD configurado?
**R:** Não no protótipo. Será configurado na Fase 4 do cronograma (Dia 31).

---

## Troubleshooting

### Q: Tela branca ao acessar
**R:**
1. Abra o console do navegador (F12)
2. Verifique erros
3. Tente: `ng cache clean && npm install`

### Q: Erro de compilação TypeScript
**R:**
```bash
ng cache clean
rm -rf node_modules package-lock.json
npm install
```

### Q: Mudanças não aparecem
**R:**
- Verifique se o `ng serve` está rodando
- Force refresh: Ctrl + Shift + R (Windows) ou Cmd + Shift + R (Mac)
- Limpe cache do navegador

### Q: Erro 404 ao navegar
**R:** Normal em desenvolvimento. O Angular Router cuida das rotas. Se persistir após deploy:
- Configure o servidor para redirecionar todas as rotas para `index.html`

---

## Documentação

### Q: Onde encontro mais informações?
**R:**
- [README.md](README.md) - Visão geral
- [INSTALACAO.md](INSTALACAO.md) - Guia de instalação
- [CRONOGRAMA.md](CRONOGRAMA.md) - 264h detalhadas
- [TABELAS_CONSOLIDACAO.md](TABELAS_CONSOLIDACAO.md) - Estratégia de DB
- [RESUMO_PROJETO.md](RESUMO_PROJETO.md) - Resumo executivo
- [ESTRUTURA_VISUAL.md](ESTRUTURA_VISUAL.md) - Diagramas visuais

### Q: Há vídeos ou tutoriais?
**R:** Não no momento. A documentação escrita é completa e detalhada.

### Q: Como reportar bugs?
**R:** Crie uma issue no repositório Git ou entre em contato com a equipe de desenvolvimento.

---

## Próximos Passos

### Q: O que fazer depois de instalar?
**R:**
1. Explorar a interface (Dashboard, Leads, Analytics)
2. Testar os filtros
3. Ver detalhes de diferentes leads
4. Revisar o código (models, services, components)
5. Ler a documentação completa

### Q: Como preparar para integração?
**R:**
1. Revisar [CRONOGRAMA.md](CRONOGRAMA.md)
2. Entender [TABELAS_CONSOLIDACAO.md](TABELAS_CONSOLIDACAO.md)
3. Configurar ambiente de desenvolvimento .NET Core
4. Preparar SQL Server
5. Configurar repositório Git

---

## Contato

### Q: Preciso de suporte, a quem contactar?
**R:** Entre em contato com a equipe de desenvolvimento do projeto.

### Q: Posso contratar desenvolvimento?
**R:** Sim, consulte a equipe para orçamento baseado no cronograma de 264 horas.

---

**Última atualização**: Janeiro 2025
**Versão**: 1.0

*Não encontrou sua pergunta? Consulte a documentação completa ou entre em contato!*
