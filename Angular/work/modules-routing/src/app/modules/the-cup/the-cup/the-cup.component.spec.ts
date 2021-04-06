import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCupComponent } from './the-cup.component';

describe('TheCupComponent', () => {
  let component: TheCupComponent;
  let fixture: ComponentFixture<TheCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheCupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
