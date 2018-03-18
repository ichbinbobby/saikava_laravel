@extends('layouts.game')
@section('title', 'Flappy SaikaVA')
@php ($disqusThread = 'devkava')

@section('content')
<!-- The canvas element that Phaser creates will be simply be appended to the
document at the point the script was called, but you can also specify a parent
container in the game config should you wish. -->

  <!-- Main -->
  <div id="game_container" class="w3-row-padding w3-center w3-margin-top">
    <script
      type="text/javascript"
      src="games/flappy_saikawa/main.js">
    </script>
  </div>

@endsection()
