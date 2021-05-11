import Ball from "/src/Ball";

export function buildLevel(game, level) {
  let balls = [];

  level.forEach((row, rowIndex) => {
    row.forEach((ball, ballIndex) => {
      if (ball === 1) {
        let position = {
          x: 80 * ballIndex,
          y: 75 + 24 * rowIndex
        };
        balls.push(new Ball(game, position));
      }
    });
  });

  return balls;
}

export const level1 = [
  // [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // [1, 1, 1, 1, 1, 1, 0, 1, 1, 1]
  [0, 1, 0, 0, 0, 1, 0, 1, 0, 0]
];

export const level2 = [
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
