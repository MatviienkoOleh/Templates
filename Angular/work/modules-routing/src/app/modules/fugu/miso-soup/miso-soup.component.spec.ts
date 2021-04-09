import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisoSoupComponent } from './miso-soup.component';

describe('MisoSoupComponent', () => {
  let component: MisoSoupComponent;
  let fixture: ComponentFixture<MisoSoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisoSoupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisoSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
