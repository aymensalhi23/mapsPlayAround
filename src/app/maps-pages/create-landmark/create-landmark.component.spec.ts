import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLandmarkComponent } from './create-landmark.component';

describe('CreateLandmarkComponent', () => {
  let component: CreateLandmarkComponent;
  let fixture: ComponentFixture<CreateLandmarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLandmarkComponent]
    });
    fixture = TestBed.createComponent(CreateLandmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
