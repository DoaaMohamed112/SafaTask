import { Component, OnInit } from '@angular/core';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Data } from '../models/Data';
import { APIService } from '../service/ApiService';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class RegisterationComponent implements OnInit {
 icon0 = 'person';
 icon1 = 'apartment';
 icon2 = 'photo_library';
 icon3 = 'verified_user';

 info:Data = new Data();
 apiService:APIService
  constructor(http:HttpClient, private router: Router) {
    this.apiService= new APIService(http);

   }

  ngOnInit() {
  }

  registerData(event,stepper : MatStepper){
    console.log(event);
    this.info.user_full_name = event.name;
    this.info.user_email = event.businessEmail;
    this.info.user_password = event.password;
    this.info.user_password_confirmation = event.confirmPassword;
    this.info.user_phone = event.phone;
    this.info.country = event.country;
    this.next(stepper);
  }
  verifyData(event,stepper: MatStepper){
    console.log(event);
    this.info.company_name = event.companyname;
    this.info.company_address = event.address;
    this.info.company_business_email = event.businessEmail;
    this.info.company_phone = event.companyNumber;
    this.info.company_country_id = event.country;
    this.info.company_city_id = event.city;

    this.next(stepper);

  }
  submitData(event){
    this.apiService.post("/register",this.info).subscribe((result:any)=>{
      console.log("result",result);
      if(result)
      {
        // if(result.message.includes('OK')){
          this.router.navigate(['/','confirm']) 
        // }

      }

    })
  }
  back(stepper:MatStepper){
    stepper.previous();
  }
  next(stepper:MatStepper){
    stepper.next();
  }
}
