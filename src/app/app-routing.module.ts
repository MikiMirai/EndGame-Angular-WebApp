import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ContactComponent } from "./contact/contact.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GameDetailsComponent } from "./game-details/game-details.component";
import { GamesListComponent } from "./games-list/games-list.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/'
    },
    { path: 'games', component: GamesListComponent },
    { path: 'game-details', component: GameDetailsComponent },
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