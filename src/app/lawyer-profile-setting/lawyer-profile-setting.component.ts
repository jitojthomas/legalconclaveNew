import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lawyer-profile-setting',
  templateUrl: './lawyer-profile-setting.component.html',
  styleUrls: ['./lawyer-profile-setting.component.css']
})
export class LawyerProfileSettingComponent implements OnInit {
  sh: any;
  sh1: any;
  sh2: any;
  sh3: any;
  sh4: any;
  sh6: any;
  isChecked: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
