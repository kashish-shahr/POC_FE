import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  navLinks:string[];
  activeLink:number;

  ngOnInit(): void {
    this.navLinks = [
      "Skills",
      "Benefits",
      "Leadership Address",
      "Testimonials",
      "FAQs"
    ]

    this.activeLink = 0;
  }

  setActiveLink(index:number):void {
    this.activeLink = index;
  }

}
