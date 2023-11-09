import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrDepartmentsComponent } from './hr-departments.component';

describe('HrDepartmentsComponent', () => {
  let component: HrDepartmentsComponent;
  let fixture: ComponentFixture<HrDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
