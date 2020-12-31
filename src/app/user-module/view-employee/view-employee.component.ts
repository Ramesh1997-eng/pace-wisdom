import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetails } from '../shared/models/employee-details';
import { EmployeeService } from '../shared/service/employee.service';
import { google } from '@google/maps';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  empId: Number;
  employeeData: EmployeeDetails;
  constructor(private service: EmployeeService, private router: Router, private route: ActivatedRoute) {
    this.empId = this.route.snapshot.params.id;
  }
  ngOnInit() {
    this.getEmployeeByEmpId(this.empId);
  }
  //get Employee Details
  getEmployeeByEmpId(empId) {
    this.service.viewEmployee(empId).subscribe((data) => {
      this.employeeData = data;
    })
  }
  //Back To List
  backToList() {
    this.router.navigate(["../user/list-employees"], { relativeTo: this.route.parent });
  }
}
