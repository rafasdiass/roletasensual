import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { TurnResult } from '../../../shared/models/turn-result.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  /** Histórico de resultados de cada rodada */
  @Input() history: readonly TurnResult[] = [];
}
