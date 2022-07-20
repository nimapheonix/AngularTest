
import { Directive, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { Student } from "../models/student";
import { StudentService } from "../services/student.service";
import { StudentComponent } from "../student/student.component";

import { StudentsComponent } from "./students.component";


@Directive({
    selector: '[routerLink]',
    host: { '(click)': 'onClick()' }
})
export class RouterLinkDirectiveStub {
    //
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;
    //
    onClick() {
        this.navigatedTo = this.linkParams;
    }
    //
}


describe('StudentsComponent (deep integration tests)', () => {
    //
    let fixture: ComponentFixture<StudentsComponent>;
    let mockStudentService : any;
    let STUDENTS !: Student[];
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
                StudentComponent,
                RouterLinkDirectiveStub
            ],
            providers: [
                { provide: StudentService, useValue: mockStudentService }

            ],
            //schemas: [NO_ERRORS_SCHEMA]
        });
        //
        fixture = TestBed.createComponent(StudentsComponent);
        //
    });
    it('should render each student as a StudentComponent', () => {
        //
        mockStudentService.getStudents.and.returnValue(of(STUDENTS));
        // run ngOnIt
        fixture.detectChanges();
        //
        const studentComponentDEs = fixture.debugElement.queryAll(By.directive(StudentComponent));
        expect(studentComponentDEs.length).toEqual(3);
        //
        expect(studentComponentDEs[0].componentInstance.student.name).toEqual('Cersei');
        expect(studentComponentDEs[1].componentInstance.student.name).toEqual('Catelyn');
        expect(studentComponentDEs[2].componentInstance.student.name).toEqual('Robb');
        //
        for (let i = 0; i < studentComponentDEs.length; i++) {
            expect(studentComponentDEs[i].componentInstance.student).toEqual(STUDENTS[i]);
        }
        //
    });
    //
    it('should call studentService.deleteStudent when the StudentComponenets delete button is clicked ', () => {
        //
        spyOn(fixture.componentInstance, 'delete');
        //
        mockStudentService.getStudents.and.returnValue(of(STUDENTS));
        fixture.detectChanges();
        const studentComponenets = fixture.debugElement.queryAll(By.directive(StudentComponent));
        //
        //studentComponenets[0].triggerEventHandler('delete',null);

        studentComponenets[0].query(By.css('button'))
            .triggerEventHandler('click', { stopPropagation: () => { } });
        //
        expect(fixture.componentInstance.delete).toHaveBeenCalledWith(STUDENTS[0]);
        //
    });
    //
    it('should add a new student to the student list when the add button is clicked', () => {
        //
        mockStudentService.getStudents.and.returnValue(of(STUDENTS));
        fixture.detectChanges();
        //
        const name = 'Hodor';
        mockStudentService.addStudent.and.returnValue(of({ id: 5, name: name, strength: 4 }));
        //
        const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
        const addButton = fixture.debugElement.queryAll(By.css('button'))[0];
        //
        inputElement.value = name;
        addButton.triggerEventHandler('click', null);
        fixture.detectChanges();
        //
        const studentText = fixture.debugElement.query(By.css('ul')).nativeElement.textContent;
        expect(studentText).toContain(name);
        //
    });
    //
    it('should have the correct route for the first student', () => {
        //
        mockStudentService.getStudents.and.returnValue(of(STUDENTS));
        fixture.detectChanges();
        //
        const studentComponents = fixture.debugElement.queryAll(By.directive(StudentComponent));
        //
        let routerLink = studentComponents[0].query(By.directive(RouterLinkDirectiveStub))
            .injector.get(RouterLinkDirectiveStub);
        //
        studentComponents[0].query(By.css('a')).triggerEventHandler('click', null);
        //
        expect(routerLink.navigatedTo).toBe('/detail/1');
        //
    });
    //
}); 