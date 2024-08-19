import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosContasCorrentesComponent } from './relatorios-contas-correntes.component';

describe('RelatoriosContasCorrentesComponent', () => {
  let component: RelatoriosContasCorrentesComponent;
  let fixture: ComponentFixture<RelatoriosContasCorrentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatoriosContasCorrentesComponent]
    });
    fixture = TestBed.createComponent(RelatoriosContasCorrentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
