import { Component, OnInit } from '@angular/core';
import { RegistrationData } from 'src/app/interfaces/path.interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  name: string = '';
  secondName: string = '';
  phoneNumber: number | undefined;
  email: string | undefined;
  date: string = '';

  constructor() { }

  ngOnInit(): void {
    this.getItemFromLocalStorage();
  }

  getItemFromLocalStorage() {
    const decode = atob(<string>localStorage.getItem('UserRegistration'));
    const data: RegistrationData = JSON.parse(decode);
    this.name = data.name;
    this.secondName = data.secondName;
    this.phoneNumber = data.phoneNumber;
    this.email = data.email;
    this.date = this.formatDate(data.date)
  }

  formatDate(date: string) {
    console.log(date)
    const dateString = date.substr(0, 10)
    return dateString;
  }
}
