import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LogInData } from 'src/app/interfaces/path.interface';
import { FormComponent } from 'src/app/modules/form/components/form/form.component';

@Component({
  selector: 'app-organisation-form',
  templateUrl: './organisation-form.component.html',
  styleUrls: ['./organisation-form.component.css']
})
export class OrganisationFormComponent implements OnInit {
  organisationLogData: LogInData = {
    userName: '',
    password: 0,
    checkbox: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  organisationLogInForm = new FormGroup({
    userName: new FormControl(''),
    checkbox: new FormControl(''),
    password: new FormControl(''),
  })


  logIn() {
    this.organisationLogData = this.organisationLogInForm.value;
    this.setToLocalStorage();
  }

  setToLocalStorage() {
    let coded: string = btoa(JSON.stringify(this.organisationLogData))
    localStorage.setItem('OrganisationLog', coded)
  }
}
