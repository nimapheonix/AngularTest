import { inject, TestBed } from "@angular/core/testing";
import { StudentService } from "./student.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageService } from "./message-service";

describe('StudentService', () => {
    //
    let mockMessageService;
    let httpTestingController: HttpTestingController;
    let service : any;
    //
    beforeEach(() => {
        //
        mockMessageService = jasmine.createSpyObj(['add']);
        //
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                StudentService,
                { provide: MessageService, useValue: mockMessageService }
            ]
        });
        //
        httpTestingController = TestBed.get(HttpTestingController);
        //
        // let msgSvc = TestBed.get(MessageService);
        // let studentSvc = TestBed.get(StudentService);
        //
        //

        service = TestBed.get(StudentService);
    });
    // inject directly instead of using declared dependencies
    // describe('getStudent injectable dependencies direct', () => {
    //     it('should call get with the correct URL', inject([StudentService, HttpTestingController], (iService: StudentService, iController: HttpTestingController) => {
    //         //
    //         iService.getStudent(4).subscribe();
    //         //
    //     }));
    // });
    //
    describe('getStudent', () => {
        it('should call get with the correct URL', () => {
            //
            service.getStudent(4).subscribe(
                (data : any) => {
                    console.log('fullfiled',data);
                }
            );
            // set expected request
            const req = httpTestingController.expectOne('api/students/4');
            // response og the request
            req.flush({ id: 4, name: 'Bran', lastName : 'Stark', gpa: 5 });
            // verify that no unexpected request maded
            httpTestingController.verify();
            //
        });
    });
    //
});
