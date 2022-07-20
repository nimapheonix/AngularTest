
import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { Student } from "../models/student";
import { StudentService } from "../services/student.service";

import { StudentsComponent } from "./students.component";

describe('StudentsComponent (shallow integration tests)', () => {
    //
    let fixture: ComponentFixture<StudentsComponent>;
    let mockStudentService : any;
    let STUDENTS: Student[];;
    //
    @Component({
        selector: 'app-Student',
        template: '<div>test</div>',
    })
    class FakeStudentComponent {
        @Input() student !: Student;
        // @Output() delete = new EventEmitter();
    }
    //
    beforeEach(() => {
        //
        STUDENTS = [
            { id: 1, name: 'Cersei', lastName : 'Lannister' , gpa: 1 },
            { id: 2, name: 'Catelyn', lastName : 'Stark' , gpa: 2 },
            { id: 3, name: 'Robb', lastName : 'Stark' , gpa: 3 },
        ];
        //
        mockStudentService = jasmine.createSpyObj(['getStudents', 'addStudent', 'deleteStudent']);

        TestBed.configureTestingModule({
            declarations: [
                StudentsComponent,
                FakeStudentComponent],
            providers: [
                { provide: StudentService, useValue: mockStudentService }

            ],
            //schemas: [NO_ERRORS_SCHEMA]
        });
        //
        fixture = TestBed.createComponent(StudentsComponent);
        //
    });
    //
    it('should set students correctly from the service', () => {
        //
        mockStudentService.getStudents.and.returnValue(of(STUDENTS));
        fixture.detectChanges();
        //
        expect(fixture.componentInstance.students.length).toBe(3);
    });
    //
    it('should create one li for each student', () => {
        //
        mockStudentService.getStudents.and.returnValue(of(STUDENTS));
        fixture.detectChanges();
        //
        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
        //
    });
    //
});