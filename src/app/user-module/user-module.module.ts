import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserModuleComponent } from './user-module.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { POSITION_OPTIONS } from '@ng-web-apis/geolocation';
import { AgmCoreModule } from '@agm/core';
import { google } from '@google/maps';

@NgModule({
  declarations: [UserModuleComponent, AddEmployeeComponent, ListEmployeesComponent, ViewEmployeeComponent],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJT0OdVsA6yLkpJsCcF42dGWWXEM0STws'
    })
  ],
  providers: [{
    provide: POSITION_OPTIONS,
    useValue: { enableHighAccuracy: true, timeout: 5000, maximumAge: 60000 },
  },]
})
export class UserModuleModule { }
