import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosContasPagarReceberComponent } from './relatorios-contas-pagar-receber.component';

describe('RelatoriosContasPagarReceberComponent', () => {
  let component: RelatoriosContasPagarReceberComponent;
  let fixture: ComponentFixture<RelatoriosContasPagarReceberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatoriosContasPagarReceberComponent]
    });
    fixture = TestBed.createComponent(RelatoriosContasPagarReceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
