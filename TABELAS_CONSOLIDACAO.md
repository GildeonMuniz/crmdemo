# Tabelas de Consolidação - CRM Consórcio

## 📊 Objetivo

Criar tabelas auxiliares de consolidação que serão preenchidas em **background** (jobs/workers), evitando consultas pesadas na base de dados "quente" (SQL Server transacional).

Esta estratégia garante:
- ✅ Performance nas consultas do frontend
- ✅ Redução de carga no banco de dados principal
- ✅ Cache de dados agregados
- ✅ Histórico de métricas ao longo do tempo

---

## 🗄️ Tabelas Propostas

### 1. tblConsolidacaoDashboard
**Objetivo**: Armazenar KPIs consolidados por período

```sql
CREATE TABLE tblConsolidacaoDashboard (
    ConsolidacaoDashboardID INT PRIMARY KEY IDENTITY(1,1),
    DataConsolidacao DATETIME NOT NULL,
    PeriodoTipo VARCHAR(20) NOT NULL, -- 'Diario', 'Semanal', 'Mensal'
    DataInicio DATETIME NOT NULL,
    DataFim DATETIME NOT NULL,

    -- KPIs Gerais
    TotalLeads INT NOT NULL,
    LeadsAtivos INT NOT NULL,
    LeadsConvertidos INT NOT NULL,
    LeadsPerdidos INT NOT NULL,
    TaxaConversao DECIMAL(5,2),

    -- Valores Financeiros
    ValorTotalPropostas DECIMAL(18,2),
    ValorTotalConvertido DECIMAL(18,2),
    TicketMedio DECIMAL(18,2),

    -- Distribuição
    LeadsNovos INT,
    LeadsEmNegociacao INT,
    LeadsAguardandoDoc INT,
    LeadsEmAnalise INT,

    -- Metadados
    DataHoraCriacao DATETIME DEFAULT GETDATE(),
    DataHoraAtualizacao DATETIME,

    INDEX IDX_DataConsolidacao (DataConsolidacao),
    INDEX IDX_Periodo (PeriodoTipo, DataInicio, DataFim)
);
```

**Atualização**: Job diário às 00:30 (consolida dia anterior)

---

### 2. tblConsolidacaoLeadsPorSituacao
**Objetivo**: Snapshot de distribuição de leads por situação

```sql
CREATE TABLE tblConsolidacaoLeadsPorSituacao (
    ConsolidacaoSituacaoID INT PRIMARY KEY IDENTITY(1,1),
    DataConsolidacao DATETIME NOT NULL,
    SituacaoID INT NOT NULL,
    SituacaoNome VARCHAR(100) NOT NULL,

    -- Métricas
    QuantidadeLeads INT NOT NULL,
    PercentualTotal DECIMAL(5,2),
    ValorTotalPropostas DECIMAL(18,2),
    TicketMedio DECIMAL(18,2),

    -- Variação
    VariacaoDia INT, -- Comparado com dia anterior
    VariacaoSemana INT, -- Comparado com semana anterior

    -- Metadados
    DataHoraCriacao DATETIME DEFAULT GETDATE(),

    INDEX IDX_DataSituacao (DataConsolidacao, SituacaoID)
);
```

**Atualização**: Job diário às 01:00

---

### 3. tblConsolidacaoFunilVendas
**Objetivo**: Armazenar métricas do funil de vendas

```sql
CREATE TABLE tblConsolidacaoFunilVendas (
    ConsolidacaoFunilID INT PRIMARY KEY IDENTITY(1,1),
    DataConsolidacao DATETIME NOT NULL,
    PeriodoTipo VARCHAR(20) NOT NULL,

    -- Etapas do Funil
    EtapaOrdem INT NOT NULL,
    EtapaNome VARCHAR(100) NOT NULL,
    QuantidadeLeads INT NOT NULL,
    PercentualTotal DECIMAL(5,2),
    PercentualConversao DECIMAL(5,2), -- Conversão da etapa anterior

    -- Tempo Médio
    TempoMedioEtapaDias DECIMAL(10,2),

    -- Metadados
    DataHoraCriacao DATETIME DEFAULT GETDATE(),

    INDEX IDX_DataPeriodo (DataConsolidacao, PeriodoTipo)
);
```

