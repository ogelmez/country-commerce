import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private httpClient: HttpClient) { }

    get(url: string): Observable<any[]> {
        return this.httpClient.get(url).pipe(
            map((data: any) => {
                return data;
            }), catchError(error => {
                return throwError('Bir hata ile karşılaşıldı.');
            })
        )
    }

    update(url: string, data: any): Observable<any> {
        return this.httpClient.put(url, data).pipe(
            catchError(error => {
                return throwError('Bir hata ile karşılaşıldı.');
            })
        )
    }

}