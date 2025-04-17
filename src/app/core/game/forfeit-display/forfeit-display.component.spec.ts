import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfeitDisplayComponent } from './forfeit-display.component';

describe('ForfeitDisplayComponent', () => {
  let component: ForfeitDisplayComponent;
  let fixture: ComponentFixture<ForfeitDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForfeitDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForfeitDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