**Atualização**: Job diário às 01:30

---

### 4. tblConsolidacaoPerformanceVendedor
**Objetivo**: Performance individual dos vendedores

```sql
CREATE TABLE tblConsolidacaoPerformanceVendedor (
    ConsolidacaoPerformanceID INT PRIMARY KEY IDENTITY(1,1),
    DataConsolidacao DATETIME NOT NULL,
    PeriodoTipo VARCHAR(20) NOT NULL,
    DataInicio DATETIME NOT NULL,
    DataFim DATETIME NOT NULL,

    FuncionarioID INT NOT NULL,
    FuncionarioNome VARCHAR(200) NOT NULL,

    -- Métricas de Leads
    TotalLeads INT NOT NULL,
    LeadsConvertidos INT NOT NULL,
    LeadsPerdidos INT NOT NULL,
    TaxaConversao DECIMAL(5,2),

    -- Métricas Financeiras
    ValorTotalVendas DECIMAL(18,2),
    TicketMedio DECIMAL(18,2),

    -- Atividades
    TotalInteracoes INT,
    TotalLigacoes INT,
    TotalEmails INT,
    TotalWhatsApp INT,

    -- Tempo Médio
    TempoMedioConversaoDias DECIMAL(10,2),

    -- Ranking
    PosicaoRanking INT,

    -- Metadados
    DataHoraCriacao DATETIME DEFAULT GETDATE(),

    INDEX IDX_DataFuncionario (DataConsolidacao, FuncionarioID),
    INDEX IDX_Periodo (PeriodoTipo, DataInicio)
);
```

**Atualização**: Job diário às 02:00

---

### 5. tblConsolidacaoLeadsPorOrigem
**Objetivo**: Análise de canais de aquisição

```sql
CREATE TABLE tblConsolidacaoLeadsPorOrigem (
    ConsolidacaoOrigemID INT PRIMARY KEY IDENTITY(1,1),
    DataConsolidacao DATETIME NOT NULL,
    PeriodoTipo VARCHAR(20) NOT NULL,

    OrigemLead VARCHAR(100) NOT NULL,
    CampanhaID INT,
    CampanhaNome VARCHAR(200),

    -- Métricas
    QuantidadeLeads INT NOT NULL,
    PercentualTotal DECIMAL(5,2),
    LeadsConvertidos INT,
    TaxaConversao DECIMAL(5,2),

    -- Financeiro
    ValorTotalPropostas DECIMAL(18,2),
    ValorConvertido DECIMAL(18,2),
    CustoAquisicao DECIMAL(18,2), -- CAC
    ROI DECIMAL(10,2),

    -- Metadados
    DataHoraCriacao DATETIME DEFAULT GETDATE(),

    INDEX IDX_DataOrigem (DataConsolidacao, OrigemLead)
);
```

**Atualização**: Job diário às 02:30

---

### 6. tblConsolidacaoLeadsPorProduto
**Objetivo**: Performance por tipo de produto

```sql
CREATE TABLE tblConsolidacaoLeadsPorProduto (
    ConsolidacaoProdutoID INT PRIMARY KEY IDENTITY(1,1),
    DataConsolidacao DATETIME NOT NULL,
    PeriodoTipo VARCHAR(20) NOT NULL,

    ProdutoID INT NOT NULL,
    ProdutoNome VARCHAR(200) NOT NULL,
    TipoBem VARCHAR(50), -- 'Imóvel', 'Auto', 'Serviços'

    -- Métricas de Volume
    QuantidadeLeads INT NOT NULL,
    PercentualTotal DECIMAL(5,2),
    LeadsConvertidos INT,
    TaxaConversao DECIMAL(5,2),

    -- Financeiro
    ValorTotalPropostas DECIMAL(18,2),
    ValorMinimoPropostas DECIMAL(18,2),
    ValorMaximoPropostas DECIMAL(18,2),
    ValorMedioPropostas DECIMAL(18,2),
    TicketMedio DECIMAL(18,2),

    -- Metadados
    DataHoraCriacao DATETIME DEFAULT GETDATE(),

    INDEX IDX_DataProduto (DataConsolidacao, ProdutoID)
);
```

