import {Routes,RouterModule} from "@angular/router";
import { HomepageComponent } from "./HomePage/homepage/homepage.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BenefitsComponent } from "./Pages/benefits/benefits.component";
import { FaqsComponent } from "./Pages/faqs/faqs.component";
import { LeadershipAddressComponent } from "./Pages/leadership-address/leadership-address.component";
import { TestimonialsComponent } from "./Pages/testimonials/testimonials.component";
import { UserRolesComponent } from "./user-roles/user-roles.component";
import { UserauthguardService } from "./userauthguard.service";
const arr:Routes=[
    
    {path:'',component:UserRolesComponent},
    {path:'login',component:LoginPageComponent},
    {
    path:'nav',canActivate:[UserauthguardService],component:MainNavComponent,children:[
    {path:'',component:HomepageComponent},
    {path:'HomePage',component:HomepageComponent},
    {path:'skills',component:HomepageComponent},
    {path:'benefits',component:BenefitsComponent},
    {path:'leadership-address',component:LeadershipAddressComponent},
    {path:'testimonials',component:TestimonialsComponent},
    {path:'faqs',component:FaqsComponent},
    
    
    {path:'pagenotfound',component:PageNotFoundComponent},
    
    {path:'**',component:PageNotFoundComponent}
]
}
];

export const routingArr=RouterModule.forRoot(arr);