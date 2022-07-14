import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserauthguardService implements CanActivate{
  canActivate(_activeRoute: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('email')!=null)
    {
      return true;
    }
    alert('Login Is Must');
    this._route.navigate(['/']);
    return false;
  }

  constructor(private _route:Router) { }
}
