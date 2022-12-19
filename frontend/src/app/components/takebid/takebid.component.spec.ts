import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakebidComponent } from './takebid.component';

describe('TakebidComponent', () => {
  let component: TakebidComponent;
  let fixture: ComponentFixture<TakebidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakebidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakebidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
