import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LogInData, RegistrationData } from 'src/app/interfaces/path.interface'
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  logInData: LogInData = {
    userName: '',
    password: 0,
    checkbox: true
  };

  response: any = '';

  dataCompare: LogInData | undefined;
  Url: string = "https://reqres.in/api/users";
  array: any;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private getData: GetDataService,
    ) {}

  ngOnInit(): void {
    this.checkBoxRememberMe();
    // this.subscriptions.add(this.getData.getData(this.Url).subscribe((response: Object) => {
    //   this.array = response;
    //   console.log(this.array)
    // }))
  }

  logInForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    checkbox: new FormControl('')
  })

  // getDataFromLocalStorage(): void {
  //   if (localStorage.getItem('UserRegistration')) {
  //     const decode: string = atob(<string>localStorage.getItem('UserRegistration'));
  //     const parseData: RegistrationData = JSON.parse(decode);
  //     this.dataCompare = {userName: parseData.name, password: parseData.password, checkbox: false};
  //   }
  // }

  // logIn() {
  //   this.logInData = this.logInForm.value;
  //   this.getDataFromLocalStorage();

  //   if (this.logInData?.userName == this.dataCompare?.userName && this.logInData?.password == this.dataCompare?.password) {
  //     this.router.navigate(['form/account'])
  //   } else {
  //     console.log('Try again')
  //   }

  //   if (this.logInForm.value.checkbox) {
  //     const coded: string = btoa(JSON.stringify(this.logInData));
  //     localStorage.setItem('User', coded);
  //   } else {
  //     localStorage.removeItem('User');
  //   }
  // }

  logIn() {
    this.logInData = this.logInForm.value;
    this.getData.postDataFromForm(this.Url, this.logInData).subscribe(( response: any )=>{
      this.response = response;
    });
    
    setTimeout(() => {
      console.log(this.response);
      if(this.response) {
        this.router.navigate(['form/account']);
      }else {
        console.log('Try again');
      }
    },500);
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

  // ngOnDestroy() {
  //   this.subscriptions.unsubscribe();
  // }
}
