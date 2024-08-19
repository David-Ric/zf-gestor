import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesasComViagensComponent } from './despesas-com-viagens.component';

describe('DespesasComViagensComponent', () => {
  let component: DespesasComViagensComponent;
  let fixture: ComponentFixture<DespesasComViagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DespesasComViagensComponent]
    });
    fixture = TestBed.createComponent(DespesasComViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
