import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { google } from '@google/maps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'user-management';

  constructor(private router: Router, private route: LocationStrategy) { }
  ngOnInit() {
    if (!this.route.path().includes("list")) {
      this.router.navigate(["user"]);
    }
  }
}
