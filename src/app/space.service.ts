import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Flight } from '../app/interfaces/flight';
@Injectable({
    providedIn: 'root'
})
export class SpaceService {
    http: any;
    baseUrl:string = "https://api.spacexdata.com/v3/launches";
    
    constructor(private httpClient: HttpClient) {
        this.http = httpClient;
    }

    getData() {
        return this.http.get('https://api.spacexdata.com/v3/launches');
    }

    // getRocketById(id: any): Observable<any> {
    //     return this.http.get<Flight>(this.baseUrl + id).pipe(
    //         retry(3), catchError(this.handleError<Flight>('getFlight')));
    // }

    // private handleError<T>(operation = 'operation', result?: T) {
    //     return (error: any): Observable<T> => {
    //         console.error(error);
    //         this.log(error.message);
            
    //         return of(result as T);
    //     }
    // }

    private log(message: string) {
        console.log(message);
    }
}