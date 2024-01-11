import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import * as AOS from 'aos';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  about1: any
  about2: any;

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    AOS.init();

    this.about1 =  this.profileService.about
    this.about2 =  this.profileService.about2

  }

}
