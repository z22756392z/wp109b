import Player from "/src/Player";

import InputHandler from "/src/Input";

import Ball from "/src/Ball";

import { buildLevel, level1, level2 } from "/src/Level";

const GAMESTATE = {
  PAUSE: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;

    this.gameHeight = gameHeight;

    this.gameState = GAMESTATE.MENU;

    this.levels = [level1, level2];
    this.currentLevel = 1;

    this.player = new Player(this);

    this.balls = [];

    this.gameObjects = [];
    this.lives = 3;

    this.livesImage = document.getElementById("img_heart");

    new InputHandler(this.player, this);
  }

  init() {
    if (
      this.gameState === GAMESTATE.RUNNING ||
      this.gameState === GAMESTATE.PAUSE
    )
      return;

    this.balls = buildLevel(this, this.levels[this.currentLevel]);
    this.player.reset();
    this.lives = 3;
    this.gameObject = [this.player, ...this.balls];

    this.gameState = GAMESTATE.RUNNING;
  }

  togglePause() {
    if (this.gameState === GAMESTATE.PAUSE) {
      this.gameState = GAMESTATE.RUNNING;
    } else {
      this.gameState = GAMESTATE.PAUSE;
    }
  }

  update(deltaTime) {
    if (this.lives <= 0) {
      this.gameState = GAMESTATE.GAMEOVER;
    }

    if (
      this.gameState === GAMESTATE.PAUSE ||
      this.gameState === GAMESTATE.MENU ||
      this.gameState === GAMESTATE.GAMEOVER
    )
      return;

    this.gameObject.forEach((Object) => Object.update(deltaTime));

    this.gameObject = this.gameObject.filter((Object) => !Object.markForDel);

    if (this.player.heart === 0) this.gameState = GAMESTATE.GAMEOVER;
  }

  draw(ctx) {
    if (this.gameState === GAMESTATE.MENU) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);

      ctx.fillStyle = "rgba(0,0,0,1)";

      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(
        "Press SPACEBAR To Start",
        this.gameWidth / 2,
        this.gameHeight / 2
      );
    } else {
      this.gameObject.forEach((Object) => Object.draw(ctx));

      for (let i = 0; i < this.lives; i++) {
        ctx.drawImage(this.livesImage, 10 + i * 20, 10, 16, 16);
      }

      if (this.gameState === GAMESTATE.PAUSE) {
        ctx.rect(0, 0, this.gameWidth, this.gameHeight);

        ctx.fillStyle = "rgba(0,0,0,0.5)";

        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("PAUSE", this.gameWidth / 2, this.gameHeight / 2);
      }

      if (this.gameState === GAMESTATE.GAMEOVER) {
        ctx.rect(0, 0, this.gameWidth, this.gameHeight);

        ctx.fillStyle = "rgba(0,0,0,1)";

        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(
          "GAME OVER ",
          this.gameWidth / 2,
          this.gameHeight / 2 - 50
        );
        ctx.fillText(
          "Press SPACEBAR To Play Again ",
          this.gameWidth / 2,
          this.gameHeight / 2 + 50
        );
      }
    }
  }
}
