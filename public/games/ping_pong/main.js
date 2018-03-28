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
  this.xSpeed = 3;
  this.ySpeed = -3;
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

  this.reset = function() {
    this.x = canvas.width/2;
    this.y = canvas.height-30;
    this.xSpeed = 3;
    this.ySpeed = -3;
    if( Math.random() > 0.5 ) {
      this.xSpeed *= -1;
    }
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
    if( this.up && this.y < canvas.height - this.height ) {
      this.y += 7;
    } else if ( this.down && this.y > 0 ) {
      this.y -= 7;
    }
  }
}


var ball = new Ball();
var player1 = new Player( canvas.width * 0.05 );
var player2 = new Player( canvas.width * 0.95 );

// element.addEventListener(event, function, useCapture);
document.addEventListener("keydown", keyDownHandlerPlayer1, false);
document.addEventListener("keyup", keyUpHandlerPlayer1, false);

document.addEventListener("keydown", keyDownHandlerPlayer2, false);
document.addEventListener("keyup", keyUpHandlerPlayer2, false);

function keyDownHandlerPlayer1(e) {
    if(e.keyCode == 83) {
        player1.up = true;
    }
    else if(e.keyCode == 87) {
        player1.down = true;
    }
}

function keyUpHandlerPlayer1(e) {
    if(e.keyCode == 83) {
        player1.up = false;
    }
    else if(e.keyCode == 87) {
        player1.down = false;
    }
}

function keyDownHandlerPlayer2(e) {
    if(e.keyCode == 98) {
        player2.up = true;
    }
    else if(e.keyCode == 104) {
        player2.down = true;
    }
}

function keyUpHandlerPlayer2(e) {
    if(e.keyCode == 98) {
        player2.up = false;
    }
    else if(e.keyCode == 104) {
        player2.down = false;
    }
}

function drawLine() {
  ctx.beginPath();
  ctx.rect(canvas.width/2, 0, 1, canvas.height);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawScore( score, x, y ) {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText( score, x, y );
}

function drawGame() {
  // delete old rect b4 drawing new one
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  player1.draw();
  player2.draw();
  drawLine();

  ball.wallCollider();
  ball.move();

  player1.movement();
  player2.movement();

  // paddles are drawn to the right, so left paddle needs more pixels
  if ( ball.x > (player1.x + ball.radius) &&
       ball.x < (player1.x + ball.radius*2) ) {
    if ( ball.y > player1.y && ball.y < player1.y + player1.height ) {
      ball.xSpeed *= -1.1;
    }
  } else if ( ball.x < 0 ) {
    player2.score++;
    ball.reset();
  }
  if ( ball.x > (player2.x - ball.radius) &&  ball.x < player2.x ) {
    if ( ball.y > player2.y && ball.y < player2.y + player2.height ) {
      ball.xSpeed *= -1.1;
    }
  } else if ( ball.x > canvas.width ) {
    player1.score++;
    ball.reset();
  }

  drawScore( player1.score, canvas.width * 0.01, 20 );
  drawScore( player2.score, canvas.width * 0.98, 20 );

  requestAnimationFrame(drawGame);
}

drawGame();

})();
