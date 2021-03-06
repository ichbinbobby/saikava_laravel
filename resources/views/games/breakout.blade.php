@extends('layouts.game')
@section('title', 'Breakout')

@section('content')
<!-- The canvas element that Phaser creates will be simply be appended to the
document at the point the script was called, but you can also specify a parent
container in the game config should you wish. -->

  <!-- Main -->
  <div id="game_container" class="w3-center w3-margin-top">
    <canvas id="breakout"
            style="border-style: dotted"
            width="1334" height="750"></canvas>
  </div>
  <div class="w3-center w3-margin-top" width="1334">
    <p>Use the mouse or left and right arrows on the keyboard to move.</p>
    <p></p>
    <a href="https://github.com/ichbinbobby/saikava/blob/master/public/games/breakout/main.js">Link to the Code.</a>
  </div>

@endsection()

@section("scripts")
<script type="text/javascript" src="/games/breakout/main.js">
</script>
@endsection()
