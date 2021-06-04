class Game {
  constructor() {}

  //read the values from DB
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(gameState) {
    database.ref("/").update({
      gameState: gameState,
    });
  }

  start() {
    if (gameState === 0) {
      player = new Player();
      player.getCount();
      form = new Form();
      form.display();
    }
  }
}
