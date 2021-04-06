import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerKingComponent } from './burger-king.component';

describe('BurgerKingComponent', () => {
  let component: BurgerKingComponent;
  let fixture: ComponentFixture<BurgerKingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerKingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerKingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
