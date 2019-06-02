class SceneMain extends Phaser.Scene {
    constructor() {
        super({ key: "SceneMain" });
    }
    preload() {
        this.load.image('background', '/games/kannapillar/assets/background.png');
        this.load.image("chocolate", "/games/kannapillar/assets/chocolate.png");
        this.load.spritesheet("sprHead", "/games/kannapillar/assets/sprHead.png", {
            frameWidth: 75,
            frameHeight: 75
        });
        this.load.spritesheet("sprTail", "/games/kannapillar/assets/sprTail.png", {
            frameWidth: 75,
            frameHeight: 75
        });
        this.load.spritesheet("sprEat", "/games/kannapillar/assets/sprEat.png", {
            frameWidth: 75,
            frameHeight: 75
        });
    }
    create() {
        let bg = this.add.sprite(0, 0, 'background');
        bg.setOrigin(0, 0);

        this.anims.create({
            key: 'headWiggle',
            frames: this.anims.generateFrameNames('sprHead', {start: 0, end: 1}),
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'tailWiggle',
            frames: this.anims.generateFrameNumbers('sprTail', {start: 0, end: 1}),
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'eat',
            frames: this.anims.generateFrameNumbers('sprEat', {start: 0, end: 1}),
            frameRate: 4,
            repeat: 1
        });

        this.player = new Player(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            "sprHead"
        );
        // TODO
        this.tail = new Tail(
            this,
            this.player.x,
            this.player.y,
            "sprTail"
        )

        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }
    update() {
        if (!this.player.getData("isDead")) {
            this.player.update();
            this.player.anims.play('headWiggle', true);
            if (this.keyW.isDown) {
                this.player.moveUp();
            }
            else if (this.keyS.isDown) {
                this.player.moveDown();
            }
            if (this.keyA.isDown) {
                this.player.moveLeft();
            }
            else if (this.keyD.isDown) {
                this.player.moveRight();
            }
            this.tail.anims.play('tailWiggle', true);
            //TODO
            this.tail.update();
            this.tail.x = this.player.x;
            this.tail.y = this.player.y;
        }
    }
}