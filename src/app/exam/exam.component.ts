import { Component, OnInit } from '@angular/core';
import { Exam } from './exam';
declare let alertify: any;

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor() { }

  title = "Sınavlar";
  filterText = "";

  exams: Exam[] = [
    {id: 1, title: "Machine Learning Midterm", information: "Midterm Exam", numberOfQuestions: 5, addedAt: new Date(), startTime: new Date("2019-08-12 07:40"), endTime: new Date("2019-08-12") },
    {id: 1, title: "Automata Midterm", information: "Midterm Exam", numberOfQuestions: 5, addedAt: new Date(), startTime: new Date("2019-08-12 07:40"), endTime: new Date("2019-08-12") },
    {id: 1, title: "File Midterm", information: "Midterm Exam", numberOfQuestions: 5, addedAt: new Date(), startTime: new Date("2019-08-12 07:40"), endTime: new Date("2019-08-12") }
  ]

  ngOnInit(): void {
  }

  goToExam(exam: Exam) {
    alertify.success("Sınava gidilior " + exam.title);
  }

}
