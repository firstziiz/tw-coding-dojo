const SCORE_SET = {
  0: 'love',
  1: 'fifteen',
  2: 'thirty',
  3: 'forty',
  4: 'win_game'
};

let state = {
  isDeuce: false,
  deuce: {
    A: 0,
    B: 0
  },
  normal: {
    A: 0,
    B: 0
  }
};
const initGame = () => {
  state = {
    isDeuce: false,
    deuce: {
      A: 0,
      B: 0
    },
    normal: {
      A: 0,
      B: 0
    }
  };
};

const isDeuce = () => state.isDeuce;
const setDeuce = isDeuce => (state.isDeuce = isDeuce);

const getScore = name => {
  let gameState = 'normal';
  if (isDeuce()) gameState = 'deuce';

  checkDeuce();
  return SCORE_SET[state[gameState][name]];
};

const win = name => {
  if (isDeuce()) state['deuce'][name] += 1;
  else {
    state['normal'][name] += 1;
    checkDeuce();
  }
};

const checkDeuce = () => {
  if (
    SCORE_SET[state.normal.A] == 'forty' &&
    SCORE_SET[state.normal.B] == 'forty'
  ) {
    state.isDeuce = true;
  }
};

const getState = () => {
  if (isDeuce()) {
    if (getScore('A') === 'thirty' || getScore('B') === 'thirty') {
      if (getScore('A') === 'thirty') return `A is the winner with Deuce`;
      else return `B is the winner with Deuce`;
    } else {
      if (getScore('A') === 'fifteen') {
        return `Deuce state | Advantage A`;
      } else {
        return `Deuce state | Advantage B`;
      }
    }
  } else if (getScore('A') === 'win_game' || getScore('B') === 'win_game') {
    if (getScore('A') === 'win_game') return `A is the winner`;
    else return `B is the winner`;
  }
};

module.exports = {
  initGame,
  getScore,
  setDeuce,
  win,
  isDeuce,
  getState
};
