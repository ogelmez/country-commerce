import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    country: BehaviorSubject<any>;
    totalCounts : BehaviorSubject<any>;
    constructor() {
        this.country = new BehaviorSubject("");
        this.totalCounts = new BehaviorSubject("");
    }
    changeCountry(message: any) {
        this.country.next(message)
    }

    getTotalCount() {
        this.totalCounts.next(true)
    }
}