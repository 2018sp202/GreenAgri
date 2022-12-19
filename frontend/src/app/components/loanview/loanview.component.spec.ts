import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanviewComponent } from './loanview.component';

describe('LoanviewComponent', () => {
  let component: LoanviewComponent;
  let fixture: ComponentFixture<LoanviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
