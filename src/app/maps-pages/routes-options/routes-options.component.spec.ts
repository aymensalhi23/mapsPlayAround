import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesOptionsComponent } from './routes-options.component';

describe('RoutesOptionsComponent', () => {
  let component: RoutesOptionsComponent;
  let fixture: ComponentFixture<RoutesOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutesOptionsComponent]
    });
    fixture = TestBed.createComponent(RoutesOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
