import HitBox from "/src/HitBox";

export default class Player {
  constructor(game) {
    this.game = game;
    this.image = document.getElementById("img_knight");
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.width = 30;
    this.height = 30;

    this.maxSpeed = 5;

    this.speed = {
      x: 0,

      y: 0
    };

    this.position = {
      x: this.gameWidth / 2 - this.width / 2,

      y: this.gameHeight / 2 + this.height / 2
    };

    this.direction = {
      up: false,
      down: false,
      left: false,
      right: true
    };

    this.hitBoxExist = false;
  }

  moveLeft() {
    this.speed.x = -this.maxSpeed;
    this.direction.left = true;
    this.direction.right = false;
    this.direction.up = false;
    this.direction.down = false;
  }

  moveUp() {
    this.speed.y = -this.maxSpeed;
    this.direction.up = true;
    this.direction.right = false;
    this.direction.down = false;
    this.direction.left = false;
  }

  moveRight() {
    this.speed.x = this.maxSpeed;
    this.direction.right = true;
    this.direction.down = false;
    this.direction.up = false;
    this.direction.left = false;
  }

  moveDown() {
    this.speed.y = this.maxSpeed;
    this.direction.down = true;
    this.direction.up = false;
    this.direction.right = false;
    this.direction.left = false;
  }

  xStop() {
    this.speed.x = 0;
  }

  yStop() {
    this.speed.y = 0;
  }

  attack() {
    if (this.game.gameState !== 1) return;
    this.xStop();
    this.yStop();
    this.hitBoxExist = true;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    if (this.hitBoxExist) {
      this.hitBox.draw(ctx);
      this.hitBoxExist = false;
      delete this.hitBox;
    }
  }

  update(deltaTime) {
    if (this.hitBoxExist) this.hitBox = new HitBox(this);

    this.position.x += this.speed.x;

    this.position.y += this.speed.y;

    if (this.position.x < 0) this.position.x = 0;

    if (this.position.x > this.gameWidth - this.width)
      this.position.x = this.gameWidth - this.width;

    if (this.position.y < 0) this.position.y = 0;

    if (this.position.y > this.gameHeight - this.height)
      this.position.y = this.gameHeight - this.height;
  }

  reset() {
    this.position.x = this.gameWidth / 2 - this.width / 2;
    this.position.y = this.gameHeight / 2 + this.height / 2;
  }
}
