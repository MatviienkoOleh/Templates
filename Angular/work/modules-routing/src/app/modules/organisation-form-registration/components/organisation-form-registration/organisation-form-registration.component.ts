import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationData } from 'src/app/interfaces/path.interface';

@Component({
  selector: 'app-organisation-form-registration',
  templateUrl: './organisation-form-registration.component.html',
  styleUrls: ['./organisation-form-registration.component.css']
})
export class OrganisationFormRegistrationComponent implements OnInit {

  organisationData: RegistrationData = {
    name: '',
    secondName: '',
    password: 0,
    email: '',
    phoneNumber: 0
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  registarationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    secondName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)])
  })

  onSubmit() {
    this.organisationData = this.registarationForm.value;
    this.setToLocalstorage();
    this.router.navigate(['organisationform'])
  }

  setToLocalstorage(): void {
    const codedData: string = btoa(JSON.stringify(this.organisationData));
    localStorage.setItem('OrganisationReg', codedData)
  }
}
