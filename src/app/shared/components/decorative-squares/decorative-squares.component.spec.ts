import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorativeSquaresComponent } from './decorative-squares.component';

describe('DecorativeSquaresComponent', () => {
  let component: DecorativeSquaresComponent;
  let fixture: ComponentFixture<DecorativeSquaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorativeSquaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorativeSquaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
