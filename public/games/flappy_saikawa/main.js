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


function preload ()
{
  this.load.image(
    'background',
    '/games/flappy_saikawa/assets/background_school.png'
  );
  // Load the bird sprite
  this.load.image(
    'player',
    '/games/flappy_saikawa/assets/riko_flattered.png'
  );
}

function create ()
{
  //in Phaser 3 all Game Objects are positioned based on their center by default
  this.add.image(667, 375, 'background');

  // Display the bird at the position x=100 and y=245
  this.player = this.add.sprite(100, 375, 'player');

}

function update ()
{

}
