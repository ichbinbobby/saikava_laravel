var config = {
    type: Phaser.WEBGL,
    width: 1050,
    height: 600,
    //ackgroundColor: '#f8edc5',
    parent: 'game_container',
    physics: {
      default: "arcade",
      arcade: {
        gravity: { x: 0, y: 0 },
        debug: true
      }
    },
    scene: [
      SceneMainMenu,
      SceneMain,
      SceneGameOver
    ],
    pixelArt: true,
    roundPixels: true
};
var game = new Phaser.Game(config);