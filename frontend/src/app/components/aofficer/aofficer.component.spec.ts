import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AofficerComponent } from './aofficer.component';

describe('AofficerComponent', () => {
  let component: AofficerComponent;
  let fixture: ComponentFixture<AofficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AofficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
