import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrWorkersComponent } from './hr-workers.component';

describe('HrWorkersComponent', () => {
  let component: HrWorkersComponent;
  let fixture: ComponentFixture<HrWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrWorkersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
