import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verify-form',
  templateUrl: './verify-form.component.html',
  styleUrls: ['./verify-form.component.scss']
})
export class VerifyFormComponent implements OnInit {
  @Output() backEmitter = new EventEmitter<any>();
  @Output() nextEmitter = new EventEmitter<any>();
  countries=  [{name:'Egypt',code:"+20",cities:[{name:'cairo',id:5},{name:'giza',id:6}],id:20},{name:'Saudi Arabia',id:25,code:"+30",cities:[{name:'Riad',id:55}]} , {name:'France',id:30,code:"+001",cities:[{name:'paris',id:15}]}];

  selectedCountry = this.countries[0];
  selectedCity = this.selectedCountry.cities[0];

  constructor() { }
  verifyCompany = new FormGroup({
    companyname: new FormControl(''),
    Address: new FormControl(''),
    businessEmail: new FormControl(''),
    companyNumber: new FormControl(''),
    companyNumber2: new FormControl(''),
    });
  ngOnInit(): void {
  }
  verifyData(){
    let data ={
      companyname:this.verifyCompany.get('companyname').value,
      address:this.verifyCompany.get('Address').value,
      businessEmail:this.verifyCompany.get('businessEmail').value,
      companyNumber:this.verifyCompany.get('companyNumber').value,
      companyNumber2:this.verifyCompany.get('companyNumber2').value,
      country:this.selectedCountry.id,
      city:this.selectedCity.id,
    } 
    console.log(data);
    this.nextEmitter.emit(data);
  }
  back(){
    this.backEmitter.emit();
  }
}
