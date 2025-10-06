import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { LeadSintetico, LeadAnalitico, VendaHistorico, LeadAgendaHistorico, SLASituacao, Fase, Situacao } from '../models/lead.model';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  // Configuração de Fases baseada no Excel
  private fases: Fase[] = [
    { id: 1, nome: 'Recebido a Distribuir', ordem: 1, cor: '#17a2b8', icone: '📥' },
    { id: 2, nome: 'Distribuídos para Contato', ordem: 2, cor: '#007bff', icone: '📞' },
    { id: 3, nome: 'Redistribuído', ordem: 3, cor: '#6c757d', icone: '🔄' },
    { id: 4, nome: 'Sem Interesse', ordem: 4, cor: '#dc3545', icone: '❌' },
    { id: 5, nome: 'Venda', ordem: 5, cor: '#28a745', icone: '✅' },
    { id: 6, nome: 'Outros', ordem: 6, cor: '#ffc107', icone: '📋' }
  ];

  // Configuração de Situações por Fase
  private situacoes: Situacao[] = [
    // Fase 1: Recebido a Distribuir
    { id: 101, nome: 'Não dist por CPF Recusado', faseId: 1, ordem: 1, slaDias: 0, descricao: 'CPF recusado no sistema' },
    { id: 102, nome: 'Não distr por outros', faseId: 1, ordem: 2, slaDias: 0, descricao: 'Outros motivos de não distribuição' },
    { id: 103, nome: 'Distribuir para 1º acionamento', faseId: 1, ordem: 3, slaDias: 1, descricao: 'Aguardando primeiro contato' },
    { id: 104, nome: 'Distribuir para 2º ou 3º acionamento', faseId: 1, ordem: 4, slaDias: 2, descricao: 'Aguardando novo acionamento' },
    { id: 105, nome: 'Não distribuído/baixar da Carteira', faseId: 1, ordem: 5, slaDias: 0, descricao: 'Lead a ser baixado' },

    // Fase 2: Distribuídos para Contato
    { id: 201, nome: 'Contato com sucesso/pediu retorno', faseId: 2, ordem: 1, slaDias: 3, descricao: 'Cliente pediu para retornar' },
    { id: 202, nome: 'Contato pediu retorno/reagendado', faseId: 2, ordem: 2, slaDias: 2, descricao: 'Contato reagendado' },
    { id: 203, nome: 'Contato com sucesso/sem interesse', faseId: 2, ordem: 3, slaDias: 0, descricao: 'Cliente sem interesse' },
    { id: 204, nome: '1ª Tentativa de Contato sem sucesso', faseId: 2, ordem: 4, slaDias: 1, descricao: 'Primeira tentativa sem sucesso' },
    { id: 205, nome: '2ª Tentativa de Contato sem Sucesso', faseId: 2, ordem: 5, slaDias: 2, descricao: 'Segunda tentativa sem sucesso' },
    { id: 206, nome: '3ª Tentativa de Contato sem Sucesso', faseId: 2, ordem: 6, slaDias: 3, descricao: 'Terceira tentativa - redistribuir' },
    { id: 207, nome: 'Contato com sucesso/vai pensar', faseId: 2, ordem: 7, slaDias: 5, descricao: 'Cliente vai pensar' },
    { id: 208, nome: 'Contato com Sucesso/pediu contato via WhatsApp', faseId: 2, ordem: 8, slaDias: 2, descricao: 'Preferência por WhatsApp' },
    { id: 209, nome: 'Venda Realizada', faseId: 2, ordem: 9, slaDias: 0, descricao: 'Venda concluída' },
    { id: 210, nome: 'Venda em Formalização', faseId: 2, ordem: 10, slaDias: 3, descricao: 'Venda em processo de formalização' },

    // Fase 3: Redistribuído
    { id: 301, nome: 'Red./Contato com Sucesso pediu retorno', faseId: 3, ordem: 1, slaDias: 3, descricao: 'Redistribuído - pediu retorno' },
    { id: 302, nome: 'Red./Contato com Sucesso sem interesse', faseId: 3, ordem: 2, slaDias: 0, descricao: 'Redistribuído - sem interesse' },
    { id: 303, nome: 'Red/Contato SEM Sucesso/Enviar WhatsApp', faseId: 3, ordem: 3, slaDias: 2, descricao: 'Sem sucesso - enviar WhatsApp' },
    { id: 304, nome: 'Red/Venda Realizada', faseId: 3, ordem: 4, slaDias: 0, descricao: 'Venda realizada após redistribuição' },
    { id: 305, nome: 'Red/Venda em Formalização', faseId: 3, ordem: 5, slaDias: 3, descricao: 'Venda em formalização' },

    // Fase 4: Sem Interesse
    { id: 401, nome: 'Baixado da Carteira', faseId: 4, ordem: 1, slaDias: 0, descricao: 'Lead removido da carteira' },
    { id: 402, nome: 'Rd sem interesse/Baixado', faseId: 4, ordem: 2, slaDias: 0, descricao: 'Redistribuído sem interesse' },

    // Fase 5: Venda
    { id: 501, nome: 'Venda em Andamento', faseId: 5, ordem: 1, slaDias: 5, descricao: 'Venda em processo' },
    { id: 502, nome: 'Venda realizada com sucesso', faseId: 5, ordem: 2, slaDias: 0, descricao: 'Venda concluída' },
    { id: 503, nome: 'Venda com 1 pagamento realizado', faseId: 5, ordem: 3, slaDias: 0, descricao: 'Primeira parcela paga' },
    { id: 504, nome: 'Venda com 2 pagamentos realizados', faseId: 5, ordem: 4, slaDias: 0, descricao: 'Segunda parcela paga' },
    { id: 505, nome: 'Venda com 3 pagamentos realizados', faseId: 5, ordem: 5, slaDias: 0, descricao: 'Terceira parcela paga' },

    // Fase 6: Outros
    { id: 601, nome: 'Outros', faseId: 6, ordem: 1, slaDias: 0, descricao: 'Situações diversas' }
  ];

  // Configuração de SLAs por situação (mantido para compatibilidade)
  private slaConfig: SLASituacao[] = [
    { situacao: 'Novo Lead', slaDias: 2, descricao: 'Primeiro contato deve ser feito em até 2 dias' },
    { situacao: 'Em Negociação', slaDias: 7, descricao: 'Negociação deve ser concluída em até 7 dias' },
    { situacao: 'Aguardando Documentação', slaDias: 5, descricao: 'Documentação deve ser recebida em até 5 dias' },
    { situacao: 'Em Análise', slaDias: 3, descricao: 'Análise deve ser finalizada em até 3 dias' },
    { situacao: 'Convertido', slaDias: 0, descricao: 'Lead convertido - sem SLA' },
    { situacao: 'Perdido', slaDias: 0, descricao: 'Lead perdido - sem SLA' }
  ];

  private mockLeadsSinteticos: LeadSintetico[] = [
    {
      id: 1,
      nome: 'João Silva Santos',
      cpf: '123.456.789-00',
      telefone: '(11) 98765-4321',
      email: 'joao.silva@email.com',
      produto: 'Consórcio Imóvel',
      fase: 'Distribuídos para Contato',
      faseId: 2,
      situacao: 'Contato com sucesso/vai pensar',
      situacaoId: 207,
      dataRecebimento: new Date('2025-01-15'),
      valorProposta: 250000,
      proximaAcao: 'Enviar documentação',
      responsavel: 'Maria Oliveira',
      dataEntradaSituacao: new Date('2024-12-28')
    },
    {
      id: 2,
      nome: 'Ana Paula Rodrigues',
      cpf: '987.654.321-00',
      telefone: '(11) 97654-3210',
      email: 'ana.rodrigues@email.com',
      produto: 'Consórcio Auto',
      fase: 'Recebido a Distribuir',
      faseId: 1,
      situacao: 'Distribuir para 1º acionamento',
      situacaoId: 103,
      dataRecebimento: new Date('2025-01-03'),
      valorProposta: 80000,
      proximaAcao: 'Primeiro contato',
      responsavel: 'Carlos Mendes',
      dataEntradaSituacao: new Date('2025-01-03')
    },
    {
      id: 3,
      nome: 'Pedro Henrique Costa',
      cpf: '456.789.123-00',
      telefone: '(21) 99876-5432',
      email: 'pedro.costa@email.com',
      produto: 'Consórcio Imóvel',
      fase: 'Distribuídos para Contato',
      faseId: 2,
      situacao: 'Contato pediu retorno/reagendado',
      situacaoId: 202,
      dataRecebimento: new Date('2024-12-15'),
      valorProposta: 350000,
      proximaAcao: 'Cobrar documentos',
      responsavel: 'Maria Oliveira',
      dataEntradaSituacao: new Date('2025-01-02')
    },
    {
      id: 4,
      nome: 'Juliana Ferreira Lima',
      cpf: '321.654.987-00',
      telefone: '(11) 96543-2109',
      email: 'juliana.lima@email.com',
      produto: 'Consórcio Auto',
      fase: 'Venda',
      faseId: 5,
      situacao: 'Venda realizada com sucesso',
      situacaoId: 502,
      dataRecebimento: new Date('2025-01-05'),
      valorProposta: 95000,
      proximaAcao: 'Assinatura de contrato',
      responsavel: 'Carlos Mendes'
    },
    {
      id: 5,
      nome: 'Roberto Carlos Almeida',
      cpf: '789.123.456-00',
      telefone: '(11) 95432-1098',
      email: 'roberto.almeida@email.com',
      produto: 'Consórcio Serviços',
      fase: 'Distribuídos para Contato',
      faseId: 2,
      situacao: 'Contato com sucesso/pediu retorno',
      situacaoId: 201,
      dataRecebimento: new Date('2025-01-18'),
      valorProposta: 150000,
      proximaAcao: 'Apresentar proposta',
      responsavel: 'Ana Santos'
    },
    {
      id: 6,
      nome: 'Fernanda Souza Martins',
      cpf: '654.987.321-00',
      telefone: '(21) 94321-0987',
      email: 'fernanda.martins@email.com',
      produto: 'Consórcio Imóvel',
      fase: 'Distribuídos para Contato',
      faseId: 2,
      situacao: '1ª Tentativa de Contato sem sucesso',
      situacaoId: 204,
      dataRecebimento: new Date('2025-01-22'),
      valorProposta: 420000,
      proximaAcao: 'Agendar reunião',
      responsavel: 'Maria Oliveira'
    },
    {
      id: 7,
      nome: 'Marcelo Augusto Pereira',
      cpf: '147.258.369-00',
      telefone: '(11) 93210-9876',
      email: 'marcelo.pereira@email.com',
      produto: 'Consórcio Auto',
      fase: 'Venda',
      faseId: 5,
      situacao: 'Venda em Andamento',
      situacaoId: 501,
      dataRecebimento: new Date('2024-12-20'),
      valorProposta: 72000,
      proximaAcao: 'Análise de crédito',
      responsavel: 'Carlos Mendes',
      dataEntradaSituacao: new Date('2025-01-01')
    },
    {
      id: 8,
      nome: 'Camila Ribeiro Santos',
      cpf: '369.147.258-00',
      telefone: '(11) 92109-8765',
      email: 'camila.santos@email.com',
      produto: 'Consórcio Imóvel',
      fase: 'Sem Interesse',
      faseId: 4,
      situacao: 'Baixado da Carteira',
      situacaoId: 401,
      dataRecebimento: new Date('2025-01-08'),
      valorProposta: 180000,
      proximaAcao: 'Arquivado',
      responsavel: 'Ana Santos'
    },
    {
      id: 9,
      nome: 'Ricardo Mendes Silva',
      cpf: '258.369.147-00',
      telefone: '(21) 91098-7654',
      email: 'ricardo.silva@email.com',
      produto: 'Consórcio Serviços',
      fase: 'Redistribuído',
      faseId: 3,
      situacao: 'Red./Contato com Sucesso pediu retorno',
      situacaoId: 301,
      dataRecebimento: new Date('2024-12-18'),
      valorProposta: 120000,
      proximaAcao: 'Enviar simulação',
      responsavel: 'Maria Oliveira',
      dataEntradaSituacao: new Date('2024-12-30')
    },
    {
      id: 10,
      nome: 'Patricia Gomes Oliveira',
      cpf: '951.753.852-00',
      telefone: '(11) 90987-6543',
      email: 'patricia.oliveira@email.com',
      produto: 'Consórcio Auto',
      fase: 'Venda',
      faseId: 5,
      situacao: 'Venda com 1 pagamento realizado',
      situacaoId: 503,
      dataRecebimento: new Date('2025-01-03'),
      valorProposta: 88000,
      proximaAcao: 'Finalizado',
      responsavel: 'Carlos Mendes'
    },
    {
      id: 11,
      nome: 'Lucas Gabriel Rocha',
      cpf: '753.951.456-00',
      telefone: '(11) 98876-5432',
      email: 'lucas.rocha@email.com',
      produto: 'Consórcio Imóvel',
      fase: 'Recebido a Distribuir',
      faseId: 1,
      situacao: 'Distribuir para 2º ou 3º acionamento',
      situacaoId: 104,
      dataRecebimento: new Date('2025-01-04'),
      valorProposta: 295000,
      proximaAcao: 'Qualificação',
      responsavel: 'Ana Santos',
      dataEntradaSituacao: new Date('2025-01-04')
    },
    {
      id: 12,
      nome: 'Beatriz Cristina Moura',
      cpf: '852.654.159-00',
      telefone: '(21) 97765-4321',
      email: 'beatriz.moura@email.com',
      produto: 'Consórcio Auto',
      fase: 'Distribuídos para Contato',
      faseId: 2,
      situacao: 'Venda em Formalização',
      situacaoId: 210,
      dataRecebimento: new Date('2025-01-14'),
      valorProposta: 105000,
      proximaAcao: 'Solicitar comprovante de renda',
      responsavel: 'Carlos Mendes'
    }
  ];

  private mockHistoricos: Map<number, VendaHistorico[]> = new Map([
    [1, [
      {
        vendaHistoricoID: 1,
        vendaID: 1,
        produtoID: 101,
        situacaoID: 2,
        funcionarioID: 5,
        carteiraID: 1,
        atendimentoID: 1001,
        clienteID: 1,
        ocorrenciaID: 1,
        automatico: false,
        importado: false,
        ligacao0800: false,
        dataDoHistorico: new Date('2025-01-15'),
        dataDoEvento: new Date('2025-01-15'),
        horaDoHistorico: '10:30',
        tipoAcionamento: 'Ativo',
        contato: 'Telefone',
        meioComunicacao: 'Ligação',
        idSistemaExterno: 'EXT001',
        historico: 'Cliente demonstrou interesse. Solicitou mais informações sobre planos de imóvel.',
        whatsapp: false
      },
      {
        vendaHistoricoID: 2,
        vendaID: 1,
        produtoID: 101,
        situacaoID: 2,
        funcionarioID: 5,
        carteiraID: 1,
        atendimentoID: 1002,
        clienteID: 1,
        ocorrenciaID: 2,
        automatico: false,
        importado: false,
        ligacao0800: false,
        dataDoHistorico: new Date('2025-01-17'),
        dataDoEvento: new Date('2025-01-17'),
        horaDoHistorico: '14:15',
        tipoAcionamento: 'Ativo',
        contato: 'Email',
        meioComunicacao: 'Email',
        idSistemaExterno: 'EXT002',
        historico: 'Enviada proposta comercial com 3 opções de crédito. Aguardando retorno.',
        whatsapp: false,
        creditoNegociado: 250000
      },
      {
        vendaHistoricoID: 3,
        vendaID: 1,
        produtoID: 101,
        situacaoID: 3,
        funcionarioID: 5,
        carteiraID: 1,
        atendimentoID: 1003,
        clienteID: 1,
        ocorrenciaID: 3,
        automatico: false,
        importado: false,
        ligacao0800: false,
        dataDoHistorico: new Date('2025-01-19'),
        dataDoEvento: new Date('2025-01-19'),
        horaDoHistorico: '11:00',
        tipoAcionamento: 'Receptivo',
        contato: 'WhatsApp',
        meioComunicacao: 'WhatsApp',
        idSistemaExterno: 'EXT003',
        historico: 'Cliente retornou. Aceitou proposta de R$ 250.000 em 120 meses. Solicitando documentação.',
        whatsapp: true,
        whatsAppMensagemID: 5001,
        creditoNegociado: 250000,
        expectativaContemplacao: new Date('2026-06-15')
      }
    ]],
    [3, [
      {
        vendaHistoricoID: 10,
        vendaID: 3,
        produtoID: 101,
        situacaoID: 4,
        funcionarioID: 5,
        carteiraID: 1,
        atendimentoID: 1010,
        clienteID: 3,
        ocorrenciaID: 10,
        automatico: false,
        importado: false,
        ligacao0800: false,
        dataDoHistorico: new Date('2025-01-10'),
        dataDoEvento: new Date('2025-01-10'),
        horaDoHistorico: '09:15',
        tipoAcionamento: 'Ativo',
        contato: 'Telefone',
        meioComunicacao: 'Ligação',
        idSistemaExterno: 'EXT010',
        historico: 'Primeira abordagem. Cliente interessado em imóvel de até R$ 350.000.',
        whatsapp: false
      },
      {
        vendaHistoricoID: 11,
        vendaID: 3,
        produtoID: 101,
        situacaoID: 5,
        funcionarioID: 5,
        carteiraID: 1,
        atendimentoID: 1011,
        clienteID: 3,
        ocorrenciaID: 11,
        automatico: false,
        importado: false,
        ligacao0800: false,
        dataDoHistorico: new Date('2025-01-13'),
        dataDoEvento: new Date('2025-01-13'),
        horaDoHistorico: '15:30',
        tipoAcionamento: 'Ativo',
        contato: 'Email',
        meioComunicacao: 'Email',
        idSistemaExterno: 'EXT011',
        historico: 'Proposta aceita. Solicitada documentação: RG, CPF, Comprovante de Residência e Renda.',
        whatsapp: false,
        creditoNegociado: 350000
      }
    ]]
  ]);

  private mockAgendamentos: Map<number, LeadAgendaHistorico[]> = new Map([
    [1, [
      {
        leadAgendaID: 1,
        vendaID: 1,
        funcionarioIDCadastro: 5,
        funcionarioIDResponsavel: 5,
        novoMelhorHorario: 'Manhã (09h-12h)',
        dataDaAgenda: new Date('2025-01-25'),
        horaDaAgenda: '10:00',
        agendado: true,
        dataRegistro: new Date('2025-01-19')
      },
      {
        leadAgendaID: 2,
        vendaID: 1,
        funcionarioIDCadastro: 5,
        funcionarioIDResponsavel: 5,
        novoMelhorHorario: 'Tarde (14h-17h)',
        dataDaAgenda: new Date('2025-01-28'),
        horaDaAgenda: '15:00',
        agendado: true,
        dataRegistro: new Date('2025-01-20')
      }
    ]],
    [3, [
      {
        leadAgendaID: 5,
        vendaID: 3,
        funcionarioIDCadastro: 5,
        funcionarioIDResponsavel: 5,
        novoMelhorHorario: 'Tarde (14h-17h)',
        dataDaAgenda: new Date('2025-01-26'),
        horaDaAgenda: '14:30',
        agendado: true,
        dataRegistro: new Date('2025-01-13')
      }
    ]]
  ]);

  private getSLAForSituacao(situacao: string): number {
    // Primeiro tenta buscar pela nova estrutura de situações
    const sit = this.situacoes.find(s => s.nome === situacao);
    if (sit) return sit.slaDias;

    // Fallback para configuração antiga
    const sla = this.slaConfig.find(s => s.situacao === situacao);
    return sla ? sla.slaDias : 0;
  }

  getFases(): Fase[] {
    return this.fases;
  }

  getSituacoesByFase(faseId: number): Situacao[] {
    return this.situacoes.filter(s => s.faseId === faseId).sort((a, b) => a.ordem - b.ordem);
  }

  getAllSituacoes(): Situacao[] {
    return this.situacoes;
  }

  private calculateDiasNaSituacao(dataEntrada: Date): number {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // Zerar horas para contar apenas dias completos

    const dataInicio = new Date(dataEntrada);
    dataInicio.setHours(0, 0, 0, 0);

    const diffTime = hoje.getTime() - dataInicio.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Retorna sempre valor >= 0
    return diffDays >= 0 ? diffDays : 0;
  }

  private enrichLeadsWithSLA(leads: LeadSintetico[]): LeadSintetico[] {
    return leads.map(lead => {
      const dataEntrada = lead.dataEntradaSituacao || lead.dataRecebimento;
      const diasNaSituacao = this.calculateDiasNaSituacao(dataEntrada);
      const slaDias = this.getSLAForSituacao(lead.situacao);

      return {
        ...lead,
        dataEntradaSituacao: dataEntrada,
        diasNaSituacao,
        slaDias
      };
    });
  }

  getSLAConfig(): SLASituacao[] {
    return this.slaConfig;
  }

  getLeadsSinteticos(): Observable<LeadSintetico[]> {
    const leadsWithSLA = this.enrichLeadsWithSLA(this.mockLeadsSinteticos);
    return of(leadsWithSLA).pipe(delay(500));
  }

  getLeadById(id: number): Observable<LeadAnalitico | null> {
    const leadSintetico = this.mockLeadsSinteticos.find(l => l.id === id);

    if (!leadSintetico) {
      return of(null);
    }

    const leadAnalitico: LeadAnalitico = {
      ...leadSintetico,
      dataNascimento: new Date('1985-03-15'),
      tipoBem: leadSintetico.produto.includes('Imóvel') ? 'Imóvel' : leadSintetico.produto.includes('Auto') ? 'Veículo' : 'Serviços',
      origemLead: 'Site',
      campanha: 'Campanha Janeiro 2025',
      cluster: 'Cluster A',
      melhorHorarioContato: 'Manhã (09h-12h)',
      historico: this.mockHistoricos.get(id) || [],
      agendamentos: this.mockAgendamentos.get(id) || [],
      observacoes: 'Cliente demonstrou interesse em crédito para aquisição de imóvel. Perfil qualificado.'
    };

    return of(leadAnalitico).pipe(delay(500));
  }

  filterLeads(filtros: any): Observable<LeadSintetico[]> {
    let leads = [...this.mockLeadsSinteticos];

    if (filtros.situacao) {
      leads = leads.filter(l => l.situacao === filtros.situacao);
    }

    if (filtros.produto) {
      leads = leads.filter(l => l.produto === filtros.produto);
    }

    if (filtros.responsavel) {
      leads = leads.filter(l => l.responsavel === filtros.responsavel);
    }

    if (filtros.dataInicio && filtros.dataFim) {
      leads = leads.filter(l =>
        l.dataRecebimento >= filtros.dataInicio &&
        l.dataRecebimento <= filtros.dataFim
      );
    }

    if (filtros.busca) {
      const busca = filtros.busca.toLowerCase();
      leads = leads.filter(l =>
        l.nome.toLowerCase().includes(busca) ||
        l.cpf.includes(busca) ||
        l.email.toLowerCase().includes(busca) ||
        l.telefone.includes(busca)
      );
    }

    return of(leads).pipe(delay(500));
  }
}
