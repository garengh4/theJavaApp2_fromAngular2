import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import {HttpClientModule} from '@angular/common/http';
import { CustomerRoutingModule } from "./customer-routing-module";
import { CustomerLandingPageComponent } from "./customer-landing-page/customer-landing-page.component";
import { LoginComponent } from "./customer-landing-page/login/login.component";
import { LoginService } from "./customer-landing-page/login/login.service";
import { CustomerHomePageComponent } from "./customer-home-page/customer-home-page.component";
import { ViewAllProductsComponent } from "./customer-home-page/view-all-products/view-all-products.component";
import { RegistrationComponent } from "./customer-landing-page/registration/registration.component";
import { RegistrationService } from "./customer-landing-page/registration/registration.service";


@NgModule ({
    declarations: [
        CustomerLandingPageComponent,
        CustomerHomePageComponent,
        ViewAllProductsComponent,
        LoginComponent,
        RegistrationComponent,



    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CustomerRoutingModule,

    ],
    providers: [
        LoginService,
        RegistrationService

    ],  
    exports: [

    ]
})

export class CustomerModule {}