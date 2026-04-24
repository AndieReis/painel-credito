import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busca-solicitacoes',
  imports: [],
  templateUrl: './busca-solicitacoes.component.html',
  styleUrl: './busca-solicitacoes.component.scss',
})
export class BuscaSolicitacoesComponent {
  @Output() buscaChange = new EventEmitter<string>();

  onChange(event: any) {
    this.buscaChange.emit(event.target.value);
  }
}
