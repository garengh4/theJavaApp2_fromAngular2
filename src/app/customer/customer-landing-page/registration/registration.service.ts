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
    registerCustomer(customer: Customer){
        const url = environment.customerAPIUrl + '/customers'
        console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
        console.log(url)
        let postRequest = this.http.post<string>(url, customer, {headers: this.headers, responseType: 'text' as 'json'}).pipe(catchError(this.handleError))
        console.log(postRequest)
        return postRequest
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err)
        let errMsg: string = ''
        if(err.error instanceof Error) {
            errMsg = err.error.message
            console.log(errMsg)
        } else if (typeof err.error === 'string') {
            errMsg = JSON.parse(err.error).errorMessage
        } else {
            if (err.status == 0){
                errMsg = 'Error: Connection to java backend cannot be established'
            } else {
                errMsg = err.error.message
            }
        }
        return throwError(errMsg)
    }
}