import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosReceberStatusComponent } from './relatorios-receber-status.component';

describe('RelatoriosReceberStatusComponent', () => {
  let component: RelatoriosReceberStatusComponent;
  let fixture: ComponentFixture<RelatoriosReceberStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatoriosReceberStatusComponent]
    });
    fixture = TestBed.createComponent(RelatoriosReceberStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
