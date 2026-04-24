import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Router } from '@angular/router';

import { SolicitacaoViewModel } from '../../../services/graphql.service';
import { SolicitacaoItemComponent } from '../solicitacao-item/solicitacao-item.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { ResumoSolicitacoesComponent } from '../resumo-solicitacoes/resumo-solicitacoes.component';
import { BuscaSolicitacoesComponent } from '../busca-solicitacoes/busca-solicitacoes.component';
import { FiltroSolicitacoesComponent } from '../filtro-solicitacoes/filtro-solicitacoes.component';
import { SolicitacoesFacade } from '../../../services/solicitacoes.facade';

@Component({
  selector: 'app-solicitacao-lista',
  standalone: true,
  imports: [
    CommonModule,
    SolicitacaoItemComponent,
    HeaderComponent,
    ScrollingModule,
    ResumoSolicitacoesComponent,
    BuscaSolicitacoesComponent,
    FiltroSolicitacoesComponent,
  ],
  templateUrl: './solicitacao-lista.component.html',
  styleUrls: ['./solicitacao-lista.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SolicitacaoListaComponent implements OnInit {
  constructor(
    public facade: SolicitacoesFacade,
    private router: Router,
  ) {}

  ngOnInit() {
    this.facade.carregar();
  }

  irParaNova() {
    this.router.navigate(['/solicitacoes/nova']);
  }

  trackById(index: number, item: SolicitacaoViewModel) {
    return item.id;
  }
}
