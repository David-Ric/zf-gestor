import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasCorrentesComponent } from './contas-correntes.component';

describe('ContasCorrentesComponent', () => {
  let component: ContasCorrentesComponent;
  let fixture: ComponentFixture<ContasCorrentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContasCorrentesComponent]
    });
    fixture = TestBed.createComponent(ContasCorrentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
