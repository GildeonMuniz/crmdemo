import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LeadService } from '../../services/lead.service';
import { LeadSintetico, Fase } from '../../models/lead.model';
import { FeatureService } from '../../services/feature.service';

@Component({
  selector: 'app-leads-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss']
})
export class LeadsListComponent implements OnInit {
  leads: LeadSintetico[] = [];
  leadsFiltered: LeadSintetico[] = [];
  loading = true;

  // Filtros
  filtroSituacao = '';
  filtroProduto = '';
  filtroResponsavel = '';
  filtroBusca = '';

  situacoes: string[] = [];
  produtos: string[] = [];
  responsaveis: string[] = [];
  fases: Fase[] = [];

  constructor(
    private leadService: LeadService,
    public featureService: FeatureService
  ) {
    // Inscreve para mudanças de configuração
    this.featureService.getFeatures$().subscribe(() => {
      // Força atualização da view quando configurações mudam
    });
  }

  ngOnInit(): void {
    this.fases = this.leadService.getFases();
    this.loadLeads();
  }

  loadLeads(): void {
    this.loading = true;
    this.leadService.getLeadsSinteticos().subscribe({
      next: (leads) => {
        this.leads = leads;
        this.leadsFiltered = leads;
        this.extractFilters();
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar leads:', error);
        this.loading = false;
      }
    });
  }

  extractFilters(): void {
    this.situacoes = [...new Set(this.leads.map(l => l.situacao))];
    this.produtos = [...new Set(this.leads.map(l => l.produto))];
    this.responsaveis = [...new Set(this.leads.map(l => l.responsavel))];
  }

  applyFilters(): void {
    this.leadsFiltered = this.leads.filter(lead => {
      const matchSituacao = !this.filtroSituacao || lead.situacao === this.filtroSituacao;
      const matchProduto = !this.filtroProduto || lead.produto === this.filtroProduto;
      const matchResponsavel = !this.filtroResponsavel || lead.responsavel === this.filtroResponsavel;
      const matchBusca = !this.filtroBusca ||
        lead.nome.toLowerCase().includes(this.filtroBusca.toLowerCase()) ||
        lead.cpf.includes(this.filtroBusca) ||
        lead.email.toLowerCase().includes(this.filtroBusca.toLowerCase()) ||
        lead.telefone.includes(this.filtroBusca);

      return matchSituacao && matchProduto && matchResponsavel && matchBusca;
    });
  }

  clearFilters(): void {
    this.filtroSituacao = '';
    this.filtroProduto = '';
    this.filtroResponsavel = '';
    this.filtroBusca = '';
    this.leadsFiltered = this.leads;
  }

  getSituacaoBadgeClass(situacao: string): string {
    const classes: { [key: string]: string } = {
      'Novo Lead': 'badge-info',
      'Em Negociação': 'badge-warning',
      'Aguardando Documentação': 'badge-info',
      'Em Análise': 'badge-warning',
      'Convertido': 'badge-success',
      'Perdido': 'badge-danger'
    };
    return classes[situacao] || 'badge-info';
  }

  formatCurrency(value: number | undefined): string {
    if (!value) return '-';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('pt-BR');
  }

  getSLAPercentage(lead: LeadSintetico): number {
    if (!lead.slaDias || lead.slaDias === 0) return 0;
    const percentage = ((lead.diasNaSituacao || 0) / lead.slaDias) * 100;
    return Math.min(percentage, 100);
  }

  getSLAStatus(lead: LeadSintetico): string {
    if (!lead.slaDias || lead.slaDias === 0) return '';
    const percentage = this.getSLAPercentage(lead);

    if (percentage >= 100) return 'sla-critical';
    if (percentage >= 80) return 'sla-warning';
    return 'sla-ok';
  }

  getSLAStatusText(lead: LeadSintetico): string {
    if (!lead.slaDias || lead.slaDias === 0) return '';
    const percentage = this.getSLAPercentage(lead);

    if (percentage >= 100) return 'SLA VENCIDO';
    if (percentage >= 80) return 'Atenção';
    return 'No prazo';
  }

  getSLATooltip(lead: LeadSintetico): string {
    const dataEntrada = lead.dataEntradaSituacao || lead.dataRecebimento;
    const dataEntradaStr = new Date(dataEntrada).toLocaleDateString('pt-BR');
    const diasRestantes = (lead.slaDias || 0) - (lead.diasNaSituacao || 0);

    if (diasRestantes < 0) {
      return `Entrou na situação em ${dataEntradaStr}. SLA vencido há ${Math.abs(diasRestantes)} dia(s)!`;
    }

    return `Entrou na situação em ${dataEntradaStr}. Faltam ${diasRestantes} dia(s) para vencer o SLA.`;
  }

  getFaseCor(faseId?: number): string {
    const fase = this.fases.find(f => f.id === faseId);
    return fase ? fase.cor : '#6c757d';
  }

  getFaseIcone(faseId?: number): string {
    const fase = this.fases.find(f => f.id === faseId);
    return fase ? fase.icone : '📋';
  }
}
