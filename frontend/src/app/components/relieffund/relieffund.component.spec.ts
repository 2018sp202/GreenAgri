import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelieffundComponent } from './relieffund.component';

describe('RelieffundComponent', () => {
  let component: RelieffundComponent;
  let fixture: ComponentFixture<RelieffundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelieffundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelieffundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
