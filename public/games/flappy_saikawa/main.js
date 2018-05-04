var config = {
    type: Phaser.AUTO,
    width: 1334,
    height: 750,
    parent: 'game_container',
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 500 },
        debug: true
      }
    },
    scene: myGame.scenes
};

//Instantiate the game with the config
var game = new Phaser.Game(config);
