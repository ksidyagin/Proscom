import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeStructureComponent } from './employee-structure.component';

describe('EmployeeStructureComponent', () => {
  let component: EmployeeStructureComponent;
  let fixture: ComponentFixture<EmployeeStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
