import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrivateComponent } from './private.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from '../guards/auth.guard';
import { HrProfileComponent } from './components/hr-profile/hr-profile.component';
import { RoleGuard } from '../guards/role.guard';
import { DirectorProfileComponent } from './components/director-profile/director-profile.component';
import { EmployeeLearningCoursesComponent } from './components/employee-learning-courses/employee-learning-courses.component';
import { EmployeeTasksComponent } from './components/employee-tasks/employee-tasks.component';
import { EmployeeStructureComponent } from './components/employee-structure/employee-structure.component';
import { HrWorkersComponent } from './components/hr-workers/hr-workers.component';
import { HrDepartmentsComponent } from './components/hr-departments/hr-departments.component';
import { HrAnalyticsComponent } from './components/hr-analytics/hr-analytics.component';
import { HrLearningCoursesComponent } from './components/hr-learning-courses/hr-learning-courses.component';
import { HrConstructorComponent } from './components/hr-constructor/hr-constructor.component';
import { EmployeeLearningAdaptationComponent } from './components/employee-learning-adaptation/employee-learning-adaptation.component';
import { HrConstructorRelatedPositionsComponent } from './components/hr-constructor-related-positions/hr-constructor-related-positions.component';
import { EmployeeCorporateCultureComponent } from './components/employee-corporate-culture/employee-corporate-culture.component';
import { EmployeeMeetingsComponent } from './components/employee-meetings/employee-meetings.component';

const routes: Routes = [
  
  {
    path: '',
    component: PrivateComponent,
    children:[
      {
        path: 'chat',
        component: DashboardComponent

      },
      {
        path: 'create-room',
        component: CreateRoomComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'employee-learning-courses',
        component: EmployeeLearningCoursesComponent,
        canActivate:[RoleGuard]
      },
      {
        path: 'employee-tasks',
        component: EmployeeTasksComponent,
        canActivate:[RoleGuard]
      },
      {
        path: 'employee-structure',
        component: EmployeeStructureComponent,
        canActivate:[RoleGuard]
      },
      {
        path: 'employee-learning-adaptation',
        component: EmployeeLearningAdaptationComponent,
        canActivate:[RoleGuard]
      },
      {
        path: 'employee-corporate-culture',
        component: EmployeeCorporateCultureComponent,
        canActivate:[RoleGuard]
      },
      {
        path: 'employee-meetings',
        component: EmployeeMeetingsComponent,
        canActivate:[RoleGuard]
      },
      {
        path: 'hr-workers',
        component: HrWorkersComponent,
        canActivate:[RoleGuard]
      },
      {
        path: 'hr-departments',
        component: HrDepartmentsComponent,
        canActivate:[RoleGuard]
      },
      {
        path: 'hr-analytics',
        component: HrAnalyticsComponent,
        canActivate:[RoleGuard]
      },
      {
        path: 'hr-constructor',
        component: HrConstructorComponent,
        canActivate:[RoleGuard]
      },
      {
        path: 'hr-constructor-related-positions',
        component: HrConstructorRelatedPositionsComponent,
        canActivate:[RoleGuard]
      },
      {
        path: '**',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
