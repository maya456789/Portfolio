import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.css']
})
export class ExperianceComponent implements OnInit {


workexp: any

constructor(private profileService:ProfileService) { }

  ngOnInit() {

    this.workexp =  this.profileService.exprience()
  }
}
