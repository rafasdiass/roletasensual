import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { RoletaComponent } from './roleta/roleta.component';
import { PlayerChoiceComponent } from './player-choice/player-choice.component';
import { QuestionDisplayComponent } from './question-display/question-display.component';
import { ForfeitDisplayComponent } from './forfeit-display/forfeit-display.component';
import { TurnSummaryComponent } from './turn-summary/turn-summary.component';
import { HistoryComponent } from './history/history.component';
import { GameOverComponent } from './game-over/game-over.component';

import { GameService } from '../../shared/service/game.service';
import { AudioService } from '../../shared/service/audio.service';

import type { Player } from './roleta/roleta.component';
import type { TurnResult } from '../../shared/models/turn-result.model';

type Stage =
  | 'spin'
  | 'choice'
  | 'question'
  | 'forfeit'
  | 'summary'
  | 'gameOver';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    RoletaComponent,
    PlayerChoiceComponent,
    QuestionDisplayComponent,
    ForfeitDisplayComponent,
    TurnSummaryComponent,
    HistoryComponent,
    GameOverComponent,
  ],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  stage: Stage = 'spin';
  selectedPlayer!: Player;
  questionText = '';
  forfeitText = '';
  summaryResult!: TurnResult;
  history: readonly TurnResult[] = [];
  currentRound = 0;
  totalRounds = 0;

  constructor(
    private readonly gameService: GameService,
    private readonly audioService: AudioService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.startGame();
  }

  private startGame(): void {
    this.gameService.init();
    const { current, total } = this.gameService.getRoundInfo();
    this.currentRound = current;
    this.totalRounds = total;
    this.history = this.gameService.getHistory();
    this.stage = 'spin';
  }

  handlePlayerSelected(player: Player): void {
    this.selectedPlayer = player;
    this.stage = 'choice';
    this.audioService.playConfirm();
  }

  handleChoiceQuestion(): void {
    this.questionText = this.gameService.getNextContent('question');
    this.audioService.playHeartbeat();
    this.stage = 'question';
  }

  handleChoiceForfeit(): void {
    this.forfeitText = this.gameService.getNextContent('forfeit');
    this.audioService.playConfirm();
    this.stage = 'forfeit';
  }

  handleAnswer(): void {
    this.gameService.recordResult('question', this.questionText, true);
    this.summaryResult = {
      type: 'question',
      content: this.questionText,
      answered: true,
    };
    this.prepareSummary();
  }

  handleForfeitComplete(): void {
    this.gameService.recordResult('forfeit', this.forfeitText, false);
    this.summaryResult = {
      type: 'forfeit',
      content: this.forfeitText,
      answered: false,
    };
    this.prepareSummary();
  }

  /** NOVO: Tratamento para hesitação */
  handleHesitation(): void {
    const combo = this.gameService.getComboContent();

    // Primeiro registra a pergunta não respondida
    this.gameService.recordResult('question', combo.question, false);

    // Depois registra a prenda obrigatória
    this.gameService.recordResult('forfeit', combo.forfeit, false);

    // Atualiza histórico
    this.history = this.gameService.getHistory();

    this.audioService.playConfirm();
    this.stage = 'summary';
  }

  private prepareSummary(): void {
    this.history = this.gameService.getHistory();
    this.audioService.playConfirm();
    this.stage = 'summary';
  }

  handleNextTurn(): void {
    this.gameService.nextRound();
    if (this.gameService.isGameOver()) {
      this.stage = 'gameOver';
    } else {
      const { current } = this.gameService.getRoundInfo();
      this.currentRound = current;
      this.stage = 'spin';
    }
  }

  handleRestart(): void {
    this.startGame();
  }

  handleBackToStart(): void {
    this.router.navigateByUrl('/');
  }
}
