import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderVehiclesComponent } from './render-vehicles.component';

describe('RenderVehiclesComponent', () => {
  let component: RenderVehiclesComponent;
  let fixture: ComponentFixture<RenderVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderVehiclesComponent]
    });
    fixture = TestBed.createComponent(RenderVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
