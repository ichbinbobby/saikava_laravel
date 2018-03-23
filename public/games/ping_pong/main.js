// reference to the <canvas> element
var canvas = document.getElementById("ping_pong");

// store the 2D rendering context — tool to paint on the Canvas
var ctx = canvas.getContext("2d");

// ball
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

// paddle
var paddleHeight = 75;
var paddleWidth = 10;
var paddleX = canvas.width * 0.05;
var paddleY = (canvas.height - paddleHeight)/2;
var wPressed = false;
var sPressed = false;

var paddleX2 = canvas.width * 0.95;
var paddleY2 = (canvas.height - paddleHeight)/2;
var upPressed = false;
var downPressed = false;

var score  = 0;
var score2 = 0;

// player 1
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// player 2
document.addEventListener("keydown", keyDownHandler2, false);
document.addEventListener("keyup", keyUpHandler2, false);

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle2() {
    ctx.beginPath();
    ctx.rect(paddleX2, paddleY2, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawPaddle2();
  drawScore();

  // bouncing off top and bottom
  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  //TODO Ball also has to be on the players  x-axis




  //TRY set a width to trigger the condition
  //( x + dx < paddleX && x + dx > paddleX - paddleWidth )
  //( x + dx > paddleX2 && x + dx < paddleX2 + paddleWidth )

  if( x + dx < paddleX ) {
    //console.log("Point for Player 2, ball hit left wall");
    if(y < paddleY && y > paddleY - paddleHeight) {
      dx = -1 * (dx + 0.5);
      score++;
    } else if ( x + dx < 0 ){
        resetBall();
    }
  } else if ( x + dx > paddleX2 ) {
    //console.log("Point for Player 1, ball hit right wall");
    if (y < paddleY2 && y > paddleY2 - paddleHeight) {
      dx = -1 * (dx + 0.5);
      score2++;
    } else if ( x + dx > canvas.width ){
        resetBall();
    }
  }


  // ball movement
  x += dx;
  y += dy;

  //paddle movement (-10 for the bottom)
  if( sPressed && paddleY < canvas.height - paddleHeight ) {
    paddleY += 7;
  }
  else if( wPressed && paddleY > 0 ) {
    paddleY -= 7;
  }

  if( downPressed && paddleY2 < canvas.height - paddleHeight ) {
    paddleY2 += 7;
  }
  else if( upPressed && paddleY2 > 0 ) {
    paddleY2 -= 7;
  }

  requestAnimationFrame(draw);
}


function keyDownHandler(e) {
    if(e.keyCode == 87) {
        wPressed = true;
    }
    else if(e.keyCode == 83) {
        sPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 87) {
        wPressed = false;
    }
    else if(e.keyCode == 83) {
        sPressed = false;
    }
}

// Numpad 8 and 2
function keyDownHandler2(e) {
    if(e.keyCode == 104) {
        upPressed = true;
    }
    else if(e.keyCode == 98) {
        downPressed = true;
    }
}

function keyUpHandler2(e) {
    if(e.keyCode == 104) {
        upPressed = false;
    }
    else if(e.keyCode == 98) {
        downPressed = false;
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
    ctx.fillText("Score2: "+score2, canvas.width * 0.91, 20);
}

function resetBall() {
  if ( Math.random() > 0.5 )
  {
    // change the direction
    dx *= -1;
  }
  x = canvas.width/2;
  y = canvas.height-30;
}

draw();

// draw will be executed every 10 miliseconds
//setInterval(draw, 10);

// Object
/*
// Create a player class
function Player( x, y) {

  //start position
  this.x    = x;
  this.y    = y;

  //controls
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

var player1 = new Player( player1_width, player_height );
var player2 = new Player( player2_width, player_height );
*/

/*
var canvas = document.getElementById("ping_pong");

var player1 = player2 = ball = this.canvas.getContext("2d");

var player_height = canvas.height/3;
var player1_width = canvas.width - canvas.width*0.9;
var player2_width = canvas.width - canvas.width*0.12;

player1.fillStyle = "#000000";
player1.fillRect(player1_width, player_height, 25, 200);

player2.fillStyle = "#000000";
player2.fillRect(player2_width, player_height, 25, 200);

ball.fillStyle = "#000000";
ball.fillRect(canvas.width/2, canvas.height/2, 25, 25);

function move_player(player) {

}
*/


/*
var myGamePiece;

function startGame() {
    gameArea.start();
    myGamePiece = new component(300, 300, "red", 100, 120);
}

var gameArea = {
  canvas: document.createElement('canvas'),
  container: document.getElementById('game_container'),
  start : function() {
    this.canvas.width = 1334;
    this.canvas.height = 750;
    this.context = this.canvas.getContext("2d");
    this.container.insertBefore(this.canvas, this.container.childNodes[0]);
  },
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = gameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

*/
