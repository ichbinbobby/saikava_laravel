@extends('layouts.game')
@section('title', 'The Very Hungry Kannapillar')

@section('content')
<!-- The canvas element that Phaser creates will be simply be appended to the
document at the point the script was called, but you can also specify a parent
container in the game config should you wish. -->

  <!-- Main -->
  <div id="game_container" class="w3-center w3-margin-top">

  </div>

  <div class="w3-center w3-margin-top" width="1200">
    <p>Use W, A, S, D to move.</p>
    <p></p>
    <a href=""></a>
  </div>
@endsection()

@section("scripts")
<script type="text/javascript" src="/games/kannapillar/js/Entity.js"></script>
<script type="text/javascript" src="/games/kannapillar/js/Tail.js"></script>
<script type="text/javascript" src="/games/kannapillar/js/Player.js"></script>
<script type="text/javascript" src="/games/kannapillar/js/Food.js"></script>
<script type="text/javascript" src="/games/kannapillar/js/SceneStart.js"></script>
<script type="text/javascript" src="/games/kannapillar/js/SceneMainMenu.js"></script>
<script type="text/javascript" src="/games/kannapillar/js/SceneMain.js"></script>
<script type="text/javascript" src="/games/kannapillar/js/SceneGameOver.js"></script>
<script type="text/javascript" src="/games/kannapillar/js/Game.js"></script>
@endsection()
