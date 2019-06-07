# SaikaVA

SaikaVA is a website with the goal to create little arcade games with the dragonmaid theme. The games will be played in the browser and
the player should be able to fill in his username, when he tops one of the highscores. The top 10 highscores will be saved in a databank
and displayed on the website. The arcade games should be simple and may be reinvented in an mobile app later on. Pixelate the dragonmaid
characters, images and sounds to prevent copyright issues.

## Deployment for local use

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
