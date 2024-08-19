import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoesComponent } from './medicoes.component';

describe('MedicoesComponent', () => {
  let component: MedicoesComponent;
  let fixture: ComponentFixture<MedicoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoesComponent]
    });
    fixture = TestBed.createComponent(MedicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
