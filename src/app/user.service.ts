import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";

interface myData {
  message: string,
  success: boolean
}

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  getSomeData() {
    return this.http.get<myData>('/api/database.php')
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('/api/isloggedin.php')
  }

  logout() {
    return this.http.get<logoutStatus>('/api/logout.php')
  }

  getDataUser(): Observable<any> {
    let token=localStorage.getItem('accessToken');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', token); 
    const url_api = "https://dev.tuten.cl/TutenREST/rest/#!/user/bookings";
    return this.http
      .get<any>(
        url_api,
  
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

}
