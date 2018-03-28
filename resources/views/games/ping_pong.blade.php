@extends('layouts.game')
@section('title', 'Ping Pong')

@section('content')
<!-- The canvas element that Phaser creates will be simply be appended to the
document at the point the script was called, but you can also specify a parent
container in the game config should you wish. -->

  <!-- Main -->
  <div id="game_container" class="w3-center w3-margin-top">
    <canvas id="ping_pong"
            style="border-style: dotted"
            width="1334" height="750"></canvas>
  </div>
  <div class="w3-center w3-margin-top" width="1334">
    <p>Player 1 use the w-key to move up and the s-key to move down.</p>
    <p>Player 2 use the Numpad Up(8) and Down(2) to move.</p>
    <a href="https://github.com/ichbinbobby/saikava/tree/master/public/games/ping_pong">Link to the Code.</a>
  </div>

@endsection()

@section("scripts")
<script type="text/javascript" src="/games/ping_pong/main.js">

</script>
@endsection()
