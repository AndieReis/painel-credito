import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SolicitacoesService } from '../../../services/graphql.service';
import { CommonModule } from '@angular/common';
import { SolicitacoesFacade } from '../../../services/solicitacoes.facade';

@Component({
  selector: 'app-solicitacao-detalhe',
  imports: [CommonModule, RouterLink],
  templateUrl: './solicitacao-detalhe.component.html',
  styleUrl: './solicitacao-detalhe.component.scss'
})
export class SolicitacaoDetalheComponent {
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  public service = inject(SolicitacoesService)
  public facade = inject(SolicitacoesFacade)
  id!: number;


  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  get item() {
    return this.facade.getById(this.id)

  }

  aprovar() {
    this.facade.atualizarStatus(this.id, 'aprovado');

    setTimeout(() => {
      this.router.navigate(['/solicitacoes']);
    }, 300);
  }

  reprovar() {
    this.facade.atualizarStatus(this.id, 'recusado');

    setTimeout(() => {
      this.router.navigate(['/solicitacoes']);
    }, 300);
  }
}

