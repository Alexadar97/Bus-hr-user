import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusassesmentComponent } from './busassesment.component';

describe('BusassesmentComponent', () => {
  let component: BusassesmentComponent;
  let fixture: ComponentFixture<BusassesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusassesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusassesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
