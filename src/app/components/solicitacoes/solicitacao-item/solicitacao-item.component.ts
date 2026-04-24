import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitacaoViewModel } from '../../../services/graphql.service';
import { Router } from '@angular/router';
import { SolicitacoesFacade } from '../../../services/solicitacoes.facade';

@Component({
  selector: 'app-solicitacao-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitacao-item.component.html',
  styleUrls: ['./solicitacao-item.component.scss'],
})
export class SolicitacaoItemComponent {
  private router = inject(Router);
  private facade = inject(SolicitacoesFacade);

  @Input({ required: true }) solicitacao!: SolicitacaoViewModel;

  irParaDetalhe() {
    this.router.navigate(['/solicitacoes', this.solicitacao.id]);
  }

  editar() {
    this.router.navigate(['solicitacoes/editar', this.solicitacao.id])
  }

  deletar(){
    this.facade.deletar(this.solicitacao.id)
  }
}
