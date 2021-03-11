import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamComponent } from './exam/exam.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExamFilterPipe } from './exam/exam-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import { ExamAddComponent } from './exam/exam-add/exam-add.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ExamFilterPipe,
    ExamAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AlertifyService, AccountService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
