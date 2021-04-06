import { Data } from "@angular/router";

export interface Path {
  message: string;
  journey: string[];
}

export interface RegistrationData {
  name: string;
  secondName: string;
  password: any;
  email: any;
  phoneNumber: number
}

export interface LogInData {
  userName: string;
  password: any;
  checkbox: boolean;
}