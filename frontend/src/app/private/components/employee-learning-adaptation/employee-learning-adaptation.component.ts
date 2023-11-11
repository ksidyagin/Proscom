import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProgramI } from 'src/app/model/program.interface';
import { StageI } from 'src/app/model/stage.interface';
import { TestI } from 'src/app/model/test.interface';
import { UserTestI } from 'src/app/model/user-test.interface';
import { ProgramService } from 'src/app/public/services/program.service';
import { StageService } from 'src/app/public/services/stage.service';
import { TestingService } from 'src/app/public/services/testing.service';
import { UserTestService } from 'src/app/public/services/user-test.service';
import { TestService } from 'src/app/services/test-service/test.service';

@Component({
  selector: 'app-employee-learning-adaptation',
  templateUrl: './employee-learning-adaptation.component.html',
  styleUrls: ['./employee-learning-adaptation.component.scss']
})
export class EmployeeLearningAdaptationComponent {
  constructor(private http: HttpClient, private progService: ProgramService, private stageService: StageService,
    private userTestService: TestingService, private jwtService: JwtHelperService, private statusService: UserTestService) { }
  showTest: boolean = false;
  program:ProgramI;
  stages: StageI[] = [];
  activeTest:any;
  user:any;
  ngOnInit(){
    this.user = this.jwtService.decodeToken();
    this.progService.find().subscribe((object: ProgramI[]) => {
      this.program=object.find(x => x.id === 1);
      for(let i = 0; i < this.program.stages.length; i++){
        this.stageService.findOne(this.program.stages[i].id).subscribe((object: StageI) => {
          for(let i = 0; i < object.modules.length; i++){
            this.userTestService.findOne(object.modules[i].id).subscribe((test: TestI) => {
               
               object.modules[i]["test"] = test;
              this.statusService.findOne(this.user.user.id).subscribe((res: UserTestI[]) => {
                let status = res.find(x => x.testId === test.id);
                object.modules[i]["status"] = status;
              });
            });
          }

          this.stages.push(object);
        });
        
      }
    });
    console.log(this.stages);;
    
  }

  showModal(obj:any){
    this.activeTest = obj.test;
    var json = JSON.parse(this.activeTest.dict);
    this.activeTest["variants"]= json;
    this.showTest = !this.showTest;
    console.log(this.activeTest)
  }
  close(){
    this.showTest = false;
  }
}
