import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MapModule } from './map/map.module';
import { CardWidgetModule } from './card-widget/card-widget.module';
import { ContinentsListModule } from './continents-list/continents-list.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedService } from 'src/services/shared.service';


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MapModule,
        CardWidgetModule,
        ContinentsListModule
    ]
})
export class DashboardModule { }
