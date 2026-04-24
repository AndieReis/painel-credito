import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import {
  SolicitacaoViewModel,
  SolicitacoesService,
} from '../../../services/graphql.service';
import { SolicitacaoItemComponent } from '../solicitacao-item/solicitacao-item.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { ResumoSolicitacoesComponent } from '../resumo-solicitacoes/resumo-solicitacoes.component';
import { BuscaSolicitacoesComponent } from '../busca-solicitacoes/busca-solicitacoes.component';
import { FiltroSolicitacoesComponent } from '../filtro-solicitacoes/filtro-solicitacoes.component';

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
  constructor(public service: SolicitacoesService) {}

  filtroSelecionado = signal<string>('');
  termoBusca = signal<string>('');

  ngOnInit() {
    if (this.service.solicitacoes().length === 0) {
      this.service.carregarSolicitacoes();
    }
  }

  aplicarFiltro(status: string) {
    this.filtroSelecionado.set(status);
  }

  aplicarBusca(termo: string) {
    this.termoBusca.set(termo.toLocaleLowerCase());
  }

  listaFiltrada = computed(() => {
    let lista = this.service.solicitacoes();

    const filtro = this.filtroSelecionado();
    const busca = this.termoBusca();

    if (filtro) {
      lista = lista.filter((item) => item.status === filtro);
    }

    if (busca) {
      lista = lista.filter((item) =>
        item.cliente.toLowerCase().includes(busca)
      );
    }

    return lista;
  });

  trackById(index: number, item: SolicitacaoViewModel) {
    return item.id;
  }
}
