const SCORE_SET = {
  0: 'love',
  1: 'fifteen',
  2: 'thirty',
  3: 'forty',
  4: 'win_game'
};

let state = {
  isDeuce: false,
  deuceState: {
    A: 0,
    B: 0
  },
  player: {
    A: 0,
    B: 0
  }
};
const initGame = () => {
  state = {
    isDeuce: false,
    deuceState: {
      A: 0,
      B: 0
    },
    player: {
      A: 0,
      B: 0
    }
  };
};

const getScore = name => {
  if (state.isDeuce) return SCORE_SET[state.deuceState[name]];

  checkDeuce();
  return SCORE_SET[state.player[name]];
};
const win = name => {
  if (state.isDeuce) state.deuceState[name] += 1;
  else {
    state.player[name] += 1;
    checkDeuce();
  }
};

const setScore = (name, score) => (state.player[name] = score);

const isDeuce = () => state.isDeuce;
const setDeuce = isDeuce => {
  state.isDeuce = isDeuce;
};
const checkDeuce = () => {
  if (
    SCORE_SET[state.player.A] == 'forty' &&
    SCORE_SET[state.player.B] == 'forty'
  ) {
    state.isDeuce = true;
  }
};

const getState = () => {
  if (state.isDeuce) {
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
  setScore,
  isDeuce,
  getState
};
