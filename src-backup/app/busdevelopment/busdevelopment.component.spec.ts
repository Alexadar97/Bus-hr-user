import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusdevelopmentComponent } from './busdevelopment.component';

describe('BusdevelopmentComponent', () => {
  let component: BusdevelopmentComponent;
  let fixture: ComponentFixture<BusdevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusdevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
