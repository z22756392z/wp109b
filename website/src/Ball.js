import { detectCollision } from "./collidision";

export default class Ball {
  constructor(game, position) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;

    this.image = document.getElementById("img_ball");

    this.markForDel = false;

    this.width = 16;
    this.height = 16;

    this.speed = {
      x: 20,

      y: 20
    };

    this.position = position;
    this.maxspeed = 300;
    this.accelerate = 10;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x / deltaTime;

    this.position.y += this.speed.y / deltaTime;

    //wall
    if (this.position.x > this.gameWidth - this.width || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    //wall
    if (
      this.position.y > this.gameHeight - this.height ||
      this.position.y < 0
    ) {
      this.speed.y = -this.speed.y;
    }

    if (detectCollision(this, this.game.player)) {
      this.game.lives--;
      this.markForDel = true;
    }

    if (this.game.player.hitBoxExist) {
      if (detectCollision(this, this.game.player.hitBox)) {
        //UP
        if (this.game.player.hitBox.direction.up === true) {
          if (this.speed.y <= 0 && this.speed.y > -this.maxspeed)
            this.speed.y -= this.accelerate;
          else if (this.speed.y >= 0 && this.speed.y < this.maxspeed)
            this.speed.y = -this.speed.y - this.accelerate;
          else if (this.speed.y > this.maxspeed) this.speed.y = -this.maxspeed;
          else if (this.speed.y < -this.maxspeed) this.speed.y = -this.maxspeed;
        }
        //DOWN

        if (this.game.player.hitBox.direction.down === true) {
          if (this.speed.y <= 0 && this.speed.y > -this.maxspeed)
            this.speed.y = -this.speed.y + this.accelerate;
          else if (this.speed.y >= 0 && this.speed.y < this.maxspeed)
            this.speed.y += this.accelerate;
          else if (this.speed.y > this.maxspeed) this.speed.y = this.maxspeed;
          else if (this.speed.y < -this.maxspeed) this.speed.y = this.maxspeed;
        }
        //LEFT
        if (this.game.player.hitBox.direction.left === true) {
          if (this.speed.x <= 0 && this.speed.x > -this.maxspeed)
            this.speed.x = this.speed.x - this.accelerate;
          else if (this.speed.x >= 0 && this.speed.x < this.maxspeed)
            this.speed.x = -this.speed.x - this.accelerate;
          else if (this.speed.x > this.maxspeed) this.speed.x = -this.maxspeed;
          else if (this.speed.x < -this.maxspeed) this.speed.x = -this.maxspeed;
        }

        //RIGHT
        if (this.game.player.hitBox.direction.right === true) {
          if (this.speed.x <= 0 && this.speed.x > -this.maxspeed)
            this.speed.x = -this.speed.x + this.accelerate;
          else if (this.speed.x >= 0 && this.speed.x < this.maxspeed)
            this.speed.x += this.accelerate;
          else if (this.speed.x > this.maxspeed) this.speed.x = this.maxspeed;
          else if (this.speed.x < -this.maxspeed) this.speed.x = this.maxspeed;
        }
      }
    }
  }
}
