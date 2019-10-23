export const VALUE_SET = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
};

export const getValuefromValueSet = value => VALUE_SET[value];
export const getKeyfromValueSet = value =>
  Object.keys(VALUE_SET).find(key => VALUE_SET[key] === value);

export const sortByValue = cards =>
  cards.sort((cardA, cardB) => cardB[0] - cardA[0]);
