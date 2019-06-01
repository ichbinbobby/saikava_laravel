class SceneMain extends Phaser.Scene {
    constructor() {
        super({ key: "SceneMain" });
    }
    preload() {
        this.load.image('background', '/games/kannapillar/assets/background.png');
        this.load.image("chocolate", "/games/kannapillar/assets/chocolate.png");
        this.load.spritesheet("sprHead", "/games/kannapillar/assets/sprHead.png", {
            frameWidth: 150,
            frameHeight: 150
        });
        this.load.spritesheet("sprBody", "/games/kannapillar/assets/sprBody.png", {
            frameWidth: 150,
            frameHeight: 150
        });
        this.load.spritesheet("sprEat", "/games/kannapillar/assets/sprEat.png", {
            frameWidth: 150,
            frameHeight: 150
        });
    }
    create() {
        let bg = this.add.sprite(0, 0, 'background');
        bg.setOrigin(0, 0);
    }
    update() {

    }
}