import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Home from './models/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = 'http://localhost:8080/homebuyer/homes';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Home[]>{
    return this.httpClient.get<Home[]>(this.url);  // This creates an OBSERVABLE, which is a stream of data from the back end
  }

  save(home: Home): Observable<Home>{
    return this.httpClient.post<Home>(this.url, home);
  }


}
