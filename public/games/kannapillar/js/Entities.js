class Entity extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, type) {
        super(scene, x, y, key);
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setData("type", type);
        this.setData("isDead", false);
    }
}

class Player extends Entity {
    constructor(scene, x, y, key) {
        super(scene, x, y, key, "Player");
        this.setData("speed", 100);
        this.moveX = 100;
        this.moveY = 0;
    }
    moveUp() {
        //this.body.velocity.y -= this.getData("speed");
        this.moveX = 0;
        this.moveY = -100;
    }
    moveDown() {
        //this.body.velocity.y += this.getData("speed");
        this.moveX = 0;
        this.moveY = 100;
    }
    moveLeft() {
        //this.body.velocity.x -= this.getData("speed");
        this.moveX = -100;
        this.moveY = 0;
    }
    moveRight() {
        //this.body.velocity.x += this.getData("speed");
        this.moveX = 100;
        this.moveY = 0;
    }
    update() {
        // set constant movement here
        this.body.setVelocity(this.moveX, this.moveY); //move right
        this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
        this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);   
    }
}