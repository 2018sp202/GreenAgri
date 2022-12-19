import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Takebid2Component } from './takebid2.component';

describe('Takebid2Component', () => {
  let component: Takebid2Component;
  let fixture: ComponentFixture<Takebid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Takebid2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Takebid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
