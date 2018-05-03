<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
This loads the starting page as a view template. It's located in the resources
folder as welcome.blade.php
*/
Route::get('/', function () {
    return view('welcome');
});

Route::get('arcade', function () {
    return view('arcade');
});

// Arcade Games
Route::get('arcade/breakout', function () {
    return view('games/breakout');
});

Route::get('arcade/flappy_saikawa', function () {
    return view('games/flappy_saikawa');
});

Route::get('arcade/frogger', function () {
    return view('games/frogger');
});

Route::get('arcade/hungry_kannapillar', function () {
    return view('games/hungry_kannapillar');
});

Route::get('arcade/mario', function () {
    return view('games/mario');
});

Route::get('arcade/ping_pong', function () {
    return view('games/ping_pong');
});
