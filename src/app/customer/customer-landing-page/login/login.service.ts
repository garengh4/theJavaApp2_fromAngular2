import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"
import { Customer } from "src/app/shared/models/customer";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators"
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'})
    
    constructor(private http: HttpClient) { }

    login(customer: Customer): Observable<Customer> {
        const url = environment.customerAPIUrl + '/login'
        return this.http.post<Customer>(url, customer, {headers: this.headers}).pipe(catchError(this.handleError))
    }

    private handleError(err: HttpErrorResponse){ 
        console.log(err)
        let errMsg: string = ''
        if (err.error instanceof Error) {
            errMsg = err.error.message
            console.log(errMsg)
        } else if (typeof err.error === 'string') {
            errMsg = JSON.parse(err.error).errorMessage
        } else {
            if (err.status == 0) {
                errMsg = 'Error: Connection to java backend cannot be established'
            } else {
                errMsg = err.error.errorMessage
            }
        }
        return throwError(() => new Error(errMsg))
    }
}