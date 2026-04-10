import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoItemComponent } from './solicitacao-item.component';

describe('SolicitacaoItemComponent', () => {
  let component: SolicitacaoItemComponent;
  let fixture: ComponentFixture<SolicitacaoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacaoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
