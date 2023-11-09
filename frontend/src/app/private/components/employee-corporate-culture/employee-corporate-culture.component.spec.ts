import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCorporateCultureComponent } from './employee-corporate-culture.component';

describe('EmployeeCorporateCultureComponent', () => {
  let component: EmployeeCorporateCultureComponent;
  let fixture: ComponentFixture<EmployeeCorporateCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCorporateCultureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCorporateCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
