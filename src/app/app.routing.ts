import {Routes,RouterModule} from "@angular/router";
import { HomepageComponent } from "./HomePage/homepage/homepage.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserRolesComponent } from "./user-roles/user-roles.component";
import { UserauthguardService } from "./userauthguard.service";
const arr:Routes=[
    
    {path:'',component:UserRolesComponent},
    {path:'login',component:LoginPageComponent},
    {
    path:'nav',canActivate:[UserauthguardService],component:MainNavComponent,children:[
    {path:'',component:HomepageComponent},
    {path:'HomePage',component:HomepageComponent},
    {path:'pagenotfound',component:PageNotFoundComponent},
    
    {path:'**',component:PageNotFoundComponent}
]
}
];

export const routingArr=RouterModule.forRoot(arr);