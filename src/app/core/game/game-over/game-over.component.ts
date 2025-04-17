import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-over',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss'],
})
export class GameOverComponent {
  /** Emite para reiniciar o jogo imediatamente */
  @Output() restartGame = new EventEmitter<void>();

  /** Emite para voltar à tela inicial sem iniciar rodada */
  @Output() backToStart = new EventEmitter<void>();

  onRestart(): void {
    this.restartGame.emit();
  }

  onBack(): void {
    this.backToStart.emit();
  }
}
