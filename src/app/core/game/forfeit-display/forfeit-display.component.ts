import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forfeit-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forfeit-display.component.html',
  styleUrls: ['./forfeit-display.component.scss'],
})
export class ForfeitDisplayComponent implements OnInit, OnDestroy {
  /** Texto do desafio extremo */
  @Input() forfeitText = '';

  /** Duração do countdown em segundos */
  @Input() durationSeconds = 30;

  /** Emite quando o usuário clicar em “Concluído” */
  @Output() completed = new EventEmitter<void>();

  remainingTime!: number;
  isCountdownOver = false;
  private intervalId = 0;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private startCountdown(): void {
    this.remainingTime = this.durationSeconds;
    this.isCountdownOver = false;
    this.intervalId = window.setInterval(() => {
      if (this.remainingTime > 1) {
        this.remainingTime--;
      } else {
        this.remainingTime = 0;
        this.isCountdownOver = true;
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  onCompleteClick(): void {
    if (this.isCountdownOver) {
      this.completed.emit();
    }
  }
}
