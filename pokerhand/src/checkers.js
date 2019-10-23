import { sortByValue, getKeyfromValueSet } from './card';

export const highCardChecker = (blackHand, whiteHand) => {
  const sortedBlackHandValue = sortByValue(blackHand)[0][0];
  const sortedWhiteHandValue = sortByValue(whiteHand)[0][0];

  if (sortedBlackHandValue > sortedWhiteHandValue) {
    return `Black wins. - with high card: ${getKeyfromValueSet(
      sortedBlackHandValue
    )}`;
  } else {
    return `White wins. - with high card: ${getKeyfromValueSet(
      sortedWhiteHandValue
    )}`;
  }
};
