import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegistrationData } from 'src/app/interfaces/path.interface';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  Url: string = "https://reqres.in/api/users";
  user: RegistrationData = {
    name: '',
    secondName: '',
    password: 0,
    email: '',
    phoneNumber: 0
  }
  private subscriptions: Subscription = new Subscription();



  constructor(
    private router: Router,
    private postData: GetDataService) {}

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    secondName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)])
  })

  setToLocalstorage(): void {
    const codedData: string = btoa(JSON.stringify(this.user));
    localStorage.setItem('UserRegistration', codedData)
  }

  onSubmit(): void {
    this.user = this.profileForm.value;

    this.subscriptions = this.postData.postData(this.Url, this.user).subscribe();

    this.setToLocalstorage();
    this.router.navigate(['form'])
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
