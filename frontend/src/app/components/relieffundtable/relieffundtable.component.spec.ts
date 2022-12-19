import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelieffundtableComponent } from './relieffundtable.component';

describe('RelieffundtableComponent', () => {
  let component: RelieffundtableComponent;
  let fixture: ComponentFixture<RelieffundtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelieffundtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelieffundtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
