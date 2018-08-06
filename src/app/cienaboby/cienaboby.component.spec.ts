import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CienabobyComponent } from './cienaboby.component';

describe('CienabobyComponent', () => {
  let component: CienabobyComponent;
  let fixture: ComponentFixture<CienabobyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CienabobyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CienabobyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
