import { AbstractControl, FormGroup } from "@angular/forms";


export class LoginValidators {

    static validateEmailId(control: AbstractControl): any {
        let emailIdPattern: RegExp = /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/
        if(!emailIdPattern.test(control.value)) {
            return {'emailIdPatternError': true}
        }
        return false
    }
    static validatePassword(control: AbstractControl): any {
        let char1: RegExp = /^.*[A-Z]+.*/       //capital letter anywhere
        let char2: RegExp = /^.*[a-z]+.*/       //small letter anywhere
        let char3: RegExp = /^.*[\d]+.*/        //digit anywhere
        let char4: RegExp = /.*[@#$%^&*]+.*/
        let matches: boolean = char1.test(control.value) && char2.test(control.value) && char3.test(control.value) && char4.test(control.value)
        if (!matches){
            return {'passwordPatternError': true}
        }
        return false
    }
    static confirmPassword(passwordControl: AbstractControl): any {
        return (confirmPasswordControl: AbstractControl) => {
            if(passwordControl.value != confirmPasswordControl.value) {
                console.log(passwordControl.value)
                return {'confirmPasswordPatternError': true}
            }
            return false

        }
    }


    
    static validateName(control: AbstractControl): any {
        let namePattern1: RegExp = /^[a-zA-Z ]+/
        let namePattern2: RegExp = /^[^ ].*/
        let namePattern3: RegExp = /.*[^ ]$/
        let value = control.value
        let matches: boolean = namePattern1.test(value) && namePattern2.test(value) && namePattern3.test(value)
        if(!matches) {
            return { "namePatternError": true}
        }
        return false

    }
}