import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLearningCoursesComponent } from './employee-learning-courses.component';

describe('EmployeeLearningCoursesComponent', () => {
  let component: EmployeeLearningCoursesComponent;
  let fixture: ComponentFixture<EmployeeLearningCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLearningCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLearningCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
