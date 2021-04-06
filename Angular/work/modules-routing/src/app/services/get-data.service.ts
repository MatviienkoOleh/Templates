import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LogInData, RegistrationData } from '../interfaces/path.interface';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {}

  getData(url: string): Observable<any> {
    return this.http.get(url);
  }

  postData(url: string, user: RegistrationData): Observable<any> {
    return this.http.post(url, user);
  }
  postDataFromForm(url:string, user: LogInData): Observable<any> {
    return this.http.post(url, user);
  }
}
