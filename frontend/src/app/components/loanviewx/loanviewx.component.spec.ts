import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanviewxComponent } from './loanviewx.component';

describe('LoanviewxComponent', () => {
  let component: LoanviewxComponent;
  let fixture: ComponentFixture<LoanviewxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanviewxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanviewxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
