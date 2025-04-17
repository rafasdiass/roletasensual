import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { TurnResult } from '../../../shared/models/turn-result.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnChanges {
  /** Histórico de resultados de cada rodada */
  @Input() history: readonly TurnResult[] = [];

  questionsAnswered = 0;
  forfeitsCompleted = 0;

  ngOnChanges(): void {
    this.calculateSummary();
  }

  private calculateSummary(): void {
    this.questionsAnswered = this.history.filter(
      (turn) => turn.type === 'question' && turn.answered
    ).length;
    this.forfeitsCompleted = this.history.filter(
      (turn) => turn.type === 'forfeit' && !turn.answered
    ).length;
  }
}
