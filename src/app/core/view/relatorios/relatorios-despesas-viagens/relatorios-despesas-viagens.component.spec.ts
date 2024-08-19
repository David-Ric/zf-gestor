import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosDespesasViagensComponent } from './relatorios-despesas-viagens.component';

describe('RelatoriosDespesasViagensComponent', () => {
  let component: RelatoriosDespesasViagensComponent;
  let fixture: ComponentFixture<RelatoriosDespesasViagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatoriosDespesasViagensComponent]
    });
    fixture = TestBed.createComponent(RelatoriosDespesasViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
