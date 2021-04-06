import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuguComponent } from './fugu.component';

describe('FuguComponent', () => {
  let component: FuguComponent;
  let fixture: ComponentFixture<FuguComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuguComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
