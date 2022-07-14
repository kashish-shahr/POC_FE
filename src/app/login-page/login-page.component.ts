import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './Login';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private _route: Router, private _login: LoginService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl(null,[Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }
  onLogin(){
    // this._login.login(this.loginForm.value).subscribe(
    //   (loginData:Login[])=>{
    //       if(loginData.length==1){
    //         localStorage.setItem('email',this.loginForm.get('email').value);
    //         this._route.navigate(['nav']);
    //       }
    //       else{
    //         alert('invalid login credentials')
    //       }
    //   }
    // )
    localStorage.setItem('email','krs');
    this._route.navigate(['nav']);
  }

}
