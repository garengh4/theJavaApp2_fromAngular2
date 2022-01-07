import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Customer } from "src/app/shared/models/customer";
import { LoginValidators } from "src/app/shared/validators/login.validators";
import { LoginService } from "./login.service";


@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    customer: Customer = new Customer;
    errorMessage: string=''
    successMessage: string=''
    tryToLogin: boolean = false
    loginForm!: FormGroup;

    constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {}

    ngOnInit() {
        this.customer = new Customer()
        this.createForm()
    }
    
    createForm(){
        this.loginForm = this.fb.group({
            emailId: [this.customer.emailId, [Validators.required, LoginValidators.validateEmailId], null],
            password: [this.customer.password, [Validators.required], null]
        })
    }

    login() {
        this.tryToLogin = true
        this.errorMessage = ''
        this.successMessage = ''
        this.customer = this.loginForm.value as Customer

        this.loginService.login(this.customer).subscribe({
            next: message => {
                this.customer = message
                sessionStorage.setItem('customer', JSON.stringify(this.customer))
                sessionStorage.setItem('userType', JSON.stringify('Customer'))

                this.tryToLogin = false
                this.router.navigate(['/home'])
            },
            error: error => {
                this.tryToLogin = false
                this.errorMessage = <any> error
            }
        })

        // this.loginService.login(this.customer).subscribe((response) => {
        //     this.customer = response
        //     sessionStorage.setItem('customer', JSON.stringify(this.customer))
        //     sessionStorage.setItem('userType', JSON.stringify('Customer'))

        //     this.tryToLogin = false
        //     this.router.navigate(['/home'])
        // }, (error) => {
        //     this.tryToLogin = false
        //     this.errorMessage = <any> error
        // })
    }


    
}