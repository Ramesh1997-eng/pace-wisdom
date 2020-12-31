import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';


const routes: Routes = [
  {
    path: "",
    component: ListEmployeesComponent,
  },
  {
    path: "add-employee",
    component: AddEmployeeComponent,
  },
  {
    path: "list-employees",
    component: ListEmployeesComponent,
  },
  {
    path: "view-employee/:id",
    component: ViewEmployeeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
