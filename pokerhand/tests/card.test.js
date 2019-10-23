import {
  getValuefromValueSet,
  getKeyfromValueSet,
  sortByValue
} from '../src/card';

describe('card', () => {
  describe('getValuefromValueSet', () => {
    it('should be 14 when input is A', () => {
      const card = 'A';

      const expected = getValuefromValueSet(card);

      expect(expected).toBe(14);
    });

    it('should be 9 when input is 9', () => {
      const card = '9';

      const expected = getValuefromValueSet(card);

      expect(expected).toBe(9);
    });

    it('should be 13 when input is K', () => {
      const card = 'K';

      const expected = getValuefromValueSet(card);

      expect(expected).toBe(13);
    });
  });

  describe('getKeyfromValueSet', () => {
    it('should be A when input is 14', () => {
      const card = 14;

      const expected = getKeyfromValueSet(card);

      expect(expected).toBe('A');
    });

    it('should be 9 when input is 9', () => {
      const card = 9;

      const expected = getKeyfromValueSet(card);

      expect(expected).toBe('9');
    });

    it('should be K when input is 13', () => {
      const card = 13;

      const expected = getKeyfromValueSet(card);

      expect(expected).toBe('K');
    });
  });

  describe('sortByValue', () => {
    it('should be sorted', () => {
      const cards = [[2, 'C'], [3, 'H'], [4, 'S'], [8, 'C'], [14, 'H']];

      const expected = sortByValue(cards);

      expect(expected).toEqual([
        [14, 'H'],
        [8, 'C'],
        [4, 'S'],
        [3, 'H'],
        [2, 'C']
      ]);
    });
  });
});
