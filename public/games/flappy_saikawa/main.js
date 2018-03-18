var config = {
    type: Phaser.AUTO,
    width: 1334,
    height: 750,
    parent: 'game_container',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image(
    'background',
    'games/flappy_saikawa/assets/background_school.png'
  );
}

function create ()
{
  this.add.image(667, 375, 'background');
}

function update ()
{
}
