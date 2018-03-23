

var config = {
    type: Phaser.AUTO,
    width: 1334,
    height: 750,
    parent: 'game_container',
    backgroundColor: "#FFFFFF",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
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
    'player',
    '/games/ping_pong/assets/player.png'
  );
  this.load.image(
    'ball',
    '/games/ping_pong/assets/ball.png'
  );
}

function create ()
{
  this.player1 = this.physics.add.sprite(100, 375, 'player');
  this.player2 = this.physics.add.sprite(1234, 375, 'player');

  // set location of the ball
  var ball_location;
  const player1_location =  0;
  const player2_location = 1199;

  if ( Math.random() > 0.5 )
  {
    ball_location = player1_location;
  }
  else
  {
    ball_location = player2_location;
  }
  this.ball = this.physics.add.sprite(ball_location, 375, 'ball');

  this.player1.setCollideWorldBounds(true);
  this.player2.setCollideWorldBounds(true);
  this.ball.setCollideWorldBounds(true);
  //this.ball.allowRotation(true);

  //this.player2.immovable(true);
  //this.player1.setBounce( 0, 0 );
  //this.player2.setBounce( 0, 0 );
  this.ball.setBounce( 1, Math.random() );
  //this.ball.setAccelerationX(1);

  this.physics.add.collider(this.player1, this.ball, this.reflectBall);
  this.physics.add.collider(this.player2, this.ball, this.reflectBall);


}

// check every frame
function update ()
{
  // player controls
  var keyW =
    this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  var keyA =
    this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  var keyUP =
    this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
  var keyDOWN =
    this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);


  if (keyW.isDown)
  {
    this.player1.setVelocityY(-400);
  }
  else if (keyA.isDown)
  {
    this.player1.setVelocityY(+400);
  }
  else {
    this.player1.setVelocityY(0);
  }

  if (keyUP.isDown)
  {
    this.player2.setVelocityY(-400);
  }
  else if (keyDOWN.isDown)
  {
    this.player2.setVelocityY(+400);
  }
  else {
    this.player2.setVelocityY(0);
  }


  var keyENTER =
    this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  var ball_velocity = 500;

  // shoot ball at start
  if ( this.ball_location == this.player1_location && keyENTER.isDown )
  {
    this.ball.setVelocityX( ball_velocity );
  }
  else if ( this.ball_location == this.player2_location && keyENTER.isDown )
  {
    this.ball.setVelocityX(-ball_velocity );
  }
}

function reflectBall ()
{
  this.ball_velocity *= -1;
}
