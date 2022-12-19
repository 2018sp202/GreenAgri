import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintableComponent } from './complaintable.component';

describe('ComplaintableComponent', () => {
  let component: ComplaintableComponent;
  let fixture: ComponentFixture<ComplaintableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
