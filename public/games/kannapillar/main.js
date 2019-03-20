var config = {
    type: Phaser.WEBGL,
    width: 1334,
    height: 750,
    parent: 'game_container',
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 500 },
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
