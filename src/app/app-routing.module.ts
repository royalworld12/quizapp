import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/views/login/login.component';
import { HomeComponent } from '../app/views/home/home.component';
import { AdminHomeComponent } from '../app/views/admin-home/admin-home.component';
import { QuizComponent } from '../app/views/quiz/quiz.component';
import { ResultComponent } from '../app/views/result/result.component';
import { RegisterationComponent } from '../app/views/registeration/registeration.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterationComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'admin-home', component: AdminHomeComponent, canActivate: [AuthGuard] },
  { path: 'quiz/:id', component: QuizComponent, canActivate: [AuthGuard] },
  { path: 'result', component: ResultComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
