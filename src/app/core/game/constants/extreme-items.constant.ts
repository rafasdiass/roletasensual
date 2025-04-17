/**
 * EXTREME SEXUAL CONTENT — GERADOR DINÂMICO 2.0
 * by Ayla AI
 * Focado em conquistar desejo, elevar tensão sexual e maximizar o envolvimento emocional.
 */

///////////////////// VARIÁVEIS BASE /////////////////////

const BODY_PARTS = [
  'pescoço',
  'orelha',
  'lábios',
  'clavícula',
  'seios',
  'abdômen',
  'cintura',
  'parte interna das coxas',
  'nuca',
  'ombros',
  'costas',
  'virilha',
  'joelhos',
  'pés',
  'pulsos',
  'dedos',
  'boca',
  'cabelos',
  'quadris',
  'parte de trás da coxa',
];

const ACTIONS = [
  'beijar',
  'lamber',
  'mordiscar',
  'acariciar',
  'soprar',
  'arranhar',
  'massagear',
  'esfregar',
  'deslizar a língua',
  'apertar',
];

const COMMANDS = [
  'não resistir',
  'gemer meu nome',
  'implorar por mais',
  'obedecer sem questionar',
  'perder o controle',
  'gritar baixinho',
  'tremer de prazer',
  'oferecer seu corpo',
  'delirar',
];

const SENSATIONS = [
  'arrepio',
  'calor subindo',
  'pele tremendo',
  'respiração falha',
  'gemidos incontroláveis',
  'suor quente',
  'coração acelerado',
  'tesão crescendo',
];

const PLACES = [
  'no carro',
  'no elevador',
  'atrás da porta',
  'na varanda',
  'embaixo da mesa',
  'no banheiro de um restaurante',
  'em um parque escuro',
  'no cinema vazio',
  'na praia deserta',
  'numa sacada de hotel',
];

const CONTACT_TYPES = [
  'língua',
  'lábios',
  'dedos',
  'unhas',
  'respiração quente',
];

const INTENSITIES = [
  'devagar',
  'com força',
  'de forma provocante',
  'de maneira quase cruel',
  'com ternura e violência misturadas',
];

const EMOTIONAL_LANGUAGES = [
  'me pedindo por mais',
  'sussurrando palavras sujas',
  'olhando em desespero',
  'me seduzindo com o olhar',
];

///////////////////// GERADORES INTELIGENTES /////////////////////

function randomItem(array: readonly string[]): string {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function generateQuestion(): string {
  const templates = [
    `Descreva como você ${randomItem(ACTIONS)} meu ${randomItem(
      BODY_PARTS
    )} até causar ${randomItem(SENSATIONS)}.`,
    `Imagine ${randomItem(PLACES)}. Como faria para me ${randomItem(
      ACTIONS
    )} usando apenas sua ${randomItem(CONTACT_TYPES)}?`,
    `Explique como me faria ${randomItem(
      COMMANDS
    )} com seu toque no meu ${randomItem(BODY_PARTS)}.`,
    `Conte como deslizar sua ${randomItem(CONTACT_TYPES)} no meu ${randomItem(
      BODY_PARTS
    )} me faria ${randomItem(EMOTIONAL_LANGUAGES)}.`,
    `Descreva uma cena onde sua ${randomItem(CONTACT_TYPES)} e meu ${randomItem(
      BODY_PARTS
    )} se encontram ${randomItem(INTENSITIES)}.`,
    `Se estivesse ${randomItem(PLACES)}, como provocaria meu ${randomItem(
      BODY_PARTS
    )} até eu perder o controle?`,
    `Qual movimento faria em meu ${randomItem(
      BODY_PARTS
    )} para arrancar de mim um ${randomItem(SENSATIONS)} inevitável?`,
    `Fale como usaria seu ${randomItem(CONTACT_TYPES)} no meu ${randomItem(
      BODY_PARTS
    )} para fazer minha pele pedir socorro.`,
    `Me diga uma ordem erótica envolvendo meu ${randomItem(
      BODY_PARTS
    )} que me faria ${randomItem(COMMANDS)}.`,
    `Descreva uma sequência de beijos começando pelo meu ${randomItem(
      BODY_PARTS
    )} e terminando em suspiros de ${randomItem(SENSATIONS)}.`,
  ];
  return randomItem(templates);
}

function generateForfeit(): string {
  const templates = [
    `Beije meu ${randomItem(BODY_PARTS)} ${randomItem(
      INTENSITIES
    )} até que eu ${randomItem(COMMANDS)}.`,
    `Use sua ${randomItem(CONTACT_TYPES)} para explorar meu ${randomItem(
      BODY_PARTS
    )} durante 60 segundos.`,
    `Mordisque meu ${randomItem(
      BODY_PARTS
    )} enquanto sussurra que sou seu/sua.`,
    `Faça um roleplay onde explora meu ${randomItem(
      BODY_PARTS
    )} no ${randomItem(PLACES)}.`,
    `Durante 1 minuto, deslize sua ${randomItem(
      CONTACT_TYPES
    )} no meu ${randomItem(BODY_PARTS)}, alternando ${randomItem(
      INTENSITIES
    )}.`,
    `Finja que somos estranhos ${randomItem(
      PLACES
    )} e provoque meu ${randomItem(BODY_PARTS)} secretamente.`,
    `Passe seus ${randomItem(CONTACT_TYPES)} pela linha do meu ${randomItem(
      BODY_PARTS
    )} e descreva o que sente.`,
    `Ordene-me a expor meu ${randomItem(
      BODY_PARTS
    )} para receber seu toque ${randomItem(INTENSITIES)}.`,
    `Crie uma história onde seu ${randomItem(
      CONTACT_TYPES
    )} descobre lentamente o caminho pelo meu ${randomItem(BODY_PARTS)}.`,
    `Explore meu ${randomItem(
      BODY_PARTS
    )} apenas com a ponta dos seus ${randomItem(
      CONTACT_TYPES
    )} e faça-me ${randomItem(COMMANDS)}.`,
  ];
  return randomItem(templates);
}

///////////////////// EXPORTAÇÃO /////////////////////

export const EXTREME_QUESTIONS: readonly string[] = Array.from(
  { length: 200 },
  () => generateQuestion()
);

export const EXTREME_FORFEITS: readonly string[] = Array.from(
  { length: 200 },
  () => generateForfeit()
);
