import { NgModule } from '@angular/core';
import { ContinentsListComponent } from './continents-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        ContinentsListComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatListModule
    ],
    exports: [
        ContinentsListComponent,
    ]
})
export class ContinentsListModule { }