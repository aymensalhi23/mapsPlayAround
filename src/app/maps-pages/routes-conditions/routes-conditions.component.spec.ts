import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesConditionsComponent } from './routes-conditions.component';

describe('RoutesConditionsComponent', () => {
  let component: RoutesConditionsComponent;
  let fixture: ComponentFixture<RoutesConditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutesConditionsComponent]
    });
    fixture = TestBed.createComponent(RoutesConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
