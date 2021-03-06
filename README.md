[![Build Status](https://dev.azure.com/nthanbinh/saikava/_apis/build/status/ichbinbobby.saikava?branchName=master)](https://dev.azure.com/nthanbinh/saikava/_build/latest?definitionId=1&branchName=master)
# SaikaVA

SaikaVA is a website with the goal to create little arcade games with the dragonmaid theme. The games will be played in the browser and
the player should be able to fill in his username, when he tops one of the highscores. The top 10 highscores will be saved in a databank
and displayed on the website. The arcade games should be simple and may be reinvented in an mobile app later on. Pixelate the dragonmaid
characters, images and sounds to prevent copyright issues.

## Deployment For Local Use

#### Clone the application and install composer

```
git clone https://github.com/ichbinbobby/saikava.git
cd saikava
apt install composer
composer update
```

#### cp the [config/](https://github.com/laravel/laravel/tree/master/config) of laravel into your project

#### create the [.env](https://github.com/laravel/laravel/blob/master/.env.example) file

`nano .env`
```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

`php artisan key:generate`

`php artisan serve`

#### The application should be running on your device now: [http://127.0.0.1:8000](http://127.0.0.1:8000)

## Game Development

The games are located in [public/games/](https://github.com/ichbinbobby/saikava/tree/master/public/games). Each game has its own folder with a simple project structure and is visualized in the [view](https://github.com/ichbinbobby/saikava/tree/master/resources/views/games) by a blade. assets/ contains sounds and images while js/ posseses the game logic. You don't need to include phaser.js, since it is included in the [game layout](https://github.com/ichbinbobby/saikava/blob/master/resources/views/layouts/game.blade.php). If you want to add your game to the arcade then you need to add it to the [arcade page](https://github.com/ichbinbobby/saikava/blob/master/resources/views/arcade.blade.php) and to the [web routes](https://github.com/ichbinbobby/saikava/blob/master/routes/web.php). Start by learning how the framework works. Here is a good tutorial to understand phaser.

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/frRWKxB9Hm0/0.jpg)](https://www.youtube.com/watch?v=frRWKxB9Hm0&list=PLDyH9Tk5ZdFzEu_izyqgPFtHJJXkc79no&index=1)
