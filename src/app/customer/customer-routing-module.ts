import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerHomePageComponent } from "./customer-home-page/customer-home-page.component";
import { ViewAllProductsComponent } from "./customer-home-page/view-all-products/view-all-products.component";
import { CustomerLandingPageComponent } from "./customer-landing-page/customer-landing-page.component";
import { LoginComponent } from "./customer-landing-page/login/login.component";
import { RegistrationComponent } from "./customer-landing-page/registration/registration.component";


const routes: Routes = [
    {path: 'applicationHome', component: CustomerLandingPageComponent, children: [
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegistrationComponent},
        {path: '', redirectTo: 'login', pathMatch:'full'}
    ]},
    { path: 'home', component: CustomerHomePageComponent, children: [
        { path: 'products', component: ViewAllProductsComponent },
        { path: '', redirectTo: 'products', pathMatch: 'full' }
    ] }
]

@NgModule ({ 
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})


export class CustomerRoutingModule {}