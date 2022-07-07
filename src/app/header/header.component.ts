import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _route:Router) { }
  logFlag:boolean=true;
  ngOnInit(): void {
    if(localStorage.getItem('email')!=null)
    {
      this.logFlag=true;
    }else{
      this.logFlag=false;
    }
  }
  onNotificationClick(){
    console.log("Notidication clicked");
    
  }
  onLogInButtonClick()
  {
    this._route.navigate(['/']);
  }
  onLogOutClick(){
    localStorage.clear();
    this.logFlag=true;
    this._route.navigate(['/']);
  }
}
