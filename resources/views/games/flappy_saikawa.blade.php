@extends('layouts.game')
@section('title', 'Flappy SaikaVA')

@section('content')
<!-- The canvas element that Phaser creates will be simply be appended to the
document at the point the script was called, but you can also specify a parent
container in the game config should you wish. -->

  <!-- Main -->
  <div id="game_container" class="w3-center w3-margin-top">
  </div>
  <div class="w3-center w3-margin-top" width="1334">
    <p>Use the Keyboard arrows to move.</p>
    <a href=""><p></p></a>
    <a href=""><p>Link to the Code.</p></a>
  </div>
@endsection()

@section("scripts")
<!--  Include game files in the order that will be referenced  -->
<script src="/games/flappy_saikawa/scripts/GlobalVariables.js"></script>
<script src="/games/flappy_saikawa/scripts/Preload.js"></script>
<script src="/games/flappy_saikawa/scripts/MainMenu.js"></script>
<script src="/games/flappy_saikawa/scripts/GamePlay.js"></script>
<!-- Initialize the game when loading the page -->
<script src="/games/flappy_saikawa/main.js"></script>
@endsection()
