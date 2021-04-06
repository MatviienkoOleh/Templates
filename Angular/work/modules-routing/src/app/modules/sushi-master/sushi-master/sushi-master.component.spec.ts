import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiMasterComponent } from './sushi-master.component';

describe('SushiMasterComponent', () => {
  let component: SushiMasterComponent;
  let fixture: ComponentFixture<SushiMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SushiMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SushiMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
