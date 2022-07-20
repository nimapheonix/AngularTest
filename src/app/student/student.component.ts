import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {

  @Input() student !: Student;
  @Output() delete = new EventEmitter();

  onDeleteClick($event:any): void {
    $event.stopPropagation();
    this.delete.next($event);
  }

}
