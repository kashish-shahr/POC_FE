import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  }
  onUserRole(){
this._route.navigate(['login/user']);
  }
  onAdminRole(){
    this._route.navigate(['login/admin']);
  }

}
