import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelieffundviewComponent } from './relieffundview.component';

describe('RelieffundviewComponent', () => {
  let component: RelieffundviewComponent;
  let fixture: ComponentFixture<RelieffundviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelieffundviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelieffundviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
