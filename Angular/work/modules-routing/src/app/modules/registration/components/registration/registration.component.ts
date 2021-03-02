import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { RegistrationData } from 'src/app/interfaces/path.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  User: RegistrationData = {
    name: '',
    secondName: '',
    password: 0,
    email: '',
    phoneNumber: 0,
    date: 0
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    secondName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
  })

  setToLocalstorage(): void {
    const codedData: string = btoa(JSON.stringify(this.User));
    localStorage.setItem('UserRegistration', codedData)
  }

  onSubmit(): void {
    this.User = this.profileForm.value;
    this.User.date = new Date();
    console.log(this.User)
    this.setToLocalstorage();
    this.router.navigate(['form'])
  }
}
