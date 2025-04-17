import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { TurnResult } from '../../../shared/models/turn-result.model';
import { AudioService } from '../../../shared/service/audio.service';

@Component({
  selector: 'app-turn-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './turn-summary.component.html',
  styleUrls: ['./turn-summary.component.scss'],
})
export class TurnSummaryComponent implements OnInit {
  /** Resultado da rodada atual */
  @Input() result!: TurnResult;

  /** Informações de rodada (atual / total) */
  @Input() currentRound = 1;
  @Input() totalRounds = 20;

  /** Emite para o AppComponent avançar ao próximo turno */
  @Output() nextTurn = new EventEmitter<void>();

  constructor(private readonly audioService: AudioService) {}

  ngOnInit(): void {
    // toca um "ding" de confirmação ao exibir o resumo
    this.audioService.playConfirm();
  }

  onNext(): void {
    // som rápido de click no botão antes de avançar
    this.audioService.playClick();
    this.nextTurn.emit();
  }
}
