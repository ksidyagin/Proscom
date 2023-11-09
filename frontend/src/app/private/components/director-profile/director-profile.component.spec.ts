import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorProfileComponent } from './director-profile.component';

describe('DirectorProfileComponent', () => {
  let component: DirectorProfileComponent;
  let fixture: ComponentFixture<DirectorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
