import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserForLogin } from 'src/models/userForLogin';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
// apiye bağlanıp token göndermek
  constructor(private http: HttpClient) { }

  loggedIn = false;
  addPath = "https://localhost:44350/api/users/add";

  login(user: UserForLogin): boolean {
    if(user.email == "abc" && user.password == "abc"){
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.email);
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }

  signup(user: UserForLogin): Observable<UserForLogin> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<UserForLogin>(this.addPath, user, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = "An error occured " + error.error.message;
    } else {
      errorMessage = "An error occured systematically.";
    }
    return throwError(errorMessage);
  }
}
