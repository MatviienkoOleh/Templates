import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationFormRegistrationComponent } from './organisation-form-registration.component';

describe('OrganisationFormRegistrationComponent', () => {
  let component: OrganisationFormRegistrationComponent;
  let fixture: ComponentFixture<OrganisationFormRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationFormRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationFormRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
