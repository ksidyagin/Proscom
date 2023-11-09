import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-learning-courses',
  templateUrl: './employee-learning-courses.component.html',
  styleUrls: ['./employee-learning-courses.component.scss']
})
export class EmployeeLearningCoursesComponent {
  tags: any[] = [
    {id:1, value:'stage1', viewValue: 'Этап1'},
    {id:2, value:'stage2', viewValue: 'Этап2'},
    {id:3, value:'stage3', viewValue: 'Этап3'},
  ];
}
