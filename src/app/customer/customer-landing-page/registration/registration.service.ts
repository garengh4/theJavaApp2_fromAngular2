import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Customer } from "src/app/shared/models/customer";
import { environment } from "src/environments/environment";
import { catchError } from 'rxjs/operators'


// service class: narrow well-defined purpose

@Injectable({
    providedIn: 'root'
})

export class RegistrationService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'})

    constructor(private http: HttpClient) {}

    // pipe: simple IO for data transformation
    registerCustomer(customer: Customer): Observable<string> {
        const url = environment.customerAPIUrl + '/customers';
        let postRequest = this.http.post<string>(url, customer, {headers: this.headers, responseType: 'text' as 'json'}).pipe(catchError(this.handleError))
        return postRequest
    }

    private handleError(err: HttpErrorResponse) {
        let errMsg: string = ''
        if (err.error instanceof Error) {
            errMsg = err.error.message
        } else if (typeof err.error === 'string') {
            errMsg = JSON.parse(err.error).errorMessage
        } else {
            if (err.status == 0){
                errMsg = "A connection to back end can not be established."
            } else {
                errMsg = err.error.message
            }
        }
        return throwError(errMsg)
    }
}