import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroSolicitacoesComponent } from './filtro-solicitacoes.component';

describe('FiltroSolicitacoesComponent', () => {
  let component: FiltroSolicitacoesComponent;
  let fixture: ComponentFixture<FiltroSolicitacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroSolicitacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
