import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLearningCoursesComponent } from './hr-learning-courses.component';

describe('HrLearningCoursesComponent', () => {
  let component: HrLearningCoursesComponent;
  let fixture: ComponentFixture<HrLearningCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrLearningCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrLearningCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
