import { highCardChecker } from './checkers';
import { getValuefromValueSet } from './card';

export const duel = (blackHand, whiteHand) => {
  return highCardChecker(blackHand, whiteHand);
};

export const play = (black, white) => {
  const blackHand = convertHandToCard(black);
  const whiteHand = convertHandToCard(white);

  const result = duel(blackHand, whiteHand);
  return result;
};

export const convertHandToCard = stringHand => {
  return stringHand.split(' ').map(cardStr => {
    const card = cardStr.split('');
    const value = card[0];
    const suit = card[1];

    return [getValuefromValueSet(value), suit];
  });
};
