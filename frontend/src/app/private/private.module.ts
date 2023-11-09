import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import { SelectUsersComponent } from './components/select-users/select-users.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PrivateComponent } from './private.component';
import { HrProfileComponent } from './components/hr-profile/hr-profile.component';
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
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateRoomComponent,
    SelectUsersComponent,
    ChatRoomComponent,
    ChatMessageComponent,
    ProfileComponent,
    PrivateComponent,
    HrProfileComponent,
    DirectorProfileComponent,
    EmployeeLearningCoursesComponent,
    EmployeeTasksComponent,
    EmployeeStructureComponent,
    HrWorkersComponent,
    HrDepartmentsComponent,
    HrAnalyticsComponent,
    HrLearningCoursesComponent,
    HrConstructorComponent,
    EmployeeLearningAdaptationComponent,
    HrConstructorRelatedPositionsComponent,
    EmployeeCorporateCultureComponent,
    EmployeeMeetingsComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatListModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSelectModule,
    FormsModule
  ]
})
export class PrivateModule { }
