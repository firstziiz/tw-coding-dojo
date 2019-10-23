const tennis = require('../src/tennis');

describe('play', () => {
  beforeEach(() => {
    tennis.setScore('A', 0);
    tennis.setScore('B', 0);
  });
  it(' Get initial Game', () => {
    expect(tennis.getScore('A')).toBe(0);
    expect(tennis.getScore('B')).toBe(0);
  });

  it('Get score after A win', () => {
    tennis.win('A');
    expect(tennis.getScore('A')).toBe(15);
    expect(tennis.getScore('B')).toBe(0);
  });

  it('Get score after A win twice and B win once', () => {
    tennis.win('A');
    tennis.win('A');
    tennis.win('B');
    expect(tennis.getScore('A')).toBe(30);
    expect(tennis.getScore('B')).toBe(15);
  });

  it('Get score after A win triple', () => {
    tennis.win('A');
    tennis.win('A');
    tennis.win('A');
    expect(tennis.getScore('A')).toBe(40);
  });

  it('Get score after A and B win triple', () => {
    tennis.win('A');
    tennis.win('A');
    tennis.win('A');
    tennis.win('B');
    tennis.win('B');
    tennis.win('B');
    expect(tennis.getScore('A')).toBe(40);
    expect(tennis.getScore('B')).toBe(40);
    expect(tennis.isDeuce()).toBe(true);
  });

  it('Get score after A and B win triple', () => {
    tennis.win('A');
    tennis.win('A');
    tennis.win('B');
    tennis.win('B');
    tennis.win('B');
    expect(tennis.getScore('A')).toBe(30);
    expect(tennis.getScore('B')).toBe(40);
    expect(tennis.isDeuce()).toBe(false);
  });

  it('A is a winner', () => {
    tennis.win('A');
    tennis.win('A');
    tennis.win('A');
    tennis.win('A');
    expect(tennis.getWinner()).toBe('A');
  });
});
