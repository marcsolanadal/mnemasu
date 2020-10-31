import React from "react";

import { Word } from "../models/models";

export function Card(word: Word) {
  return <div>{word.kanji}</div>;
  // return (
  //   <ul>
  //     {Object.keys(word).map((attribute: string) => (
  //       <li key={`card_${word.id}_${attribute}`}>{word[attribute]}</li>
  //     ))}
  //   </ul>
  // );
}
