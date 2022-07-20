import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { StudentComponent } from "./student.component";

describe('StudentComponent (shallow tests)', () => {
    //
    let fixture: ComponentFixture<StudentComponent>;
    //
    beforeEach(() => {
        //
        TestBed.configureTestingModule({
            declarations: [StudentComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        //
        fixture = TestBed.createComponent(StudentComponent);
    });
    //
    it('should have the correct student', () => {
        fixture.componentInstance.student = { id: 1, name: 'Aemon', lastName: 'Targaryen', gpa: 5 };
        expect(fixture.componentInstance.student.name).toEqual('Aemon');
    });
    //
    it('should render the student name in an anchor tag', () => {
        fixture.componentInstance.student = { id: 1, name: 'Aemon', lastName: 'Targaryen', gpa: 5 };
        fixture.detectChanges();
        //
        //expect(fixture.debugElement.query(By.css('.test-class')));
        //expect(fixture.debugElement.query(By.css('#test_id')));
        let deA = fixture.debugElement.query(By.css('a'));
        expect(deA.nativeElement.textContent).toContain('Aemon');
        //
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('1 Aemon');
        //
    });

    //
});    
