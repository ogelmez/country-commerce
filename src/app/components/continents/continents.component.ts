import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs-compat';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/services/data.service';


@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.scss']
})
export class ContinentsComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  regionCode: string | any;
  faAngleLeft = faAngleLeft;
  displayedColumns: string[] = ['imageUrl', 'country', 'export', 'import', 'note'];
  dataSource: MatTableDataSource<any> | any;
  subscriptionContinents: Subscription | any
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.regionCode = params['regionCode'];
    });
  }

  ngOnInit() {
    this.getContinentsByRegionCode();
  }

  ngOnDestroy(): void {
    this.subscriptionContinents.unsubscribe()
  }

  getContinentsByRegionCode() {
    this.subscriptionContinents = this.dataService.get(`${environment.url}/countries`).subscribe(data => {
      const matData = data.filter(x => x.properties.regioncode === this.regionCode);
      this.dataSource = new MatTableDataSource(matData);
      this.dataSource.paginator = this.paginator;
    })

  }


}
