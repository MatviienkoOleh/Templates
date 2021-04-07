import { HttpClient } from '@angular/common/http';
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

  adjustForm: boolean = false;
  accountPage: boolean = true;

  selectedFile: any = null;
  myimageFile: any = null;
  url: string = "";

  constructor( private http: HttpClient) { }

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
  }

  formatDate(date: string) {
    console.log(date)
    const dateString = date.substr(0, 10)
    return dateString;
  }

  personalData(): void {
    this.adjustForm = true;
    this.accountPage = false;
  }

  backToAccount(): void {
    this.adjustForm = false;
    this.accountPage = true;
  }

  showFile(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);

    this.http.post(this.url, this.selectedFile)
    .subscribe(
      response => 
      console.log(response));
    
    this.http.get(this.url)
    .subscribe(resp => console.log(resp));  
  }
}
