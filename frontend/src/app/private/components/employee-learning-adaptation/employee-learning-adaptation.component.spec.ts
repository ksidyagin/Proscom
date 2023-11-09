import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLearningAdaptationComponent } from './employee-learning-adaptation.component';

describe('EmployeeLearningAdaptationComponent', () => {
  let component: EmployeeLearningAdaptationComponent;
  let fixture: ComponentFixture<EmployeeLearningAdaptationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLearningAdaptationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLearningAdaptationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
