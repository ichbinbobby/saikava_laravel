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
        this.load.spritesheet("sprBody", "/games/kannapillar/assets/sprBody.png", {
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
            key: "sprHead",
            frames: this.anims.generateFrameNumbers("sprHead"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "sprBody",
            frames: this.anims.generateFrameNumbers("sprBody"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "sprEat",
            frames: this.anims.generateFrameNumbers("sprEat"),
            frameRate: 20,
            repeat: -1
        });

        this.player = new Player(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            "sprHead"
        );

        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }
    update() {
        if (!this.player.getData("isDead")) {
            this.player.update();
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
        }
    }
}