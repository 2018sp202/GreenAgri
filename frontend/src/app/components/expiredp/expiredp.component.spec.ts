import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredpComponent } from './expiredp.component';

describe('ExpiredpComponent', () => {
  let component: ExpiredpComponent;
  let fixture: ComponentFixture<ExpiredpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
