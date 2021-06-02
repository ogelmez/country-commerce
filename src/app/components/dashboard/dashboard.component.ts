import {Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  country: any;
  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy() {

  }

}
