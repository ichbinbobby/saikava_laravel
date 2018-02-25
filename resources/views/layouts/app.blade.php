<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif}
    .w3-bar,h1,button {font-family: "Montserrat", sans-serif}
    .fa-anchor,.fa-coffee {font-size:200px}
    </style>
    <meta name="author" content="Bobby">
    <meta name="editor" content="atom">
    <meta name="description" content="SaikaVA.com is a fandom for the dragonmaid anime." />
    <meta name="keywords" content="Saikawa, saikava, kanna, dragonmaid, kawaii, blushing, tohru, kobayashi, lucoa, elma" />
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="./css/navbar.css"/>
    <link rel="stylesheet" type="text/css" href="./css/design.css"/>
    <title>@yield('title')</title>
</head>
<body>
    <!-- Header -->
<header class="header">
  <a class="headlinelink" href="{{ url('/') }}">
    <p class="headline">SaikaVA</p>
  </a>
  <div class="header_overlay">
    <video autoplay="true" poster"images/saikava_banner.png" loop muted>
      <source src="videos/loopingBlushTopLeft.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</header>

    <!-- Navigation -->
    <div id="navbar">
    <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large "
        href="javascript:void(0);"
        onclick="menu_toggle()"
        title="Toggle Navigation Menu"
    >
        <i class="fa fa-bars"></i>
    </a>
    <a href="{{ url('/') }}" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Home</a>
    <a href="https://www.youtube.com/c/SaikaVa" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Youtube</a>
    <a href="https://discord.gg/9R4BRdM" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Community</a>
    <a href="{{ url('arcade') }}" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Arcade</a>

    <!-- Navbar on small screens TODO animate meno icon -->
    <div id="menu_icon" class="w3-bar-block w3-hide w3-hide-large w3-hide-medium w3-large">
        <a href="{{ url('/') }}" class="w3-bar-item w3-button w3-padding-large">Home</a>
        <a href="https://www.youtube.com/c/SaikaVa" class="w3-bar-item w3-button w3-padding-large">Youtube</a>
        <a href="https://discord.gg/9R4BRdM" class="w3-bar-item w3-button w3-padding-large">Community</a>
        <a href="{{ url('arcade') }}" class="w3-bar-item w3-button w3-padding-large">Arcade</a>
    </div>
    </div>

    <!-- Main -->
        @yield('content')
    <!-- /Main -->

    <!-- Footer -->
    <div class="footer">
        <div id="contact" class="left">
            Riko SaikaVA<br>
            Germany Berlin<br>
            tmp: trash-mail@gmx.com
        </div>

        <div id="centerFooter">

        </div>

        <div id="" class="right">

        </div>
    </div>

    <script type="text/javascript" src="./js/navbar.js"></script>
    <script type="text/javascript" src="./js/app.js"></script>
    @section('scripts')

    @show
</body>
</html>
