import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faPercentage } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs-compat';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/services/data.service';
import { SharedService } from 'src/services/shared.service';
@Component({
  selector: 'app-card-widget',
  templateUrl: './card-widget.component.html',
  styleUrls: ['./card-widget.component.scss']
})
export class CardWidgetComponent implements OnInit,OnDestroy {
  faPercentage = faPercentage;
  totalExport: any;
  totalImport: any;
  percentImport: any;
  percentExport: any;
  @Input() totalType: string | any;
  subscriptionCardData: Subscription | any;
  constructor(private dataService: DataService, private sharedService: SharedService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getTotalCounts();
  }

  ngOnDestroy(): void {
    this.subscriptionCardData.unsubscribe()

  }

  getTotalCounts() {
    this.subscriptionCardData = this.sharedService.totalCounts.subscribe(country => {
      this.dataService
        .get(`${environment.url}/countries`)
        .subscribe((data: any) => {
          this.totalExport = data.reduce((accum: any, item: any) => accum + item.properties.exportCounter, 0)
          this.totalImport = data.reduce((accum: any, item: any) => accum + item.properties.importCounter, 0)
          this.percentImport = Math.floor((this.totalImport / data.length) * 100)
          this.percentExport = Math.floor((this.totalExport / data.length) * 100)
          this.cdr.detectChanges()
        });
    })
  }
}