**Atualização**: Job diário às 03:00

---

### 7. tblConsolidacaoTendenciaTemporal
**Objetivo**: Série histórica para análise de tendências

```sql
CREATE TABLE tblConsolidacaoTendenciaTemporal (
    ConsolidacaoTemporalID INT PRIMARY KEY IDENTITY(1,1),
    Data DATETIME NOT NULL,
    TipoGranularidade VARCHAR(20) NOT NULL, -- 'Hora', 'Dia', 'Semana', 'Mes'

    -- Volume de Leads
    LeadsRecebidos INT NOT NULL,
    LeadsQualificados INT,
    LeadsConvertidos INT,
    LeadsPerdidos INT,

    -- Financeiro
    ValorTotalRecebido DECIMAL(18,2),
    ValorTotalConvertido DECIMAL(18,2),

    -- Médias
    TaxaConversaoPeriodo DECIMAL(5,2),
    TicketMedioPeriodo DECIMAL(18,2),
    TempoMedioConversaoDias DECIMAL(10,2),

    -- Comparativos
    VariacaoPercentualPeriodoAnterior DECIMAL(5,2),

    -- Metadados
    DataHoraCriacao DATETIME DEFAULT GETDATE(),

    INDEX IDX_DataGranularidade (Data, TipoGranularidade),
    INDEX IDX_Data (Data DESC)
);
```

**Atualização**:
- Granularidade 'Dia': Job diário às 00:00
- Granularidade 'Semana': Job semanal domingo 01:00
- Granularidade 'Mes': Job mensal dia 1 às 02:00

---

### 8. tblConsolidacaoInteracoes
**Objetivo**: Análise de interações e engajamento

```sql
CREATE TABLE tblConsolidacaoInteracoes (
    ConsolidacaoInteracaoID INT PRIMARY KEY IDENTITY(1,1),
    DataConsolidacao DATETIME NOT NULL,
    PeriodoTipo VARCHAR(20) NOT NULL,

    -- Por Tipo de Interação
    TotalInteracoes INT NOT NULL,
    InteracoesLigacao INT,
    InteracoesEmail INT,
    InteracoesWhatsApp INT,
    InteracoesSMS INT,
    InteracoesOutros INT,

    -- Por Tipo de Acionamento
    AcionamentosAtivos INT,
    AcionamentosReceptivos INT,

    -- Métricas de Qualidade
    TaxaResposta DECIMAL(5,2),
    TempoMedioRespostaDias DECIMAL(10,2),
    InteracoesPorLeadMedia DECIMAL(10,2),

    -- Agendamentos
    TotalAgendamentos INT,
    AgendamentosCumpridos INT,
    AgendamentosNaoCumpridos INT,
    TaxaCumprimentoAgendas DECIMAL(5,2),

    -- Metadados
    DataHoraCriacao DATETIME DEFAULT GETDATE(),

    INDEX IDX_DataPeriodo (DataConsolidacao, PeriodoTipo)
);
```

**Atualização**: Job diário às 03:30

---

## ⚙️ Estratégia de Processamento

### Jobs de Background (.NET Core)

```csharp
// Usando Hangfire ou Quartz.NET

public class ConsolidacaoJob
{
    [RecurringJob("0 30 0 * * *")] // 00:30 diariamente
    public async Task ConsolidarDashboardDiario()
    {
        var dataConsolidacao = DateTime.Now.Date.AddDays(-1);

        // 1. Buscar dados do dia anterior
        var leads = await _leadRepository.GetByDateRange(
            dataConsolidacao,
            dataConsolidacao.AddDays(1)
        );

        // 2. Calcular métricas
        var consolidacao = new ConsolidacaoDashboard
        {
            DataConsolidacao = DateTime.Now,
            PeriodoTipo = "Diario",
            DataInicio = dataConsolidacao,
            DataFim = dataConsolidacao.AddDays(1),
            TotalLeads = leads.Count,
            LeadsConvertidos = leads.Count(l => l.Convertido),
            // ... outras métricas
        };

        // 3. Inserir na tabela de consolidação
        await _consolidacaoRepository.Insert(consolidacao);
    }
}
```

