import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionButtonsComponent } from '../option-buttons/option-buttons.component';
import type { Player } from '../roleta/roleta.component';
import { AudioService } from '../../../shared/service/audio.service';

@Component({
  selector: 'app-player-choice',
  standalone: true,
  imports: [CommonModule, OptionButtonsComponent],
  templateUrl: './player-choice.component.html',
  styleUrls: ['./player-choice.component.scss'],
})
export class PlayerChoiceComponent implements OnInit {
  /** Quem foi sorteado na roleta */
  @Input() player: Player = 'player1';

  /** Emite quando escolher "pergunta" */
  @Output() chooseQuestion = new EventEmitter<void>();

  /** Emite quando escolher "prenda" */
  @Output() chooseForfeit = new EventEmitter<void>();

  constructor(private readonly audioService: AudioService) {}

  ngOnInit(): void {
    // Som de "aparecimento" do prompt
    this.audioService.playConfirm();
  }

  /** Label legível para exibição */
  get label(): string {
    return this.player === 'player1' ? 'Jogador 1' : 'Jogador 2';
  }

  /** Quando escolhe "pergunta" */
  onQuestion(): void {
    this.audioService.playClick();
    this.chooseQuestion.emit();
  }

  /** Quando escolhe "prenda" */
  onForfeit(): void {
    this.audioService.playClick();
    this.chooseForfeit.emit();
  }
}
