import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentsComponent } from './continents.component';
import { ContinentsRoutingModule } from './continents-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    ContinentsComponent
  ],
  imports: [
    CommonModule,
    ContinentsRoutingModule,
    FontAwesomeModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ],
  exports: [
    MatPaginatorModule,
    MatSortModule]

})
export class ContinentsModule { }
