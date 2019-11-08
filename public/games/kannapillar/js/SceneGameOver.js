class SceneGameOver extends Phaser.Scene {
    constructor()
    {
        super({ key: 'SceneGameOver' });
        this.tileSize = 75;
    }
    preload()
    {
        this.load.spritesheet(
            'sprPlay', '/games/kannapillar/assets/sprPlay.png', {
                frameWidth: this.tileSize * 2,
                frameHeight: this.tileSize * 2
            }
        );
           this.load.audio('sfxBtn', '/games/kannapillar/assets/sfxBtn.mp3');
    }
    create(data)
    {
        this.sfx = {
            btn: this.sound.add('sfxBtn')
        };

        this.anims.create(
            {
                key: 'plug0',
                frames: this.anims.generateFrameNumbers('sprPlay', {start: 0, end: 0}),
                frameRate: 4,
                repeat: 1
            }
        );
        this.anims.create(
            {
                key: 'plug3',
                frames: this.anims.generateFrameNumbers('sprPlay', {start: 3, end: 3}),
                frameRate: 4,
                repeat: 1
            }
        );
        this.anims.create(
            {
                key: 'plugAll',
                frames: this.anims.generateFrameNumbers('sprPlay', {start: 0, end: 3}),
                frameRate: 4,
                repeat: -1
            }
        );

        this.title = this.add.text(
            this.game.config.width * 0.5, 75, 'GAME OVER', {
                fontFamily: 'monospace',
                fontSize: 60,
                fontStyle: 'bold',
                color: '#d2b2ff',
                stroke: '#ffffff',
                strokeThickness: 5,
                align: 'center'
            }
        );
        this.title.setOrigin(0.5);

        this.score = this.add.text(
            this.game.config.width * 0.5, 175, 'Snacks for Kanna: ' + data.score, {
                fontFamily: 'monospace',
                fontSize: 50,
                fontStyle: 'bold',
                color: '#d2b2ff',
                stroke: '#ffffff',
                strokeThickness: 5,
                align: 'center'
            }
        );
        this.score.setOrigin(0.5);

        this.slogan = this.add.text(
            this.game.config.width * 0.5, 275, 'YOU ARE WICKED', {
                fontFamily: 'monospace',
                fontSize: 60,
                fontStyle: 'bold',
                color: '#d2b2ff',
                stroke: '#ffffff',
                strokeThickness: 5,
                align: 'center'
            }
        );
        this.slogan.setOrigin(0.5);

        this.btnPlay = this.add.sprite(
            this.game.config.width * 0.5,
            415,
            'sprPlay'
        );
        this.btnPlay.setInteractive();
        this.btnPlay.on(
            'pointerover', function () {
                this.pointerOver();
            }, this
        );
        this.btnPlay.on(
            'pointerout', function () {
                this.pointerOut();
            }, this
        );
        this.btnPlay.on(
            'pointerdown', function () {
                this.btnPlay.anims.play('plugAll', true);
                this.sfx.btn.play();
            }, this
        );
        this.btnPlay.on(
            'pointerup', function () {
                this.btnPlay.anims.play('plug3', true);
                // this.scene.start("SceneMainMenu");
                // keyboard control not working, because scene is instantiated only once
                location.reload(true);
            }, this
        );

        this.btnText = this.add.text(
            this.game.config.width * 0.5, 525, 'RESET', {
                fontFamily: 'monospace',
                fontSize: 48,
                fontStyle: 'bold',
                color: '#d2b2ff',
                stroke: '#ffffff',
                strokeThickness: 5,
                align: 'center'
            }
        );
        this.btnText.setOrigin(0.5);
        this.btnText.setInteractive();
        this.btnText.on(
            'pointerover', function () {
                this.pointerOver();
            }, this
        );
        this.btnText.on(
            'pointerout', function () {
                this.pointerOut();
            }, this
        );
        this.btnText.on(
            'pointerup', function () {
                location.reload(true);
            }, this
        );
    }
    pointerOver()
    {
        this.btnText.setStyle(
            {
                color: '#ffffff',
                stroke: '#d2b2ff',
                strokeThickness: 7
            }
        );
        this.btnPlay.anims.play('plugAll', true);
        this.sfx.btn.play();
    }
    pointerOut()
    {
        this.btnText.setStyle(
            {
                color: '#d2b2ff',
                stroke: '#ffffff',
                strokeThickness: 5
            }
        );
        this.btnPlay.anims.play('plug0', true);
    }
}