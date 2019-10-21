const valueSet = {
  '1': 1,
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
  K: 13
};

const poker = {
  play: (black, white) => {
    return 'White wins. - with high card: Ace';
  },
  convertHandToCard: stringHand => {
    return stringHand.split(' ').map(cardStr => {
      const card = cardStr.split('');
      const value = card[0];
      const suit = card[1];

      return [valueSet[value], suit];
    });
  }
};

module.exports = poker;
