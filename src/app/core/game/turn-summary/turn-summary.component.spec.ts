import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnSummaryComponent } from './turn-summary.component';

describe('TurnSummaryComponent', () => {
  let component: TurnSummaryComponent;
  let fixture: ComponentFixture<TurnSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
