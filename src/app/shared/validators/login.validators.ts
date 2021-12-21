import { AbstractControl } from "@angular/forms";


export class LoginValidators {
    static validateEmailId(control: AbstractControl): any {
        let emailIdPattern: RegExp = /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/
        if(!emailIdPattern.test(control.value)) {
            return {'emailIdPatternError': true}
        }
        return null
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
        return null
    }
}