import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ExamService } from 'src/app/services/exam.service';
import { Exam } from 'src/models/exam';

@Component({
  selector: 'app-exam-add',
  templateUrl: './exam-add.component.html',
  styleUrls: ['./exam-add.component.css'],
  providers: [ExamService]
})
export class ExamAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private examService: ExamService,
              private alertifyService: AlertifyService) { }

  examAddForm: FormGroup;
  exam: Exam = new Exam();

  createExamAddForm() {
    this.examAddForm = this.formBuilder.group({
      title: ["", Validators.required],
      information: ["", Validators.required],
      numberOfQuestions: ["", Validators.required],
      startTime: ["", Validators.required],
      endTime: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.createExamAddForm();
  }

  addExam() {
    if (this.examAddForm.valid) {
      console.log(this.examAddForm)
      this.exam = Object.assign({}, this.examAddForm.value)
    }
    this.examService.addExam(this.exam).subscribe(data => {
      this.alertifyService.success(data.title + "added successfully.")
    });
  }

}
