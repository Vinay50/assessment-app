import { Component, OnInit } from '@angular/core';
import { AssessmentService } from './commonService/assessment.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assesment-app';
  assessments;
  constructor(public assessmentService: AssessmentService) {}
  ngOnInit() {
    this.assessmentService.getAssessments().subscribe(res => {
      this.assessments = res;
    });

  }
}
