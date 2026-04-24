import { SolicitacaoViewModel } from './../../../services/graphql.service';
import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-resumo-solicitacoes',
  imports: [],
  templateUrl: './resumo-solicitacoes.component.html',
  styleUrl: './resumo-solicitacoes.component.scss',
})
export class ResumoSolicitacoesComponent {
  //Transforma em Signal Input
  lista = input<SolicitacaoViewModel[]>([]);

  resumo = computed(() => {
    const dados = this.lista();

    return {
      total: dados.length,
      aprovadas: dados.filter((i) => i.status === 'aprovado').length,
      pendentes: dados.filter((i) => i.status === 'pendente').length,
      recusadas: dados.filter((i) => i.status === 'recusado').length,
    };
  });
}
