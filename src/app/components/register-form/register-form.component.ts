import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
@Output() registerDataEmmiter = new EventEmitter<any>();
 countries=  [{name:'Egypt',code:"+20",id:20},{name:'Saudi Arabia',code:"+30",id:25} , {name:'France',code:"+001",id:30}];

selectedCountry = this.countries[0];

  constructor() { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    fullname: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    businessEmail: new FormControl('',[Validators.required,Validators.email]),
    Phone : new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    }); 
    hide = true;

    registerData(){
      
      let data ={
        name: this.loginForm.get('fullname').value,
        businessEmail: this.loginForm.get('businessEmail').value,
        password: this.loginForm.get('password').value,
        confirmPassword: this.loginForm.get('confirmpassword').value,
        phone: this.loginForm.get('Phone').value,
        country: this.selectedCountry.id,
      } 
      this.registerDataEmmiter.emit(data);
    }
}
