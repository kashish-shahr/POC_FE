import {Routes,RouterModule} from "@angular/router";
import { HomepageComponent } from "./HomePage/homepage/homepage.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
const arr:Routes=[
    {path:'',component:HomepageComponent},
    {path:'HomePage',component:HomepageComponent},
    {path:'pagenotfound',component:PageNotFoundComponent}
    
];

export const routingArr=RouterModule.forRoot(arr);