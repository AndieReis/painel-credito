import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoSolicitacoesComponent } from './resumo-solicitacoes.component';

describe('ResumoSolicitacoesComponent', () => {
  let component: ResumoSolicitacoesComponent;
  let fixture: ComponentFixture<ResumoSolicitacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumoSolicitacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumoSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
