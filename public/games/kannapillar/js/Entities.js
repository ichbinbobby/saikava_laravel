class Entity extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, type) {
        super(scene, x, y, key);
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setData("type", type);
        this.setData("isDead", false);
        this.x2 = 0;
        this.y2 = 0;
    }
}

class Player extends Entity {
    constructor(scene, x, y, key) {
        super(scene, x, y, key, 'Player');
        this.speed = 200;
        this.moveX = this.speed;
        this.moveY = 0;
        this.directionUp = false;
        this.directionDown = false;
        this.directionLeft = false;
        this.directionRight = true; // Player starts moving right
    }
    moveUp() {
        if(this.directionLeft || this.directionRight){
            if(this.directionRight){
                this.angle = -90;
            } else {
                this.angle = 90;
            }
            this.moveX = 0;
            this.moveY = -this.speed;
            this.directionUp = true;
            this.directionLeft = false;
            this.directionRight = false;
        } 
    }
    moveDown() {
        if(this.directionLeft || this.directionRight){
            if(this.directionRight){
                this.angle = 90;
            } else {
                this.angle = -90;
            }
            this.directionDown = true;
            this.directionLeft = false;
            this.directionRight = false;
            this.moveX = 0;
            this.moveY = this.speed;
        }
    }
    moveLeft() {
        if(this.directionUp || this.directionDown){
            this.angle = 0;
            this.directionLeft = true;
            this.directionUp = false;
            this.directionDown = false;
            this.moveX = -this.speed;
            this.moveY = 0;
            this.flipX = true;
        }
    }
    moveRight() {
        if(this.directionUp || this.directionDown){
            this.angle = 0;
            this.directionRight = true;
            this.directionUp = false;
            this.directionDown = false;
            this.moveX = this.speed;
            this.moveY = 0;
            this.flipX = false;
        }
    }
    update() {
        this.body.setVelocity(this.moveX, this.moveY);
        if(this.y > config.height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = config.height;
        }
        if(this.x > config.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = config.width;
        }
        this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
        this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
        
        if(this.x != this.x2 && this.y != this.y2){
            this.x2 = this.x;
            this.y2 = this.y;
        }   
    }
}

class Tail extends Entity {
    constructor(scene, x, y, key){
        super(scene, x, y, key, 'Tail');
    }
    update() {
        //TODO
    }
}

class Food extends Entity {
    constructor(scene, x, y) {
        super(scene, x, y, 'Food');
    }
}