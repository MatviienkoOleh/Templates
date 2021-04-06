import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabibiComponent } from './habibi.component';

describe('HabibiComponent', () => {
  let component: HabibiComponent;
  let fixture: ComponentFixture<HabibiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabibiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabibiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
