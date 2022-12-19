import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AofficersignupComponent } from './aofficersignup.component';

describe('AofficersignupComponent', () => {
  let component: AofficersignupComponent;
  let fixture: ComponentFixture<AofficersignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AofficersignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AofficersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
