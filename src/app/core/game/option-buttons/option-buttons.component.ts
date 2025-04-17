import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../../shared/service/audio.service';

@Component({
  selector: 'app-option-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-buttons.component.html',
  styleUrls: ['./option-buttons.component.scss'],
})
export class OptionButtonsComponent {
  /** Emite quando o usuário clicar em “Respondo” */
  @Output() answered = new EventEmitter<void>();

  /** Emite quando o usuário clicar em “Pago Prenda” */
  @Output() forfeit = new EventEmitter<void>();

  /** Impede múltiplos cliques */
  isUsed = false;

  constructor(private readonly audioService: AudioService) {}

  /** Handler do botão “Respondo” */
  onAnswer(): void {
    if (this.isUsed) return;
    this.isUsed = true;
    this.audioService.playHeartbeat(); // feedback sonoro
    this.answered.emit();
  }

  /** Handler do botão “Pago Prenda” */
  onForfeit(): void {
    if (this.isUsed) return;
    this.isUsed = true;
    this.audioService.playHeartbeat(); // feedback sonoro
    this.forfeit.emit();
  }
}
