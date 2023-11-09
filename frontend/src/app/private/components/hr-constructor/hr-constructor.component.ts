import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-constructor',
  templateUrl: './hr-constructor.component.html',
  styleUrls: ['./hr-constructor.component.scss']
})
export class HrConstructorComponent {
  stages: any[] = [
    {id:1, viewValue: 'Этап1'},
    {id:2, viewValue: 'Этап2'},
    {id:3, viewValue: 'Этап3'},
  ];
}
