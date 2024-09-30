import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public hidePassword: Boolean;
  public loginError: Boolean;
  public loginErrorMessage:string;
  public loginForm: FormGroup;
  public errorMessage: string;

  constructor(private loginService: LoginService, private router: Router) {
    this.hidePassword = true;
    this.loginError = false;
    this.loginErrorMessage = "";
    this.loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    });
    this.errorMessage = '';
  }

  Submit() {
    if (this.loginForm.valid){
      let username = this.loginForm.controls['username'].value;
      let password = this.loginForm.controls['password'].value;
      if(this.loginService.Login(username, password)){
        this.router.navigate(['/Home']);
      }
    }
    else{
      this.errorMessage = 'Incorrect username or password. Check your credentials.';
      setTimeout( () => {
        this.errorMessage = "";
      }, 5000)
    }
  }


}
