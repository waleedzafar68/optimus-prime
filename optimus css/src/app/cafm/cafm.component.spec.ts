import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafmComponent } from './cafm.component';

describe('CafmComponent', () => {
  let component: CafmComponent;
  let fixture: ComponentFixture<CafmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
