import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserForRegister } from 'src/models/userForRegister';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertifyService: AlertifyService) { }

signupForm: FormGroup;
user: UserForRegister = new UserForRegister();

createSignupForm() {
this.signupForm = this.formBuilder.group({
firstName: ["", Validators.required],
lastName: ["", Validators.required],
email: ["", Validators.required],
password: ["", Validators.required]
});
}

ngOnInit(): void {
this.createSignupForm();
}

signup() {
if (this.signupForm.valid) {
console.log(this.signupForm)
this.user = Object.assign({}, this.signupForm.value)
}
this.accountService.signup(this.user);
}
}
