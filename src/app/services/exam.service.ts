import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Exam } from '../exam/exam';

@Injectable()
export class ExamService {

  constructor(private http: HttpClient) { }

  path = "https://localhost:44350/api/exams/getlist";

  getExams(): Observable<Exam[]> {
    return this.http
    .get<Exam[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if(error.error instanceof ErrorEvent) {
      errorMessage = "An error occured " + error.error.message;
    } else {
      errorMessage = "An error occured systematically.";
    }
    return throwError(errorMessage);
  }
  
}
