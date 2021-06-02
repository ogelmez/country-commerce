import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs-compat';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-continents-list',
  templateUrl: './continents-list.component.html',
  styleUrls: ['./continents-list.component.scss']
})
export class ContinentsListComponent implements OnInit, OnDestroy {
  continents: any = [];
  subscriptionContinents: Subscription | any;
  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }


  ngOnInit() {
    this.getContinentList();
  }

  ngOnDestroy(): void {
    this.subscriptionContinents.unsubscribe();
  }

  onChange(e: any) {
    this.router.navigate(['/continents', e.options[0].value.regionName], {
      relativeTo: this.route, queryParams: {
        regionCode: e.options[0].value.regioncode
      }
    });
  }

  getContinentList() {
    this.subscriptionContinents = this.dataService
      .get(`${environment.url}/continents`)
      .subscribe((data: any) => {
        this.continents = data;
      });
  }
}
