import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { EmployeeDetails } from '../shared/models/employee-details';
import { EmployeeService } from '../shared/service/employee.service';
import { ImageSnippet } from '../shared/models/employee-details'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('userAddForm', { static: false }) userAddForm: NgForm;
  public user: EmployeeDetails;
  selectedFile: ImageSnippet;
  url;
  isUploaded = false;
  constructor(private readonly geolocation$: GeolocationService, private service: EmployeeService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.user = new EmployeeDetails();
    this.geolocation$.subscribe((position) => {
      this.user.latitude = position.coords.latitude;
      this.user.longitude = position.coords.longitude;
      this.getAddress(this.user.latitude, this.user.longitude);
    });

  }
  //Add Employee
  addEmployee(event: NgForm) {
    if (event.form.status == "VALID" && this.isUploaded) {
      this.service.addEmployee(this.user).subscribe((el) => {
        alert("Added Successfully");
        if (el) {
          this.router.navigate(["../user/list-employees"], { relativeTo: this.route.parent });
        }
      })
    } else if (!this.isUploaded) {
      alert("Please Upload Profile Picture");
    }
  }
  //Get Address Based on Latitude and Longitude
  getAddress(lat: Number, long: Number) {
    this.service.getAddress(lat, long).subscribe((res) => {
      console.log(res);
    });
  }
  //Process File
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.user.imageUrl = event.target.result;
      this.url = event.target.result;
      if (this.url) {
        this.isUploaded = true;
      }
      console.log(event.result);
    });

    reader.readAsDataURL(file);
  }
}