---

## 📈 Benefícios da Abordagem

### Performance
- ✅ Consultas no frontend retornam em **< 100ms**
- ✅ Redução de **90%** na carga do banco transacional
- ✅ Dados pré-calculados disponíveis instantaneamente

### Escalabilidade
- ✅ Suporta **milhões de leads** sem degradação
- ✅ Jobs podem rodar em servidores separados
- ✅ Fácil implementação de cache (Redis)

### Confiabilidade
- ✅ Histórico preservado mesmo com alterações nos dados originais
- ✅ Auditoria de alterações
- ✅ Recuperação de dados em caso de falhas

### Manutenção
- ✅ Queries simples no frontend
- ✅ Lógica de negócio centralizada nos jobs
- ✅ Fácil identificação de problemas de performance

---

## 🔄 Estratégia de Cache (Opcional)

### Redis para Cache de Leitura

```csharp
public class DashboardService
{
    private readonly IDistributedCache _cache;

    public async Task<DashboardData> GetDashboard(string periodo)
    {
        var cacheKey = $"dashboard:{periodo}:{DateTime.Now:yyyyMMdd}";

        // 1. Tentar buscar do cache
        var cached = await _cache.GetStringAsync(cacheKey);
        if (cached != null)
            return JsonSerializer.Deserialize<DashboardData>(cached);

        // 2. Buscar da tabela de consolidação
        var data = await _consolidacaoRepository
            .GetDashboardByPeriodo(periodo);

        // 3. Armazenar no cache (1 hora)
        await _cache.SetStringAsync(
            cacheKey,
            JsonSerializer.Serialize(data),
            new DistributedCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(1)
            }
        );

        return data;
    }
}
```

---

## 📊 Estimativa de Tamanho das Tabelas

Com **100.000 leads/mês**:

| Tabela | Registros/Dia | Tamanho/Ano | Retenção Sugerida |
|--------|--------------|-------------|-------------------|
| tblConsolidacaoDashboard | 3 | ~1 KB | 5 anos |
| tblConsolidacaoLeadsPorSituacao | ~20 | ~10 KB | 3 anos |
| tblConsolidacaoFunilVendas | ~18 | ~5 KB | 3 anos |
| tblConsolidacaoPerformanceVendedor | ~150 | ~100 KB | 2 anos |
| tblConsolidacaoLeadsPorOrigem | ~30 | ~15 KB | 2 anos |
| tblConsolidacaoLeadsPorProduto | ~15 | ~8 KB | 3 anos |
| tblConsolidacaoTendenciaTemporal | ~40 | ~20 KB | 5 anos |
| tblConsolidacaoInteracoes | ~10 | ~5 KB | 2 anos |

**Total estimado**: ~150 MB/ano (totalmente gerenciável)

---

## 🚀 Implementação Recomendada

### Fase 1 (Semana 1-2)
1. Criar tabelas de consolidação
2. Implementar jobs básicos (Dashboard, Situação, Funil)
3. Ajustar APIs do backend para consumir tabelas consolidadas

### Fase 2 (Semana 3-4)
4. Implementar jobs de Performance e Tendências
5. Implementar cache Redis
6. Testes de carga e ajustes

### Fase 3 (Semana 5)
7. Monitoramento e alertas
8. Otimizações finais
9. Documentação

---

## 📝 Monitoramento

Implementar logs e métricas para:
- ✅ Tempo de execução de cada job
- ✅ Quantidade de registros processados
- ✅ Alertas em caso de falhas
- ✅ Comparação de dados consolidados vs. tempo real (validação)
