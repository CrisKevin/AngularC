import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LabsComponent } from './pages/labs/labs.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { HomedosComponent } from './pages/homedos/homedos.component';

const routes: Routes = [

    {path: "register", component:RegisterComponent},
    {path: "homee", component:HomeComponent, ...canActivate(()=>redirectUnauthorizedTo(["/"]))},
    {path: "login", component:LoginComponent},
    {path: "labs", component:LabsComponent, ...canActivate(()=>redirectUnauthorizedTo(["/"]))},
    {path: "", component:HomedosComponent}
];


@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}

