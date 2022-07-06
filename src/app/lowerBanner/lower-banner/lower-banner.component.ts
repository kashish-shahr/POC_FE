import { Component, OnInit } from '@angular/core';
import { LowerBannerData } from './LowerBannerData';

@Component({
  selector: 'app-lower-banner',
  templateUrl: './lower-banner.component.html',
  styleUrls: ['./lower-banner.component.css']
})
export class LowerBannerComponent implements OnInit {

  constructor() { }
  lowerBannerData:LowerBannerData[];
  requiredLowerBannerData:LowerBannerData[];
  currentBannerNumber:number=0;
  bannerInterval:any;
  bannerLimit:number = 3;
  
  ngOnInit(): void {
    this.bannerInterval = setInterval(()=>{
      this.onTopBannerNext()
    },5000);
    
    this.lowerBannerData=[
      {
        Heading:"Microsite",
        Description:"A microsite[1][2][3] is an individual web page or a small cluster of pages[4] which are meant to function as a discrete entity.",
        ImageUrl:"https://res.cloudinary.com/sanket0700/image/upload/v1656390531/what_phbodm.png",
        Priority:1
      },
      {
        Heading:"Web page",
        Description:"A web page (or webpage) is a hypertext document on the World Wide Web. Web pages are delivered by a web server to the user and displayed in a web browser",
        ImageUrl:"https://thumbs.dreamstime.com/b/technology-background-html-website-structure-screenshot-random-parts-program-code-programmer-occupation-job-software-d-127601163.jpg",
        Priority:2
      },
      {
        Heading:"Hypertext",
        Description:"Hypertext is text displayed on a computer display or other electronic devices with references (hyperlinks) to other text that the reader can immediately access.[1]",
        ImageUrl:"https://thumbs.dreamstime.com/z/left-right-human-brain-social-infographic-logical-side-creative-half-logic-half-human-mind-vector-illustration-96184117.jpg",
        Priority:3
      },{
        Heading:"Electronics",
        Description:"The field of electronics is a branch of physics and electrical engineering that deals with the emission, behaviour and effects of electrons using electronic devices. ",
        ImageUrl:"https://thumbs.dreamstime.com/z/set-leaves-texture-195504138.jpg",
        Priority:4
      }];
      this.lowerBannerData.sort((topBanner1,topBanner2)=>topBanner1.Priority-topBanner2.Priority);
      this.requiredLowerBannerData = this.lowerBannerData.slice(0,this.bannerLimit);
  }

  
  onTopBannerNext():void{
    this.currentBannerNumber = (this.currentBannerNumber+1)%this.bannerLimit
  }

  changeBannerSlide(action: string):void{
    if(action==='increment') {
      this.currentBannerNumber = (this.currentBannerNumber+1)%this.bannerLimit;
    } else if(action==='decrement') {
      this.currentBannerNumber = ((this.currentBannerNumber+this.bannerLimit)-1)%this.bannerLimit;
    }
  }

}
