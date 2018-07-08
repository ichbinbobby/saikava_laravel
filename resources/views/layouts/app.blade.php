<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Bobby">
    <meta name="editor" content="atom">
    <meta name="description" content="SaikaVA.com is a fandom for the dragonmaid anime." />
    <meta name="keywords" content="Saikawa, saikava, kanna, dragonmaid, kawaii, blushing, tohru, kobayashi, lucoa, elma" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/css/navbar.css"/>
    <link rel="stylesheet" type="text/css" href="/css/design.css"/>
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
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
      <a href="{{ url('/') }}" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-light-grey">Home</a>
      <a href="https://www.youtube.com/c/SaikaVa" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-light-grey">Youtube</a>
      <a href="https://twitter.com/RikoSaikaVA" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-light-grey">Twitter</a>
      <a href="https://discord.gg/9R4BRdM" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-light-grey">Community</a>
      <a href="{{ url('arcade') }}" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-light-grey">Arcade</a>

      <!-- Navbar on small screens TODO animate meno icon -->
      <div id="menu_icon" class="w3-bar-block w3-hide w3-hide-large w3-hide-medium w3-large">
          <a href="{{ url('/') }}" class="w3-bar-item w3-button w3-padding-large">Home</a>
          <a href="https://www.youtube.com/c/SaikaVa" class="w3-bar-item w3-button w3-padding-large">Youtube</a>
          <a href="https://twitter.com/RikoSaikaVA" class="w3-bar-item w3-button w3-padding-large">Twitter</a>
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

    <script type="text/javascript" src="/js/navbar.js"></script>
    <script type="text/javascript" src="/js/app.js"></script>
    @section('scripts')

    @show
</body>
</html>
