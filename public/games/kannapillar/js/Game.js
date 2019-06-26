var config = {
    type: Phaser.WEBGL,
    width: 1200,
    height: 600,
    parent: 'game_container',
    physics: {
      default: 'arcade'
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