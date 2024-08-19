import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosContratosComponent } from './relatorios-contratos.component';

describe('RelatoriosContratosComponent', () => {
  let component: RelatoriosContratosComponent;
  let fixture: ComponentFixture<RelatoriosContratosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatoriosContratosComponent]
    });
    fixture = TestBed.createComponent(RelatoriosContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
