import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionButtonsComponent } from '../option-buttons/option-buttons.component';

@Component({
  selector: 'app-question-display',
  standalone: true,
  imports: [CommonModule, OptionButtonsComponent],
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.scss'],
})
export class QuestionDisplayComponent {
  /** Texto da pergunta extrema a ser exibida */
  @Input() questionText: string = '';

  /** Emite quando o usuário escolhe “Respondo” */
  @Output() answered = new EventEmitter<void>();

  /** Emite quando o usuário escolhe “Pago Prenda” */
  @Output() forfeit = new EventEmitter<void>();

  /** Passa adiante o evento de resposta */
  onAnswered(): void {
    this.answered.emit();
  }

  /** Passa adiante o evento de prenda */
  onForfeit(): void {
    this.forfeit.emit();
  }
}
