import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationData } from 'src/app/interfaces/path.interface';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  infoAboutUser: any;

  name: string = '';
  secondName: string = '';
  phoneNumber: number | undefined;
  email: string | undefined;

  adjustForm: boolean = false;
  accountPage: boolean = true;
  logInform = new FormGroup({});

  selectedFile: any = null;
  myimageFile: any[] | undefined;
  url: string = "";

  constructor( 
    private http: HttpClient,
    private service: GetDataService
    ) { }

  ngOnInit(): void {
    this.getItemFromLocalStorage();
    this.logInform = new FormGroup({
      userName: new FormControl(this.name, Validators.required),
      secondName: new FormControl(this.secondName, Validators.required),
      phone: new FormControl(this.phoneNumber, [Validators.required, Validators.minLength(9)]),
      mail: new FormControl(this.email, [Validators.required, Validators.email])
    })
  }

  getItemFromLocalStorage() {
    const decode = atob(<string>localStorage.getItem('UserRegistration'));
    this.infoAboutUser = JSON.parse(decode);
    this.name = this.infoAboutUser.name;
    this.secondName = this.infoAboutUser.secondName;
    this.phoneNumber = this.infoAboutUser.phoneNumber;
    this.email = this.infoAboutUser.email;
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

    // this.http.post(this.url, this.selectedFile)
    // .subscribe(
    //   response => 
    //   console.log(response)); 
  }

  saveChanges():void {
    this.name = this.logInform.value.userName;
    this.secondName = this.logInform.value.secondName;
    this.phoneNumber = this.logInform.value.phone;
    this.email = this.logInform.value.mail;

    this.infoAboutUser.name = this.name;
    this.infoAboutUser.secondName = this.secondName;
    this.infoAboutUser.phoneNumber = this.phoneNumber;
    this.infoAboutUser.email = this.email;
  
    const codedData: string = btoa(JSON.stringify(this.infoAboutUser));
    localStorage.setItem('UserRegistration', codedData);
  }
}
