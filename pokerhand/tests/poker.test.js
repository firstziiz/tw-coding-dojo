const poker = require('../src/poker');

describe('poker', () => {
  describe('play', () => {
    it('White wins. - with high card: Ace', () => {
      const actual = poker.play('2H 3D 5S 9C KD', '2C 3H 4S 8C AH');
      const expected = 'White wins. - with high card: Ace';

      expect(actual).toEqual(expected);
    });

    it.skip('Black wins. - with full house: 4 over 2', () => {
      const actual = poker.play('2H 4S 4C 2D 4H', '2S 8S AS QS 3S');
      const expected = 'Black wins. - with full house: 4 over 2';

      expect(actual).toEqual(expected);
    });
  });

  describe('convertHandToCard', () => {
    it('convert 2H 3D 5S 9C KD to be card objects', () => {
      const actual = poker.convertHandToCard('2H 3D 5S 9C KD');
      const expected = [[2, 'H'], [3, 'D'], [5, 'S'], [9, 'C'], [13, 'D']];

      expect(actual).toEqual(expected);
    });
  });
});
