import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeDetails } from '../models/employee-details';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiBaseURL: string;
  mapsAPI;
  constructor(private http: HttpClient) {
    this.apiBaseURL = `https://5fe1f06f7a94870017681cd9.mockapi.io/api/v1/employee`;
    this.mapsAPI = `https://maps.googleapis.com/maps/api/geocode/json`;
  }

  getAddress(lat, long,) {
    let apiKey = "AIzaSyCJT0OdVsA6yLkpJsCcF42dGWWXEM0STws";
    return this.http.get(this.mapsAPI + `?latlng=${lat},${long}&key=${apiKey}`);
  }
  getAllEmployees() {
    const url = this.apiBaseURL;
    return this.http.get<any>(url);
  }
  addEmployee(body) {
    const url = this.apiBaseURL;
    return this.http.post<EmployeeDetails>(url, body);
  }
  viewEmployee(Id) {
    const url = this.apiBaseURL + `/${Id}`;
    return this.http.get<EmployeeDetails>(url);
  }
}
