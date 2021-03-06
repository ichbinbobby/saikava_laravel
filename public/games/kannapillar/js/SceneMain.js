class SceneMain extends Phaser.Scene {
    constructor()
    {
        super({ key: 'SceneMain' });
        this.tileSize = 75;
        this.frameFree = false;
        this.fps = 2;

        this.actionTaken = false;
        this.action = null;
        this.score = 0;

        setInterval(
            ()=> {
                this.frameFree = true;
            }, 1000.0 / this.fps
        );
    }
    preload()
    {
        this.load.image('background', '/games/kannapillar/assets/background.png');
        this.load.image('chocolate', '/games/kannapillar/assets/chocolate.png');
        this.load.spritesheet(
            'sprHead', '/games/kannapillar/assets/sprHead.png', {
                frameWidth: this.tileSize,
                frameHeight: this.tileSize
            }
        );
        this.load.spritesheet(
            'sprTail', '/games/kannapillar/assets/sprTail.png', {
                frameWidth: this.tileSize,
                frameHeight: this.tileSize
            }
        );
        this.load.audio('sfxEat', '/games/kannapillar/assets/sfxEat.mp3');
        this.load.audio('sfxLoop', '/games/kannapillar/assets/sfxLoop.mp3');
        this.load.audio('sfxWicked', '/games/kannapillar/assets/sfxWicked.mp3');
    }
    create()
    {
        let bg = this.add.sprite(0, 0, 'background');
        bg.setOrigin(0, 0);

        this.sfx = {
            eat: this.sound.add('sfxEat'),
            backgroundMusic: this.sound.add('sfxLoop'),
            gameOver: this.sound.add('sfxWicked')
        };
        this.sfx.backgroundMusic.loop = true;
        this.sfx.backgroundMusic.play();

        this.anims.create(
            {
                key: 'headWiggle',
                frames: this.anims.generateFrameNames('sprHead', {start: 0, end: 1}),
                frameRate: 4,
                repeat: -1
            }
        );
        this.anims.create(
            {
                key: 'eat',
                frames: this.anims.generateFrameNumbers('sprHead', {start: 2, end: 3}),
                frameRate: 2,
                repeat: 1
            }
        );
        this.anims.create(
            {
                key: 'tailWiggle',
                frames: this.anims.generateFrameNumbers('sprTail', {start: 0, end: 1}),
                frameRate: 4,
                repeat: -1
            }
        );

        this.player = new Player(
            this,
            Math.floor(this.game.config.width / this.tileSize * 0.5) + 0.5,
            Math.floor(this.game.config.height / this.tileSize * 0.5) + 0.5,
            'sprHead'
        );
        this.player.setDepth(1);
        this.player.tail = [];
        for (let i = 0; i < 3; i++) {
            this.grow();
        }

        this.food = new Food(
            this,
            Math.floor(this.game.config.width / this.tileSize * 0.8) + 0.5,
            Math.floor(this.game.config.height / this.tileSize * 0.2) + 0.5,
            'chocolate'
        );

        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.keyW.on('down', this.takeAction.bind(this, this.player.moveUp.bind(this.player)));
        this.keyS.on('down', this.takeAction.bind(this, this.player.moveDown.bind(this.player)));
        this.keyA.on('down', this.takeAction.bind(this, this.player.moveLeft.bind(this.player)));
        this.keyD.on('down', this.takeAction.bind(this, this.player.moveRight.bind(this.player)));
    }
    update(time, delta)
    {
        if(!this.frameFree) {
            return;
        }
        this.frameFree = false;

        for(let i = this.player.tail.length - 1; i > 0; i--){
            this.player.tail[i].gridPosX = this.player.tail[i-1].gridPosX;
            this.player.tail[i].gridPosY = this.player.tail[i-1].gridPosY;

            if(this.player.x == this.player.tail[i].x && this.player.y == this.player.tail[i].y) {
                this.sfx.gameOver.play();
                this.scene.start('SceneGameOver', {score: this.score});
            }
        }

        this.player.tail[0].gridPosX = this.player.gridPosX;
        this.player.tail[0].gridPosY = this.player.gridPosY;

        if (!this.player.getData('isDead')) {
            this.player.update();
            this.player.anims.play('headWiggle', true);

            if(((this.difference(this.food.x, this.player.x) == this.tileSize ) 
                && this.food.y == this.player.y) 
                || ((this.difference(this.food.y, this.player.y) == this.tileSize ) 
                && this.food.x == this.player.x)
            ) {
                this.player.anims.play('eat', true);
                this.sfx.eat.play();
            }

            if(this.food.x == this.player.x && this.food.y == this.player.y) {
                this.grow();
                this.relocateFood();
                this.score += 1;
            }
        }
        this.actionTaken = false;
    }
    takeAction(callback)
    {
        if(!this.actionTaken) {
            callback();
        }
        this.actionTaken = true;
    }
    grow()
    {
        let tailPart = new Tail(this, -75, -75, 'sprTail');
        tailPart.anims.play('tailWiggle', true, this.player.tail.length % 2);
        this.player.tail.push(tailPart);
    }
    relocateFood()
    {
        this.food.gridPosX = Math.floor(this.game.config.width / this.tileSize * Math.random()) + 0.5;
        this.food.gridPosY = Math.floor(this.game.config.height / this.tileSize * Math.random()) + 0.5;
        this.food.update();
    }
    difference(a, b)
    {
        return Math.abs(a - b);
    }
}