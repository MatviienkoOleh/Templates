import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInData, RegistrationData } from 'src/app/interfaces/path.interface'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  logInData: LogInData | undefined;
  dataCompare: LogInData | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkBoxRememberMe();
  }

  logInForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    checkbox: new FormControl('')
  })

  getDataFromLocalStorage(): void {
    if (localStorage.getItem('UserRegistration')) {
      const decode: string = atob(<string>localStorage.getItem('UserRegistration'));
      const parseData: RegistrationData = JSON.parse(decode);
      this.dataCompare = {userName: parseData.name, password: parseData.password, checkbox: false};
    }
  }

  logIn() {
    this.logInData = this.logInForm.value;
    this.getDataFromLocalStorage();

    if (this.logInData?.userName == this.dataCompare?.userName && this.logInData?.password == this.dataCompare?.password) {
      this.router.navigate(['form/account'])
    } else {
      console.log('Try again')
    }

    if (this.logInForm.value.checkbox) {
      const coded: string = btoa(JSON.stringify(this.logInData));
      localStorage.setItem('User', coded);
    } else {
      localStorage.removeItem('User');
    }
  }

  setValueToLogInForm(data: LogInData): void {
    this.logInForm.setValue({
      userName: data.userName,
      password: data.password,
      checkbox: data.checkbox
    });
  }

  checkBoxRememberMe():void {
    if(localStorage.getItem('User')) {
      const decodelogInUser: string  = atob(<string>localStorage.getItem('User'));
      const logInUser: LogInData = JSON.parse(decodelogInUser);
      this.setValueToLogInForm(logInUser);
    }
  }
}
