import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayfarerDescriptionComponent } from './wayfarer-description.component';

describe('WayfarerDescriptionComponent', () => {
  let component: WayfarerDescriptionComponent;
  let fixture: ComponentFixture<WayfarerDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WayfarerDescriptionComponent]
    });
    fixture = TestBed.createComponent(WayfarerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
