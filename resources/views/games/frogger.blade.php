@extends('layouts.game')
@section('title', 'Frogger')

@section('content')
<!-- The canvas element that Phaser creates will be simply be appended to the
document at the point the script was called, but you can also specify a parent
container in the game config should you wish. -->

  <!-- Main -->
  <div id="game_container" class="w3-center w3-margin-top">

  </div>
  <div class="w3-center w3-margin-top" width="1334">
    <p>Left click to move character.</p>
    <a href="https://gamedevacademy.org/phaser-3-tutorial/">
      <p>Code Tutorial</p>
    </a>
    <a href="https://github.com/ichbinbobby/saikava/blob/master/public/games/frogger/main.js">
      Link to the Code.
    </a>
  </div>

@endsection()

@section("scripts")
<script type="text/javascript" src="/games/frogger/main.js">
</script>
@endsection()
