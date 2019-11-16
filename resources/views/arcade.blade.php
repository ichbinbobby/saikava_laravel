@extends('layouts.app')
@section('title', 'SaikaVA')

@section('content')
  <!-- Main -->
  <div id="container">

  <!-- Row1 -->
  <div class="w3-row-padding w3-center w3-margin-top">
    <div class="w3-third">
      <div class="w3-card w3-container" style="min-height:460px">
      <h3>Flappy Saikawa</h3><br>
      <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Flappy Bird</p>
      <p>Coming soon</p>
      <p>Highscore</p>
      <a href="{{ url('arcade/flappy_saikawa') }}">
        <p>Play Button</p>
      </a>
      </div>
    </div>

    <div class="w3-third">
      <div class="w3-card w3-container" style="min-height:460px">
      <h3>The very hungry Kannapillar</h3><br>
      <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Snake Game</p>
      <p>Coming soon</p>
      <p>Highscore</p>
      <a href="{{ url('arcade/hungry_kannapillar') }}">
        <p>Play Button</p>
      </a>
      </div>
    </div>

    <div class="w3-third">
      <div class="w3-card w3-container" style="min-height:460px">
      <h3>Mario</h3><br>
      <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Mario</p>
      <p>Coming soon</p>
      <p>Highscore</p>
      <a href="{{ url('arcade/mario') }}">
        <p>Play Button</p>
      </a>
      </div>
    </div>
  </div>

  <!-- Row2 -->
  <div class="w3-row-padding w3-center w3-margin-top">
    <div class="w3-third">
      <div class="w3-card w3-container" style="min-height:460px">
      <h3>Frogger</h3><br>
      <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Frogger</p>
      <p>Coming soon</p>
      <p>Highscore</p>
      <a href="{{ url('arcade/frogger') }}">
        <p>Play Button</p>
      </a>
      </div>
    </div>

    <div class="w3-third">
      <div class="w3-card w3-container" style="min-height:460px">
      <h3>Breakout</h3><br>
      <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Breakout</p>
      <p>Coming soon</p>
      <p>Singleplayer</p>
      <a href="{{ url('arcade/breakout') }}">
        <p>Play Button</p>
      </a>
      </div>
    </div>

    <div class="w3-third">
      <div class="w3-card w3-container" style="min-height:460px">
      <h3>Ping Pong</h3><br>
      <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Ping Pong</p></a>
      <p>Coming soon</p>
      <p>Multiplayer</p>
      <a href="{{ url('arcade/ping_pong') }}">
        <p>Play Button</p>
      </a>
      </div>
    </div>
  </div>

  <!-- Row3 -->
  <div class="w3-row-padding w3-center w3-margin-top">
    <div class="w3-third">
      <div class="w3-card w3-container" style="min-height:460px">
      <h3>Preloading Screen</h3><br>
      <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Testing Code</p>
      <p>Coming soon</p>
      <p>Highscore</p>
      <a href="{{ url('arcade/preloading_screen') }}">
        <p>Play Button</p>
      </a>
      </div>
    </div>

    <div class="w3-third">
      <div class="w3-card w3-container" style="min-height:460px">
      <h3>Space Shooter</h3><br>
      <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Space Shooter</p>
      <p>Coming soon</p>
      <p>Singleplayer</p>
      <a href="{{ url('arcade/space_shooter') }}">
        <p>Play Button</p>
      </a>
      </div>
    </div>

    <div class="w3-third">
      <div class="w3-card w3-container" style="min-height:460px">
      <h3>Ping Pong</h3><br>
      <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Ping Pong</p></a>
      <p>Coming soon</p>
      <p>Multiplayer</p>
      <a href="{{ url('arcade/ping_pong') }}">
        <p>Play Button</p>
      </a>
      </div>
    </div>
  </div>

  </div>
  <!-- Main End -->
@endsection()
