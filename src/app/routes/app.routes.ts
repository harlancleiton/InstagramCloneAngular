import { Routes } from '@angular/router'
import { AccessComponent } from '../access/access.component';
import { HomeComponent } from '../home/home.component';
import { AuthenticationGuard } from './routes-guard/authentication-guard.service';

export const ROUTES: Routes = [
    { path: '', component: AccessComponent },
    //canActivate protege a rota
    { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
]