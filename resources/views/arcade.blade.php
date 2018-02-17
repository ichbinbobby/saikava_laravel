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
  <link rel="stylesheet" type="text/css" href="./css/design.css"/>
  <link rel="stylesheet" type="text/css" href="./css/navbar.css"/>
  <title>SaikaVA.com</title>
</head>

<body>

<!-- Header -->
<header class="header">
  <a href="{{ url('/') }}">
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
<script type="text/javascript" src="./js/navbar.js"></script>

<!-- Main -->
<div id="container">


    <!-- First Grid -->
  <div class="w3-row-padding w3-padding-64 w3-container riko_green" >
    <div class="w3-content">
      <div class="w3-twothird">
        <h1>The Arcade</h1>
        <h5 class="w3-padding-32">As soon as I learn how to make browser games or how to embed these, I will put up some super saikawaii arcade games!</h5>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/bzEUnHN3y80" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>

      <div class="w3-third w3-center">
        <img src="images/riko_flush.png" alt="">
      </div>
    </div>
  </div>

  <!-- Second Grid -->
  <div class="w3-row-padding w3-padding-64 w3-container riko_yellow">
    <div class="w3-content">
      <div class="w3-third w3-center">
        <img src="images/riko_grin.png" alt="">
      </div>

      <div class="w3-twothird">
        <h1>Sports Festival! (There's No Twist or Anything)</h1>
        <h5 class="w3-padding-32">Kanna becomes downhearted when Kobayashi mentions she can't attend her school's sports festival due to work. Upon noticing Kanna hold back her selfishness after seeing how hard she works, Kobayashi works overtime in order to get the day off for the sports festival. During the festival, Kanna, Riko, and Shouta all take part in various events. During the final relay race, Riko falls behind after dropping her baton, but Kanna makes up the lost distance and wins the festival for her class. </h5>

        <p class="w3-text-grey">
           Riko has wavy brown hair, shoulder length. She has dark green eyes and usually dons a light-green, long sleeved shirt with a rounded yellow neckline fronted by a bunny motif, a pale orange skirt, white high socks, and green shoes. She sports a yellow-rimmed tag clipped to her shirt and an orange daisy pin in her hair.
        </p>
      </div>
    </div>
  </div>

</div>

<div class="w3-container w3-center w3-opacity w3-padding-64">
    <h1 class="w3-margin w3-xlarge">"Frankly, I'd love to marry you." - Episode 6</h1>
</div>

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

</body>
</html>
