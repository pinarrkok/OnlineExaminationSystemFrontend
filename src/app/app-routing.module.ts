import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamAddComponent } from './exam/exam-add/exam-add.component';
import { ExamComponent } from './exam/exam.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {path: '', redirectTo: 'exams', pathMatch: 'full'},
  {path: 'exams', component: ExamComponent }, //, canActivate: [LoginGuard]},
  {path: 'exams/course/:courseId', component: ExamComponent},
  {path: 'exams/add', component: ExamAddComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
