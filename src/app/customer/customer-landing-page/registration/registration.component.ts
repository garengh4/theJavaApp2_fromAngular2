import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginValidators } from "../../../shared/validators/login.validators"
import { RegistrationService } from "./registration.service";
import { Customer } from "../../../shared/models/customer";


@Component({
    selector: "registration",
    templateUrl: "./registration.component.html"
})

export class RegistrationComponent implements OnInit {
    customer: Customer = new Customer
    registerUserForm!: FormGroup

    errorMessage: string = ''
    successMessage: string = ''

    constructor(private fb: FormBuilder, private registerService: RegistrationService) { }

    ngOnInit() {
        this.customer = new Customer()
        this.createForm()
    }

    createForm() {

        this.registerUserForm = this.fb.group({
            emailId: [this.customer.emailId, [Validators.required, LoginValidators.validateEmailId], null],


            password: [this.customer.password, [Validators.required, LoginValidators.validatePassword], null],
            confirmPassword: ["", [Validators.required], null]
        })
        // this checks if password == confirmPassword, exclamation ignores possiblity of null
        this.registerUserForm.get('confirmPassword')!.setValidators([Validators.required, LoginValidators.confirmPassword(this.registerUserForm.get('password')!)]);
    }

    registerUser() {
        this.errorMessage = ''
        this.successMessage = ''
        this.customer = this.registerUserForm.value as Customer
        this.registerService.registerCustomer(this.customer).subscribe({
            next: message => {
                this.successMessage = message
                console.log(message)
                this.registerUserForm.reset()
            },
            error: error => {
                console.log(error)
                this.errorMessage = <any>error
            }
        })
    }

}