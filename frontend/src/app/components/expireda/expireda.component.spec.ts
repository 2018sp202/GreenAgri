import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredaComponent } from './expireda.component';

describe('ExpiredaComponent', () => {
  let component: ExpiredaComponent;
  let fixture: ComponentFixture<ExpiredaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
