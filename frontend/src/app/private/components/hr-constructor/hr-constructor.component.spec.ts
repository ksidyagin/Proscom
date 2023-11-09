import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrConstructorComponent } from './hr-constructor.component';

describe('HrConstructorComponent', () => {
  let component: HrConstructorComponent;
  let fixture: ComponentFixture<HrConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrConstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
