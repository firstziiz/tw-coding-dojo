import { highCardChecker } from '../src/checkers';

describe('checkers', () => {
  describe('highCardChecker', () => {
    it('should be white win when duel with 2H 3D 5S 9C KD, 2C 3H 4S 8C AH', () => {
      const actual = highCardChecker(
        [[2, 'H'], [3, 'D'], [5, 'S'], [9, 'C'], [13, 'D']],
        [[2, 'C'], [3, 'H'], [4, 'S'], [8, 'C'], [14, 'H']]
      );
      const expected = 'White wins. - with high card: A';

      expect(actual).toEqual(expected);
    });
  });
});
