import { Injectable } from '@angular/core';
import type { TurnResult, TurnType } from '../models/turn-result.model';
import type { GameConfig } from '../models/game-config.model';
import { getRandomTurnType } from '../utils/random.util';
import { ExtremeContentService } from './extreme-content.service';

@Injectable({ providedIn: 'root' })
export class GameService {
  private roundsTotal: number = 20;
  private currentRound: number = 0;
  private history: TurnResult[] = [];

  constructor(private readonly extremeContentService: ExtremeContentService) {}

  /** Inicializa o jogo com configuração opcional */
  init(config?: GameConfig): void {
    this.currentRound = 1;
    this.history = [];
    this.roundsTotal = config?.roundsTotal ?? 20;
  }

  /** Retorna informações da rodada atual */
  getRoundInfo(): { current: number; total: number } {
    return {
      current: this.currentRound,
      total: this.roundsTotal,
    };
  }

  /** Sorteia aleatoriamente o tipo do próximo turno */
  spin(): TurnType {
    return getRandomTurnType();
  }

  /** Busca o conteúdo (pergunta ou prenda) para o próximo turno */
  getNextContent(type: TurnType): string {
    if (type === 'question') {
      return this.extremeContentService.getRandomQuestion();
    } else {
      return this.extremeContentService.getRandomForfeit();
    }
  }

  /** Gera um combo especial: pergunta + prenda (usado se o jogador hesitar) */
  getComboContent(): { question: string; forfeit: string } {
    return this.extremeContentService.getRandomCombo();
  }

  /** Registra o resultado da rodada atual no histórico */
  recordResult(type: TurnType, content: string, answered: boolean): void {
    const result: TurnResult = { type, content, answered };
    this.history.push(result);
  }

  /** Avança para a próxima rodada */
  nextRound(): void {
    this.currentRound++;
  }

  /** Verifica se o jogo acabou */
  isGameOver(): boolean {
    return this.currentRound > this.roundsTotal;
  }

  /** Retorna o histórico de resultados como readonly */
  getHistory(): readonly TurnResult[] {
    return [...this.history];
  }
}
