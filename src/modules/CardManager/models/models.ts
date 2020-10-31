export interface Mnemonic {
  id: string;
  text: string;
  quality: number;
  reviews: number;
}

export interface Radical {
  id: string;
  keyword: string;
  mnemonic: Mnemonic;
}

enum Pitch {
  Atamadaka,
  Nakadaka,
  Odaka,
  Heiban
}

export interface Kanji {
  id: string;
  character: string;
  radicals: Radical[];
  mnemonic: Mnemonic;
}

export interface Tag {
  name: string;
}

export interface Word {
  id: string;
  text: string;
  hiragana: string;
  kanji: string[];
  mnemonic: Mnemonic;
  english: string[];
  pitchAccent: Pitch;
  pictureUrl: string;
  tags: Tag[];
}
