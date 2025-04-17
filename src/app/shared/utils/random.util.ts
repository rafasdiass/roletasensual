import type { TurnType } from '../models/turn-result.model';

/**
 * Retorna um índice aleatório para um array.
 */
function randomIndex(length: number): number {
  return Math.floor(Math.random() * length);
}

/**
 * Retorna um item aleatório de uma lista imutável.
 */
export function getRandomItem<T>(items: readonly T[]): T {
  if (!items.length) {
    throw new Error('A lista de itens está vazia.');
  }
  return items[randomIndex(items.length)];
}

/**
 * Sorteia aleatoriamente se a próxima rodada será pergunta ou prenda.
 * Por padrão, 50% de chance para cada.
 */
export function getRandomTurnType(): TurnType {
  return Math.random() < 0.5 ? 'question' : 'forfeit';
}
