const tennis = require('../src/tennis');

describe('play', () => {
  beforeEach(() => {
    tennis.initGame();
  });
  it(' Get initial Game', () => {
    expect(tennis.getScore('A')).toBe('love');
    expect(tennis.getScore('B')).toBe('love');
  });

  it('Get score after A win', () => {
    tennis.win('A');
    expect(tennis.getScore('A')).toBe('fifteen');
    expect(tennis.getScore('B')).toBe('love');
  });

  it('Get score after A win twice and B win once', () => {
    tennis.win('A');
    tennis.win('A');
    tennis.win('B');
    expect(tennis.getScore('A')).toBe('thirty');
    expect(tennis.getScore('B')).toBe('fifteen');
  });

  it('Get score after A win triple', () => {
    tennis.win('A');
    tennis.win('A');
    tennis.win('A');
    expect(tennis.getScore('A')).toBe('forty');
  });

  it('Get Deuce after A and B win ', () => {
    tennis.win('A');
    tennis.win('A');
    tennis.win('A');
    tennis.win('B');
    tennis.win('B');
    tennis.win('B');
    expect(tennis.isDeuce()).toBe(true);
  });

  it('Get score after A and B win triple', () => {
    tennis.win('A');
    tennis.win('A');
    tennis.win('B');
    tennis.win('B');
    tennis.win('B');
    expect(tennis.getScore('A')).toBe('thirty');
    expect(tennis.getScore('B')).toBe('forty');
    expect(tennis.isDeuce()).toBe(false);
  });

  it('A is a winner', () => {
    tennis.win('A');
    tennis.win('A');
    tennis.win('A');
    tennis.win('A');
    expect(tennis.getState()).toBe('A is the winner');
  });

  it('B is a winner', () => {
    tennis.win('B');
    tennis.win('B');
    tennis.win('B');
    tennis.win('B');
    expect(tennis.getState()).toBe('B is the winner');
  });

  it('A has 1 score in deuce state', () => {
    tennis.win('A');
    tennis.win('A');
    tennis.win('A');
    tennis.win('B');
    tennis.win('B');
    tennis.win('B');
    tennis.win('A');
    expect(tennis.getState()).toBe('Deuce state | Advantage A');
  });

  it('A is the winner in deuce state', () => {
    tennis.win('A');
    tennis.win('A');
    tennis.win('A');
    tennis.win('B');
    tennis.win('B');
    tennis.win('B');
    tennis.win('A');
    tennis.win('A');
    expect(tennis.getState()).toBe('A is the winner with Deuce');
  });
});
