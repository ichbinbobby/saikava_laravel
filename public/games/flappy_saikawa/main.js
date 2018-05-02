// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');

// some parameters for our scene
gameScene.init = function() {
  this.playerSpeed = 1.5;
  this.pipeSpeed = 2;
  this.pipeDownY = 280;
  this.pipeUpY = 80;
}

function preload ()
{
  this.load.image(
    'background',
    '/games/flappy_saikawa/assets/background_school.png'
  );
  this.load.image(
    'player',
    '/games/flappy_saikawa/assets/bird.png'
  );
  this.load.image(
    'pipeUp',
    '/games/flappy_saikawa/assets/pipeUp.png'
  );
  this.load.image(
    'pipeDown',
    '/games/flappy_saikawa/assets/pipeDown.png'
  );
}

function create ()
{
  let bg = this.add.sprite(0, 0, 'background');
  bg.setOrigin(0, 0);

  // player
  this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');

  // scale down
  this.player.setScale(0.20);

  // group of pipes
  this.pipesTop = this.add.group({
    key: 'pipeDown',
    repeat: 5,
    setXY: {
      x: 300,
      y: 0,
      stepX: 200,
      stepY: 0
    }
  })

  this.pipesBottom = this.add.group({
    key: 'pipeUp',
    repeat: 5,
    setXY: {
      x: 300,
      y: 750,
      stepX: 200,
      stepY: 0
    }
  })

  Phaser.Actions.ScaleXY(this.pipesTop.getChildren(), -0.5, -0.5);
  Phaser.Actions.ScaleXY(this.pipesBottom.getChildren(), -0.5, -0.5);
}

function update ()
{

}

var config = {
    type: Phaser.AUTO,
    width: 1334,
    height: 750,
    parent: 'game_container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Initialize Phaser
var game = new Phaser.Game(config);
