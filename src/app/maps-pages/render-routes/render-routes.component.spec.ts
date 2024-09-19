import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderRoutesComponent } from './render-routes.component';

describe('RenderRoutesComponent', () => {
  let component: RenderRoutesComponent;
  let fixture: ComponentFixture<RenderRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderRoutesComponent]
    });
    fixture = TestBed.createComponent(RenderRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
