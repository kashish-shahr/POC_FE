import { Component, OnInit } from '@angular/core';
import { MiddleBannerData } from '../MiddleBannerData';

@Component({
  selector: 'app-middle-banner',
  templateUrl: './middle-banner.component.html',
  styleUrls: ['./middle-banner.component.css']
})
export class MiddleBannerComponent implements OnInit {

  constructor() { }
  middleBannerData:MiddleBannerData[];
  middleBannerList:MiddleBannerData[];
  middleBannerLeftData:MiddleBannerData;
  intervalId:any;
  ngOnInit(): void {
    this.middleBannerData=[
      {
        Heading:"Physics",
        SubHeading:"Physics is the natural science.",
        Description:"Physics is the natural science that studies matter.",
        Priority:1,
        ImageUrl:"https://res.cloudinary.com/sanket0700/image/upload/v1656390531/what_phbodm.png"
      },
      {
        Heading:"Natural science",
        SubHeading:"Natural science is one of the branches of science",
        Description:"Natural science is one of the branches of science.",
        Priority:2,
        ImageUrl:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Lennuliiklust_uurimas.jpg"
      },
      {
        Heading:"Observation",
        SubHeading:"Observation[1] is the active acquisition of information",
        Description:"For other uses, see ObservationZZ",
        Priority:3,
        ImageUrl:"https://res.cloudinary.com/sanket0700/image/upload/v1656390531/what_phbodm.png"
      },
      {
        Heading:"Observation",
        SubHeading:"Observation[1] is the active acquisition of information",
        Description:"For other uses, see Observations",
        Priority:4,
        ImageUrl:"https://res.cloudinary.com/sanket0700/image/upload/v1656390531/what_phbodm.png"
      }
    ];
    this.middleBannerData.sort((middleBanner1,middleBanner2)=>middleBanner1.Priority-middleBanner2.Priority);
    this.middleBannerList=this.middleBannerData.slice(0,3);
    this.middleBannerLeftData=this.middleBannerData[3];

  }
 
}
