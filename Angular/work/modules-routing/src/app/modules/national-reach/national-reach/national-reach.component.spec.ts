import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalReachComponent } from './national-reach.component';

describe('NationalReachComponent', () => {
  let component: NationalReachComponent;
  let fixture: ComponentFixture<NationalReachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalReachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalReachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
