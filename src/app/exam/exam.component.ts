import { Component, OnInit } from '@angular/core';
import { Exam } from './exam';
import { AlertifyService } from '../services/alertify.service';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers: [ExamService]
})
export class ExamComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
              private examService: ExamService) { }

  title = "Sınavlar";
  filterText = "";

  exams: Exam[] = [];

  ngOnInit() {
    this.examService.getExams().subscribe(data => {
      this.exams = data
    });
  }

  goToExam(exam: Exam) {
    this.alertifyService.warning("Sınava gidilior " + exam.title);
  }

}
