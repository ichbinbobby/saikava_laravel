class SceneMainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "SceneMainMenu" });
        this.tileSize = 75;
    }
    preload() {
        this.load.image('background', '/games/kannapillar/assets/background.png');
        this.load.spritesheet('sprHead', '/games/kannapillar/assets/sprHead.png', {
            frameWidth: this.tileSize,
            frameHeight: this.tileSize
        });
        this.load.spritesheet('sprTail', '/games/kannapillar/assets/sprTail.png', {
            frameWidth: this.tileSize,
            frameHeight: this.tileSize
        });
        this.load.spritesheet('sprPlay', '/games/kannapillar/assets/sprPlay.png', {
            frameWidth: this.tileSize * 2,
            frameHeight: this.tileSize * 2
        });
        this.load.audio('sfxBtn', '/games/kannapillar/assets/sfxBtn.mp3');
    }
    create() {
        let bg = this.add.sprite(0, 0, 'background');
        bg.setOrigin(0, 0);

        this.sfx = {
            btn: this.sound.add('sfxBtn')
        };

        this.anims.create({
            key: 'headAll',
            frames: this.anims.generateFrameNames('sprHead', {start: 0, end: 3}),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: 'tailWiggle',
            frames: this.anims.generateFrameNumbers('sprTail', {start: 0, end: 1}),
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'plug0',
            frames: this.anims.generateFrameNumbers('sprPlay', {start: 0, end: 0}),
            frameRate: 4,
            repeat: 1
        });
        this.anims.create({
            key: 'plug3',
            frames: this.anims.generateFrameNumbers('sprPlay', {start: 3, end: 3}),
            frameRate: 4,
            repeat: 1
        });
        this.anims.create({
            key: 'plugAll',
            frames: this.anims.generateFrameNumbers('sprPlay', {start: 0, end: 3}),
            frameRate: 4,
            repeat: -1
        });

        this.title = this.add.text(this.game.config.width * 0.5, 125, "THE VERY HUNGRY KANNAPILLAR", {
            fontFamily: 'monospace',
            fontSize: 48,
            fontStyle: 'bold',
            color: '#d2b2ff',
            stroke: '#ffffff',
            strokeThickness: 5,
            align: 'center'
        });
        this.title.setOrigin(0.5);
        this.btnText = this.add.text(this.game.config.width * 0.5, 525, "PLAY", {
            fontFamily: 'monospace',
            fontSize: 48,
            fontStyle: 'bold',
            color: '#d2b2ff',
            stroke: '#ffffff',
            strokeThickness: 5,
            align: 'center'
        });

        this.head = this.add.sprite(
            750,
            this.game.config.height * 0.4,
            'sprHead'
        );
        this.head.anims.play('headAll', true);
        this.tail1 = this.add.sprite(
            675,
            this.game.config.height * 0.4,
            'sprTail'
        );
        this.tail1.anims.play('tailWiggle', true);
        this.tail2 = this.add.sprite(
            600,
            this.game.config.height * 0.4,
            'sprTail'
        );
        this.tail2.anims.play('tailWiggle', true, 1);
        this.tail3 = this.add.sprite(
            525,
            this.game.config.height * 0.4,
            'sprTail'
        );
        this.tail3.anims.play('tailWiggle', true);
        this.tail4 = this.add.sprite(
            450,
            this.game.config.height * 0.4,
            'sprTail'
        );
        this.tail4.anims.play('tailWiggle', true, 1);

        this.btnPlay = this.add.sprite(
            this.game.config.width * 0.5,
            415,
            'sprPlay'
        );
        this.btnPlay.setInteractive();
        this.btnPlay.on('pointerover', function() {
            this.pointerOver();
            this.sfx.btn.play();
        }, this);
        this.btnPlay.on('pointerout', function() {
            this.pointerOut();
        }, this);
        this.btnPlay.on('pointerdown', function() {
            this.btnPlay.anims.play('plugAll', true);
            this.sfx.btn.play();
        }, this);
        this.btnPlay.on('pointerup', function() {
            this.btnPlay.anims.play('plug3', true);
            this.scene.start("SceneMain");
        }, this);

        this.btnText.setOrigin(0.5);
        this.btnText.setInteractive();
        this.btnText.on('pointerover', function() {
            this.pointerOver();
        }, this);
        this.btnText.on('pointerout', function() {
            this.pointerOut();
        }, this);
        this.btnText.on('pointerup', function() {
            this.scene.start("SceneMain");
        }, this);
    }
    pointerOver() {
        this.btnText.setStyle({
            color: '#ffffff',
            stroke: '#d2b2ff',
            strokeThickness: 7
        });
        this.btnPlay.anims.play('plugAll', true);
    }
    pointerOut() {
        this.btnText.setStyle({
            color: '#d2b2ff',
            stroke: '#ffffff',
            strokeThickness: 5
        });
        this.btnPlay.anims.play('plug0', true);
    }
}