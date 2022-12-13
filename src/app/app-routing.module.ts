import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ContactComponent } from "./contact/contact.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GamesListComponent } from "./games-list/games-list.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/'
    },
    { path: 'games-list', component: GamesListComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }