import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LeadService } from '../../services/lead.service';
import { LeadAnalitico } from '../../models/lead.model';

@Component({
  selector: 'app-lead-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.scss']
})
export class LeadDetailComponent implements OnInit {
  lead: LeadAnalitico | null = null;
  loading = true;
  leadId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private leadService: LeadService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.leadId = +params['id'];
      this.loadLead();
    });
  }

  loadLead(): void {
    this.loading = true;
    this.leadService.getLeadById(this.leadId).subscribe({
      next: (lead) => {
        this.lead = lead;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar lead:', error);
        this.loading = false;
      }
    });
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

  formatDate(date: Date | undefined): string {
    if (!date) return '-';
    return new Date(date).toLocaleDateString('pt-BR');
  }

  formatDateTime(date: Date, hora: string): string {
    return `${this.formatDate(date)} às ${hora}`;
  }

  getMeioComunicacaoIcon(meio: string): string {
    const icons: { [key: string]: string } = {
      'Telefone': '📞',
      'Ligação': '📞',
      'Email': '✉️',
      'WhatsApp': '💬',
      'SMS': '💬'
    };
    return icons[meio] || '📝';
  }
}
