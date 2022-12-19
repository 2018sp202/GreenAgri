import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewauctionfComponent } from './viewauctionf.component';

describe('ViewauctionfComponent', () => {
  let component: ViewauctionfComponent;
  let fixture: ComponentFixture<ViewauctionfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewauctionfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewauctionfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
