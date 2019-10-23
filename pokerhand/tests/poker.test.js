import { play, convertHandToCard, duel } from '../src/poker';

describe('poker', () => {
  describe('play', () => {
    it('White wins. - with high card: A', () => {
      const actual = play('2H 3D 5S 9C KD', '2C 3H 4S 8C AH');
      const expected = 'White wins. - with high card: A';

      expect(actual).toEqual(expected);
    });

    it.skip('Black wins. - with full house: 4 over 2', () => {
      const actual = play('2H 4S 4C 2D 4H', '2S 8S AS QS 3S');
      const expected = 'Black wins. - with full house: 4 over 2';

      expect(actual).toEqual(expected);
    });
  });

  describe('convertHandToCard', () => {
    it('convert 2H 3D 5S 9C KD to be card objects', () => {
      const actual = convertHandToCard('2H 3D 5S 9C KD');
      const expected = [[2, 'H'], [3, 'D'], [5, 'S'], [9, 'C'], [13, 'D']];

      expect(actual).toEqual(expected);
    });
    it('convert 2C 3H 4S 8C AH to be card objects', () => {
      const actual = convertHandToCard('2C 3H 4S 8C AH');
      const expected = [[2, 'C'], [3, 'H'], [4, 'S'], [8, 'C'], [14, 'H']];

      expect(actual).toEqual(expected);
    });
  });

  describe('deul', () => {
    it('should be white win when duel with 2H 3D 5S 9C KD, 2C 3H 4S 8C AH', () => {
      const actual = duel(
        [[2, 'H'], [3, 'D'], [5, 'S'], [9, 'C'], [13, 'D']],
        [[2, 'C'], [3, 'H'], [4, 'S'], [8, 'C'], [14, 'H']]
      );
      const expected = 'White wins. - with high card: A';

      expect(actual).toEqual(expected);
    });
  });
});
