@extends('layouts.game')
@section('title', 'Mario')

@section('content')
<!-- The canvas element that Phaser creates will be simply be appended to the
document at the point the script was called, but you can also specify a parent
container in the game config should you wish. -->

  <!-- Main -->
  <div id="game_container" class="w3-center w3-margin-top">

  </div>
  <div class="w3-center w3-margin-top" width="1334">
    <p>Use the Keyboard arrows to move.</p>
    <a href="https://gamedevacademy.org/how-to-make-a-mario-style-platformer-with-phaser-3/?a=13"><p>Code Tutorial</p></a>
    <a href="https://github.com/ichbinbobby/saikava/tree/master/public/games/mario"><p>Link to the Code.</p></a>
  </div>

@endsection()

@section("scripts")
<script type="text/javascript" src="/games/mario/main.js">
</script>
@endsection()
