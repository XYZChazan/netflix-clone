import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './util/auth.guard';
import { MathGameComponent } from './math-game/math-game.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'movie-details/:id', component: MovieDetailsComponent, canActivate: [AuthGuard] },
  { path: 'math-game', component: MathGameComponent },
];
