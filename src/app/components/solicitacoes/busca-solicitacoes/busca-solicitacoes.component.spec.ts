import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaSolicitacoesComponent } from './busca-solicitacoes.component';

describe('BuscaSolicitacoesComponent', () => {
  let component: BuscaSolicitacoesComponent;
  let fixture: ComponentFixture<BuscaSolicitacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaSolicitacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
