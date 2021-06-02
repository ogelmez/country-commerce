import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
@NgModule({
    declarations: [
        MapComponent,
    ],
    imports: [CommonModule, LeafletModule,MatCardModule],
    exports: [
        MapComponent,
    ]
})
export class MapModule { }