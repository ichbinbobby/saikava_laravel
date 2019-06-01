var config = {
    type: Phaser.WEBGL,
    width: 1200,
    height: 750,
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