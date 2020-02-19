import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './canactivate.service';
import { BusdevelopmentComponent } from './busdevelopment/busdevelopment.component';
import { BusassesmentComponent } from './busassesment/busassesment.component';
const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'bus-assesment', pathMatch: 'full' },
            { path: 'bus-assesment', component: BusassesmentComponent },
            { path: 'bus-develop', component: BusdevelopmentComponent },
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }