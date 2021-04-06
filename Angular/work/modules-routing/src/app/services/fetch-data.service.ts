import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  constructor() { }
  public array: any;

  fetchData(url: string) {
    fetch(url)
      .then((response) => response.json())
      .then((json) => json);
  }
}
