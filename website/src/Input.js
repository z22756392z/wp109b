export default class InputHandler {
  constructor(player, game) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 27:
          game.togglePause();
          break;

        case 32:
          game.init();
          break;

        case 65:
          player.moveLeft();
          break;

        case 87:
          player.moveUp();

          break;

        case 68:
          player.moveRight();

          break;

        case 83:
          player.moveDown();
          break;

        default:
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 65:
          if (player.speed.x < 0) player.xStop();
          break;

        case 87:
          if (player.speed.y < 0) player.yStop();
          break;

        case 68:
          if (player.speed.x > 0) player.xStop();
          break;

        case 83:
          if (player.speed.y > 0) player.yStop();
          break;

        default:
          break;
      }
    });

    document.addEventListener("keypress", (event) => {
      switch (event.keyCode) {
        case 74:
          player.attack();
          break;

        default:
          break;
      }
    });
  }
}
