import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = ''; // Replace with the actual backend URL
    return this.http.get(url);
  }
}
