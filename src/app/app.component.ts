import { Component } from '@angular/core';
import { SolicitacaoListaComponent } from './components/solicitacoes/solicitacao-lista/solicitacao-lista.component';

@Component({
  selector: 'app-root',
  imports: [SolicitacaoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Painel de Solicitações de Crédito';
}
