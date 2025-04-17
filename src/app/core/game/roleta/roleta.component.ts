import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../../shared/service/audio.service';

export type Player = 'player1' | 'player2';

@Component({
  selector: 'app-roleta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roleta.component.html',
  styleUrls: ['./roleta.component.scss'],
})
export class RoletaComponent implements OnDestroy {
  @Output() playerSelected = new EventEmitter<Player>();
  displayedPlayer: Player = 'player1';
  isSpinning = false;

  private intervalId = 0;
  private timeoutId = 0;

  constructor(private readonly audioService: AudioService) {}

  spin(): void {
    if (this.isSpinning) return;

    this.isSpinning = true;
    this.audioService.playClick(); // som de clique ao iniciar

    // Alterna o texto rapidamente
    this.intervalId = window.setInterval(() => {
      this.displayedPlayer = Math.random() < 0.5 ? 'player1' : 'player2';
    }, 100);

    // Para após 2–4s
    const duration = 2000 + Math.random() * 2000;
    this.timeoutId = window.setTimeout(() => {
      clearInterval(this.intervalId);
      this.displayedPlayer = Math.random() < 0.5 ? 'player1' : 'player2';
      this.audioService.playConfirm(); // ding de confirmação
      this.playerSelected.emit(this.displayedPlayer);
      this.isSpinning = false;
    }, duration);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
  }

  get displayedLabel(): string {
    return this.displayedPlayer === 'player1' ? 'Jogador 1' : 'Jogador 2';
  }
}
