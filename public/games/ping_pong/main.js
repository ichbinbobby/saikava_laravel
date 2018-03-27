(function (){
"use strict";

// reference to the <canvas> element
var canvas = document.getElementById("ping_pong");

// store the 2D rendering context — tool to paint on the Canvas
var ctx = canvas.getContext("2d");

// contructor
function Ball () {
  this.x = canvas.width/2;
  this.y = canvas.height-30;
  this.xSpeed = 2;
  this.ySpeed = -2;
  this.radius = 10;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  };

  this.wallCollider = function() {
    if( this.y + this.ySpeed > canvas.height-this.radius ||
        this.y + this.ySpeed < this.radius )
    {
      this.ySpeed = -this.ySpeed;
    }
  }

  this.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
}

// contructor
function Player( x ) {
  this.width = 10;
  this.height = 75;
  this.x = x;
  this.y = (canvas.height - this.height)/2;
  this.score = 0;
  this.up = false;
  this.down = false;
  console.log('Created Player.');

  this.draw = function() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  this.movement = function() {
    if( this.down && this.y < canvas.height - this.height ) {
      this.y += 7;
    } else if ( this.up && this.y > 0 ) {
      this.y -= 7;
    }
  }
}


var ball = new Ball();
var player1 = new Player( canvas.width * 0.05 );
var player2 = new Player( canvas.width * 0.95 );

// element.addEventListener(event, function, useCapture);
document.addEventListener("keydown", keyHandlerPlayer1, false);
document.addEventListener("keydown", keyHandlerPlayer2, false);

function keyHandlerPlayer1(e) {
    if(e.keyCode == 83) {
        player1.up = true;
    }
    else if(e.keyCode == 87) {
        player1.down = true;
    }
}

function keyHandlerPlayer2(e) {
    if(e.keyCode == 98) {
        player2.up = true;
    }
    else if(e.keyCode == 104) {
        player2.down = true;
    } 
}

function drawGame() {
  // delete old rect b4 drawing new one
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  player1.draw();
  player2.draw();

  ball.wallCollider();
  ball.move();

  player1.movement();
  player2.movement();

  requestAnimationFrame(drawGame);
}

drawGame();

})();
