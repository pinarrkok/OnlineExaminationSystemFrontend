import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Exam } from 'src/models/exam';

@Injectable()
export class ExamService {

  constructor(private http: HttpClient) { }

  getPath = "https://localhost:44350/api/exams/getlist";
  addPath = "https://localhost:44350/api/exams/add";

  getExams(courseId: number): Observable<Exam[]> {
    let newPath = this.getPath;
    if (courseId) {
      newPath += "?courseId=" + courseId;
    }
    return this.http
      .get<Exam[]>(newPath).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  addExam(exam: Exam): Observable<Exam> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Exam>(this.addPath, exam, httpOptions).pipe(
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
