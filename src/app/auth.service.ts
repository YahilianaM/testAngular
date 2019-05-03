import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";


@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loggedInStatus = false
  constructor(private htttp: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

    setLoggedIn(value: boolean) {
      this.loggedInStatus = value
    }
  
    get isLoggedIn() {
      return this.loggedInStatus
    }

  

  loginUser(user: string, pass: string): Observable<any> {
    const url_api = "https://dev.tuten.cl/TutenREST/#!/user/login";
    return this.htttp
      .post<any>(
        url_api,
        { user, pass },
        { headers: this.headers }
      )
      .pipe(map(data => {
        this.setToken(data.token);
      }));
  }

  

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  

}























