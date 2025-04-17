export type TurnType = 'question' | 'forfeit';

export interface TurnResult {
  /** 'question' = pergunta; 'forfeit' = prenda */
  readonly type: TurnType;
  /** texto da pergunta ou da prenda */
  readonly content: string;
  /** true se respondeu, false se pagou prenda */
  readonly answered: boolean;
}
