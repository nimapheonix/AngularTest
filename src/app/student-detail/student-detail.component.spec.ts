import { async, ComponentFixture, fakeAsync, flush, TestBed, tick } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { StudentService } from "../services/student.service";
import { StudentDetailComponent } from "./student-detail.component";
import { Location } from '@angular/common';
import { of } from "rxjs";
import { FormsModule } from "@angular/forms";

describe('StudentDetailComponent', () => {
    //
    let fixture: ComponentFixture<StudentDetailComponent>;
    let mockActivatedRoute, mockStudentService: any, mockLocation;
    //
    beforeEach(() => {
        //
        mockStudentService = jasmine.createSpyObj(['getStudent', 'updateStudent']);
        mockLocation = jasmine.createSpyObj(['back']);
        mockActivatedRoute = {
            snapshot: { paramMap: { get: () => { return '3'; } } }
        };
        //
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [StudentDetailComponent],
            providers: [
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
                { provide: StudentService, useValue: mockStudentService },
                { provide: Location, useValue: mockLocation },
            ]
        });
        //
        fixture = TestBed.createComponent(StudentDetailComponent)
        //
        mockStudentService.getStudent.and.returnValue(of({ id: 3, name: 'Benjin', lastName: 'Stark', gpa: 5 }));
        //
    });
    //
    it('should render student name in a legend tag', () => {
        //
        fixture.detectChanges();
        //
        expect(fixture.nativeElement.querySelector('legend').textContent).toContain('BENJIN');
        //
    });
    //
    it('should call updateStudent when save is called ', fakeAsync(() => {
        //
        mockStudentService.updateStudent.and.returnValue(of({}));
        fixture.detectChanges();
        //
        fixture.componentInstance.save();
        //
        //tick(250);
        // or call flush
        flush();
        //
        expect(mockStudentService.updateStudent).toHaveBeenCalled();
        //
    }));
    //
    // it('should call updateStudent when saveAsync is called with timeout', (done) => {
    //     //
    //     mockStudentService.updateStudent.and.returnValue(of({}));
    //     fixture.detectChanges();
    //     //
    //     fixture.componentInstance.saveAsync();
    //     //
    //     setTimeout(() => {
    //         expect(mockStudentService.updateStudent).toHaveBeenCalled();
    //         done();
    //     }, 300);
    //     //
    // });
    // // //

    // it('should call updateStudent when saveAsync is called with promise', async(() => {
    //     //
    //     mockStudentService.updateStudent.and.returnValue(of({}));
    //     fixture.detectChanges();
    //     //
    //     fixture.componentInstance.savePromise();
    //     //
    //     fixture.whenStable().then(() => {
    //         expect(mockStudentService.updateStudent).toHaveBeenCalled();
    //     });
    //     //
    // }));
    //
});