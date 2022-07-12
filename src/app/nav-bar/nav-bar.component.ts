import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  navLinks:any;
  activeLink:number;
  
  ngOnInit(): void {
    this.navLinks = [
      {"name":"Skills","url":"skills"},
      {"name":"Benifits","url":"benefits"},
      {"name":"Leadership Address","url":"leadership-address"},
      {"name":"Testimonials","url":"testimonials"},
      {"name":"FAQs","url":"faqs"},
      
    ]
    
   
    
    this.activeLink = 0;
  }

  setActiveLink(index:number):void {
    this.activeLink = index;
  }

}
