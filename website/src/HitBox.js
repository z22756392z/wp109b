export default class HitBox {
  constructor(player) {
    this.image = document.getElementById("img_shield");

    this.direction = {
      up: false,
      down: false,
      left: false,
      right: false
    };
    if (player.direction.down === true) {
      this.width = player.width * 3;
      this.height = player.height * 1.5;
      this.yOffset = player.height;
      this.xOffset = -player.width;
      this.direction.down = true;
    }

    if (player.direction.up === true) {
      this.width = player.width * 3;
      this.height = player.height * 1.5;
      this.yOffset = -this.height;
      this.xOffset = -player.width;
      this.direction.up = true;
    }
    if (player.direction.left === true) {
      this.width = player.width * 1.5;
      this.height = player.height * 3;
      this.yOffset = -player.height;
      this.xOffset = -this.width;
      this.direction.left = true;
    }
    if (player.direction.right === true) {
      this.width = player.width * 1.5;
      this.height = player.height * 3;
      this.yOffset = -player.height;
      this.xOffset = player.width;
      this.direction.right = true;
    }
    this.position = {
      x: player.position.x + this.xOffset,
      y: player.position.y + this.yOffset
    };
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
}
