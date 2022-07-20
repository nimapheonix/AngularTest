import { of } from "rxjs";
import { Student } from "../models/student";
import { StudentsComponent } from "./students.component";

describe('StudentsComponent', () => {
    let component: StudentsComponent;
    let STUDENTS !: Student[];
    let mockStudentService : any;
    //
    beforeEach(() => {
        STUDENTS = [
            { id: 1, name: 'Cersei', lastName : 'Lannister' , gpa: 1 },
            { id: 2, name: 'Catelyn', lastName : 'Stark' , gpa: 2 },
            { id: 3, name: 'Robb', lastName : 'Stark' , gpa: 3 },
        ];
        //
        mockStudentService = jasmine.createSpyObj(['getStudents', 'addStudent', 'deleteStudent']);
        //
        component = new StudentsComponent(mockStudentService);
        //
    });
    //
    describe('delete', () => {
        it('should remove the indicated student from the students list', () => {
            //
            mockStudentService.deleteStudent.and.returnValue(of(true));
            //
            component.students = STUDENTS;
            //
            component.delete(STUDENTS[2]);
            //
            expect(component.students.length).toBe(2);
        });
        // disable test add x
        it('should call deleteStudent', () => {
            //
            mockStudentService.deleteStudent.and.returnValue(of(true));
            //
            component.students = STUDENTS;
            //
            component.delete(STUDENTS[2]);
            //
            expect(mockStudentService.deleteStudent).toHaveBeenCalled();
            //
        });
        //
        it('should call deleteStudent with', () => {
            //
            mockStudentService.deleteStudent.and.returnValue(of(true));
            //
            component.students = STUDENTS;
            //
            component.delete(STUDENTS[2]);
            //
            expect(mockStudentService.deleteStudent).toHaveBeenCalledWith(STUDENTS[2]);
            //
        });

    });
    //

});   