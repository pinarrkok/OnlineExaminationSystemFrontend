import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Subscription } from 'rxjs';
import { LoginGuard } from './login.guard';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';
import { UserForLogin } from 'src/models/userForLogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    constructor(private formBuilder: FormBuilder,
                private accountService: AccountService,
                private alertifyService: AlertifyService) { }

    loginForm: FormGroup;
    user: UserForLogin = new UserForLogin();

    createLoginForm() {
      this.loginForm = this.formBuilder.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
      });
    }

    ngOnInit(): void {
      this.createLoginForm();
    }

    login() {
      if (this.loginForm.valid) {
        console.log(this.loginForm)
        this.user = Object.assign({}, this.loginForm.value)
      }
      this.accountService.login(this.user);
    }

    

  }

