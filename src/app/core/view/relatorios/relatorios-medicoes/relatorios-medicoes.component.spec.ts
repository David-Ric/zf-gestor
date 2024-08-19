import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosMedicoesComponent } from './relatorios-medicoes.component';

describe('RelatoriosMedicoesComponent', () => {
  let component: RelatoriosMedicoesComponent;
  let fixture: ComponentFixture<RelatoriosMedicoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatoriosMedicoesComponent]
    });
    fixture = TestBed.createComponent(RelatoriosMedicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
