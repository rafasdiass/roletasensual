import { Injectable } from '@angular/core';

type Intensity = 'leve' | 'medio' | 'extremo';

@Injectable({ providedIn: 'root' })
export class ExtremeContentService {
  private usedQuestions = new Set<string>();
  private usedForfeits = new Set<string>();

  private turnCount = 0; // Controla o número de turnos jogados
  private intensityCycle: Intensity[] = [
    'leve',
    'medio',
    'leve',
    'extremo',
    'medio',
    'leve',
  ];

  /** Perguntas organizadas por intensidade */
  private readonly questions: Record<Intensity, readonly string[]> = {
    leve: [
      'Onde em meu corpo você gostaria de receber meu próximo beijo?',
      'Qual parte minha te hipnotiza sem que eu perceba?',
      'Com que olhar você me seduziria se eu estivesse distraído(a)?',
      'Descreva um carinho inocente que na verdade te excita profundamente.',
      'Se eu sussurrasse seu nome bem baixinho agora, o que faria?',
    ],
    medio: [
      'Que toque no meu corpo te faria perder o controle?',
      'Como você começaria um beijo para me deixar implorando por mais?',
      'Conte um desejo secreto envolvendo nossos corpos bem próximos.',
      'Descreva como você tomaria minha boca com fome.',
      'Qual gemido meu você sonha ouvir bem perto do seu ouvido?',
    ],
    extremo: [
      'Se pudesse me dominar agora, o que faria primeiro com minhas mãos presas?',
      'Descreva como marcaria minha pele com sua boca sem piedade.',
      'Qual comando sexual você me daria sussurrando com sua respiração quente?',
      'Conte como me faria implorar por cada toque seu.',
      'Se eu me rendesse completamente a você, o que me obrigaria a fazer?',
    ],
  };

  /** Prendas organizadas por intensidade */
  private readonly forfeits: Record<Intensity, readonly string[]> = {
    leve: [
      'Toque meu rosto com a ponta dos dedos enquanto me olha fixamente.',
      'Beije a parte interna do meu pulso como se fosse um segredo.',
      'Aproxime sua boca do meu pescoço e apenas sopre, sem tocar.',
      'Encoste suas testas na minha e feche os olhos por 10 segundos.',
      'Sorria para mim de um jeito que só eu entenda.',
    ],
    medio: [
      'Sussurre algo erótico no meu ouvido sem usar as mãos.',
      'Passe suas unhas suavemente pela minha cintura por 30 segundos.',
      'Beije a curva da minha nuca como se quisesse me possuir.',
      'Segure meu quadril e pressione seu corpo contra o meu lentamente.',
      'Provoque meu pescoço com mordidas suaves alternadas com beijos molhados.',
    ],
    extremo: [
      'Aperte minha cintura forte enquanto lambe meu lóbulo da orelha.',
      'Deslize sua língua pelo meu pescoço e morda minha clavícula com desejo.',
      'Comande que eu me ajoelhe diante de você, apenas com o olhar.',
      'Segure meu rosto, olhe nos meus olhos e me obrigue a um beijo selvagem.',
      'Descreva em voz baixa todas as coisas sujas que quer fazer comigo.',
    ],
  };

  /** Escolhe a intensidade atual com base no número do turno */
  private getCurrentIntensity(): Intensity {
    const index = this.turnCount % this.intensityCycle.length;
    return this.intensityCycle[index];
  }

  /** Gera pergunta nova automaticamente (com variação de intensidade) */
  getRandomQuestion(): string {
    const intensity = this.getCurrentIntensity();
    const options = this.questions[intensity].filter(
      (q) => !this.usedQuestions.has(q)
    );

    if (options.length === 0) {
      this.usedQuestions.clear();
      return this.getRandomQuestion();
    }

    const selected = this.random(options);
    this.usedQuestions.add(selected);
    this.turnCount++;
    return selected;
  }

  /** Gera prenda nova automaticamente (com variação de intensidade) */
  getRandomForfeit(): string {
    const intensity = this.getCurrentIntensity();
    const options = this.forfeits[intensity].filter(
      (f) => !this.usedForfeits.has(f)
    );

    if (options.length === 0) {
      this.usedForfeits.clear();
      return this.getRandomForfeit();
    }

    const selected = this.random(options);
    this.usedForfeits.add(selected);
    this.turnCount++;
    return selected;
  }

  /** Retorna um combo de pergunta + prenda (para hesitação) */
  getRandomCombo(): { question: string; forfeit: string } {
    const question = this.getRandomQuestion();
    const forfeit = this.getRandomForfeit();
    return { question, forfeit };
  }

  /** Função utilitária para pegar item aleatório */
  private random<T>(items: readonly T[]): T {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
  }
}
