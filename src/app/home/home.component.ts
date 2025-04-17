import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AudioService } from '../shared/service/audio.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  private attentionTimer!: ReturnType<typeof setTimeout>;

  constructor(private readonly audioService: AudioService) {}

  ngOnInit(): void {
    this.startBackgroundSound();
    this.startAttentionTimer();
  }

  /** Quando mouse passa sobre botão */
  playHoverSound(): void {
    this.audioService.playConfirm();
  }

  /** Toca um som de fundo leve */
  startBackgroundSound(): void {
    this.audioService.playHeartbeat();
  }

  /** Inicia timer para piscar o botão */
  startAttentionTimer(): void {
    this.attentionTimer = setTimeout(() => {
      const startBtn = document.querySelector('.start-btn') as HTMLElement;
      if (startBtn) {
        startBtn.classList.add('attention');
      }
    }, 5000); // Espera 5 segundos para chamar atenção
  }

  /** Para tudo ao destruir o componente */
  ngOnDestroy(): void {
    this.audioService.stopAll();
    clearTimeout(this.attentionTimer);
  }
}
