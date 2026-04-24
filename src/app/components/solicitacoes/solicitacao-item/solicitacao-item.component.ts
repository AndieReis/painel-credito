import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitacaoViewModel } from '../../../services/graphql.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-solicitacao-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitacao-item.component.html',
  styleUrls: ['./solicitacao-item.component.scss'],

})
export class SolicitacaoItemComponent {
  private router = inject(Router)

  @Input({ required: true }) solicitacao!: SolicitacaoViewModel;

  irParaDetalhe() {
    this.router.navigate(['/solicitacoes', this.solicitacao.id])
  }

}
