class Entity extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, type) {
        super(scene, x, y, key);
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.body.collideWorldBounds = true;
        this.setData("type", type);
        this.setData("isDead", false);
    }
}

class Player extends Entity {
    constructor(scene, x, y, key) {
        super(scene, x, y, key, "Player");
        this.speed = 100;
        this.moveX = this.speed;
        this.moveY = 0;
    }
    moveUp() {
        this.moveX = 0;
        this.moveY = -this.speed;
    }
    moveDown() {
        this.moveX = 0;
        this.moveY = this.speed;
    }
    moveLeft() {
        this.moveX = -this.speed;
        this.moveY = 0;
    }
    moveRight() {
        this.moveX = this.speed;
        this.moveY = 0;
    }
    update() {
        // set constant movement here
        this.body.setVelocity(this.moveX, this.moveY); //move right
        this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
        this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);   
    }
}