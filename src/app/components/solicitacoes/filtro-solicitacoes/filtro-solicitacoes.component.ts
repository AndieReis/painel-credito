import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-solicitacoes',
  imports: [],
  templateUrl: './filtro-solicitacoes.component.html',
  styleUrl: './filtro-solicitacoes.component.scss',
})
export class FiltroSolicitacoesComponent {
  @Output() filtroChange = new EventEmitter<string>();

  selecionar(status: string) {
    this.filtroChange.emit(status);
  }
}
