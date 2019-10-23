const player = {
  A: 0,
  B: 0
};

const tennis = {
  getScore: name => player[name],
  win: name => {
    if (player[name] === 30) {
      player[name] += 10;
    } else player[name] += 15;
  },
  setScore: (name, score) => (player[name] = score),
  isDeuce: () => player.A == 40 && player.B == 40,
  getWinner: () => {
    if (player.A > player.B) return 'A';
    else return 'B';
  }
};

module.exports = tennis;
