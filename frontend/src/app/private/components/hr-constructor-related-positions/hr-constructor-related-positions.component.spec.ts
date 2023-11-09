import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrConstructorRelatedPositionsComponent } from './hr-constructor-related-positions.component';

describe('HrConstructorRelatedPositionsComponent', () => {
  let component: HrConstructorRelatedPositionsComponent;
  let fixture: ComponentFixture<HrConstructorRelatedPositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrConstructorRelatedPositionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrConstructorRelatedPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
