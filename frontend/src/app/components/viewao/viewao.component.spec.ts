import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaoComponent } from './viewao.component';

describe('ViewaoComponent', () => {
  let component: ViewaoComponent;
  let fixture: ComponentFixture<ViewaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
