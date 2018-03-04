# SaikaVA

SaikaVA is a website with the goal to create little arcade games with the dragonmaid theme. The games will be played in the browser and
the player should be able to fill in his username, when he tops one of the highscores. The top 10 highscores will be saved in a databank 
displayed on the website. The arcade games should be simple and may be reinvented in an mobile app later on. Change the dragonmaid 
characters, images and sounds to prevent copyright issues.

## Deployment

  https://www.hugeserver.com/kb/install-laravel5-php7-apache-ubuntu16/

  - install Apache
  - install PHP 7.1
  - download composer
  - set document root: vim /etc/apache2/sites-available/000-default.conf

Give User permission to upload via FTP: 

  https://askubuntu.com/questions/489349/ftp-sftp-not-allowing-any-writing

  sudo chmod -R 757 /var/www
    
Add User to group www-data

  sudo usermod -a -G www-data saikava

Make that only user and group can write

  sudo chmod -R 775 /var/www

Errorlog

  less /var/log/apache2/error.log
  less /var/log/apache2/access.log

Change .htaccess file

  sudo vim /var/www/html/laravel/public/.htaccess
  
 `<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Handle Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]

    # Change example.com to your domain name
    RewriteCond %{HTTP_HOST} ^81\.169\.135\.243$

    RewriteRule ^(/)?$ /index.php [L]
</IfModule>`

    
Allow reading of .htaccess 
    
  https://stackoverflow.com/questions/5210820/apache-server-ignores-htaccess

Put this in the default Vhost configuration: 

  vim /etc/apache2/sites-available/000-default.conf
    
    <Directory "/var/www/html/laravel">
      AllowOverride All
    </Directory>
    
Enable access to routes/blades

  sudo a2enmod expires
  sudo a2enmod rewrite

Then restart apache

  service apache2 restart
