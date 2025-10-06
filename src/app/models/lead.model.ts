export interface DadosLeadVenda {
  dadosLeadVendaID: number;
  leadVendaId: number;
  id_LeadBanco: string;
  nome: string;
  dataNascimento: Date;
  telefone: string;
  email: string;
  cpf: string;
  codigoPessoa: string;
  tipoBem: string;
  preferenciaContato: string;
  origemLead: string;
  cluster: string;
  campanha: string;
  periodoReagendamento: string;
  dataPreenchimento: Date;
  segmento: string;
  textoReagendamento: string;
  melhorHorarioContato: string;
  nomeGerente: string;
  informacoesAdicionais: string;
  processado: boolean;
  dataProcessamento?: Date;
  produtoId: number;
  pessoaId: number;
  campanhaID: number;
  carteiraID: number;
  tipoCarteira: string;
  dataDaCarteira: Date;
  numeroDeOrigem: string;
  valorPropostaMinimoSolicitado?: number;
  valorPropostaMaximoSolicitado?: number;
  prazo?: number;
}

export interface LeadVenda {
  leadVendaID: number;
  dataRecebimento: Date;
  quantidadeLead: number;
}

export interface VendaHistorico {
  vendaHistoricoID: number;
  vendaID: number;
  produtoID: number;
  situacaoID: number;
  funcionarioID: number;
  carteiraID: number;
  atendimentoID: number;
  clienteID: number;
  ocorrenciaID: number;
  automatico: boolean;
  importado: boolean;
  ligacao0800: boolean;
  dataDoHistorico: Date;
  dataDoEvento: Date;
  horaDoHistorico: string;
  tipoAcionamento: string;
  contato: string;
  meioComunicacao: string;
  idSistemaExterno: string;
  historico: string;
  ligacaoID?: number;
  numeroProtocoloAtendimento?: string;
  horadeAtualizacao?: string;
  whatsapp: boolean;
  whatsAppMensagemID?: number;
  creditoNegociado?: number;
  expectativaContemplacao?: Date;
}

export interface LeadAgendaHistorico {
  leadAgendaID: number;
  vendaID: number;
  funcionarioIDCadastro: number;
  funcionarioIDResponsavel: number;
  novoMelhorHorario: string;
  dataDaAgenda: Date;
  horaDaAgenda: string;
  agendado: boolean;
  dataRegistro: Date;
}

export interface VendaHistoricoAPIItau {
  vendaHistoricoAPIItauID: number;
  leadID: number;
  vendaID: number;
  pessoaID: number;
  produtoID: number;
  situacaoID: number;
  dataEntradaNaFase: Date;
  numeroDaProposta: string;
  vendedorID: number;
  dataHoraCadastro: Date;
  consultado: boolean;
  dataHoraConsultado?: Date;
  statusPosicao: string;
  permiteDivulgacao: boolean;
  vendaHistoricoID: number;
}

export interface LeadSintetico {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  produto: string;
  fase: string;
  faseId?: number;
  situacao: string;
  situacaoId?: number;
  dataRecebimento: Date;
  valorProposta?: number;
  proximaAcao?: string;
  responsavel: string;
  dataEntradaSituacao?: Date;
  diasNaSituacao?: number;
  slaDias?: number;
}

export interface LeadAnalitico extends LeadSintetico {
  dataNascimento: Date;
  tipoBem: string;
  origemLead: string;
  campanha: string;
  cluster: string;
  melhorHorarioContato: string;
  historico: VendaHistorico[];
  agendamentos: LeadAgendaHistorico[];
  statusItau?: VendaHistoricoAPIItau;
  observacoes: string;
}

export interface SLASituacao {
  situacao: string;
  slaDias: number;
  descricao: string;
}

export interface Fase {
  id: number;
  nome: string;
  ordem: number;
  cor: string;
  icone: string;
}

export interface Situacao {
  id: number;
  nome: string;
  faseId: number;
  ordem: number;
  slaDias: number;
  descricao: string;
}
