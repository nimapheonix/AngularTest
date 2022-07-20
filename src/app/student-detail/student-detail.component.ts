import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() student !: Student;

  constructor(
    private route : ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
   // const id = + this.route.snapshot.paramMap.get('id');

    const param=this.route.snapshot.paramMap.get('id');
    const id = param?+param:0;


    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.studentService.updateStudent(this.student)
      .subscribe(() => this.goBack());
  }

  // saveAsync(): void {
  //   //
  //   debounce(() => {
  //     //
  //     this.studentService.updateStudent(this.student)
  //       .subscribe(() => this.goBack());
  //     //
  //   }, 250, false)();
  //   //
  // }

  // savePromise(): void {
  //   //
  //   var p = new Promise<void>((resolve) => {
  //     this.studentService.updateStudent(this.student)
  //       .subscribe(() => this.goBack());
  //     resolve();
  //   });
  //   //
  // }

}


// function debounce(func : any, wait : number, immediate : boolean) {
//   var timeout : number | null;
//   return function () {
//     var context = this, args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) { func.apply(context, args); }
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) { func.apply(context, args); }
//   };
// };
