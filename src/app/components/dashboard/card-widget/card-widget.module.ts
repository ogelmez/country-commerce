import { NgModule } from '@angular/core';
import { CardWidgetComponent } from './card-widget.component';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        CardWidgetComponent,
    ],
    imports: [CommonModule,MatCardModule, FontAwesomeModule],
    exports: [
        CardWidgetComponent,
    ]
})
export class CardWidgetModule { }