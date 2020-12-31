import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetails } from '../shared/models/employee-details';
import { EmployeeService } from '../shared/service/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employeesList: EmployeeDetails[] = [];
  tempList: EmployeeDetails[] = [];
  searchParam = "";
  constructor(private service: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllEmployees();
  }
  //getAllEmployees
  getAllEmployees() {
    this.service.getAllEmployees().subscribe((res) => {
      this.employeesList = this.tempList = res;
    })
  }
  //Go To View Employee Details
  viewEmployeeDetails(emp) {
    this.router.navigate(["../user/view-employee", emp.id], { relativeTo: this.route.parent });
  }
  //Go To Add Employee
  goToCreatePage() {
    this.router.navigate(["../user/add-employee"], { relativeTo: this.route.parent });
  }
  //Global Search Function
  search() {
    if (this.searchParam) {
      this.employeesList = this.tempList.filter(
        (element) =>
          (element.firstName &&
            element.firstName
              .toLowerCase()
              .includes(this.searchParam.toLowerCase())) ||
          (element.email &&
            element.email
              .toLowerCase()
              .includes(this.searchParam.toLowerCase())) ||
          (element.lastName &&
            element.lastName
              .toLowerCase()
              .includes(this.searchParam.toLowerCase())) ||
          (element.mobileNumber &&
            element.mobileNumber
              .toLowerCase()
              .includes(this.searchParam.toLowerCase())) ||
          (element.department &&
            element.department
              .toLowerCase()
              .includes(this.searchParam.toLowerCase()))
      );
    }
    else {
      this.employeesList = this.tempList;
    }
  }
}
