import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationAccountComponent } from './organisation-account.component';

describe('OrganisationAccountComponent', () => {
  let component: OrganisationAccountComponent;
  let fixture: ComponentFixture<OrganisationAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
