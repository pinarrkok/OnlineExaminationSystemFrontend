import { Component, OnInit } from '@angular/core';
import { Exam } from 'src//models/exam';
import { AlertifyService } from '../services/alertify.service';
import { ExamService } from '../services/exam.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers: [ExamService]
})
export class ExamComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
              private examService: ExamService,
              private activatedRoute: ActivatedRoute) { }

  title = "Sınavlar";
  filterText = "";

  exams: Exam[] = [];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.examService.getExams(params["courseId"]).subscribe(data => {
        this.exams = data
      });
    });
  }

  goToExam(exam: Exam) {
    this.alertifyService.warning("Sınava gidilior " + exam.title);
  }

}
