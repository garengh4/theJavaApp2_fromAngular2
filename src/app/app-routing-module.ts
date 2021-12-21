import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path: '', redirectTo: 'applicationHome/login', pathMatch: 'full'}  //see customer-routing-module.ts
]

@NgModule ({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule {}