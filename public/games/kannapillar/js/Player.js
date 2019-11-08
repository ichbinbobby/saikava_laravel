class Player extends Entity {
    constructor(scene, x, y, key)
    {
        super(scene, x, y, key, 'Player');
        this.moveX = 1;
        this.moveY = 0;
        this.directionUp = false;
        this.directionDown = false;
        this.directionLeft = false;
        this.directionRight = true;
    }
    moveUp()
    {
        if (this.directionLeft || this.directionRight) {
            if (this.directionRight) {
                this.angle = -90;
            }
            else {
                this.angle = 90;
            }
            this.moveX = 0;
            this.moveY = -1;
            this.directionUp = true;
            this.directionLeft = false;
            this.directionRight = false;
        }
    }
    moveDown()
    {
        if (this.directionLeft || this.directionRight) {
            if (this.directionRight) {
                this.angle = 90;
            }
            else {
                this.angle = -90;
            }
            this.directionDown = true;
            this.directionLeft = false;
            this.directionRight = false;
            this.moveX = 0;
            this.moveY = 1;
        }
    }
    moveLeft()
    {
        if (this.directionUp || this.directionDown) {
            this.angle = 0;
            this.directionLeft = true;
            this.directionUp = false;
            this.directionDown = false;
            this.moveX = -1;
            this.moveY = 0;
            this.flipX = true;
        }
    }
    moveRight()
    {
        if (this.directionUp || this.directionDown) {
            this.angle = 0;
            this.directionRight = true;
            this.directionUp = false;
            this.directionDown = false;
            this.moveX = 1;
            this.moveY = 0;
            this.flipX = false;
        }
    }
    update()
    {
        this.gridPosX += this.moveX;
        this.gridPosY += this.moveY;
        if (this.gridPosY * this.scene.tileSize > config.height) {
            this.gridPosY -= Math.floor(config.height / this.scene.tileSize);
        }
        else if (this.gridPosY < 0) {
            this.gridPosY += Math.floor(config.height / this.scene.tileSize);
        }
        if (this.gridPosX * this.scene.tileSize > config.width) {
            this.gridPosX -= Math.floor(config.width / this.scene.tileSize);
        }
        else if (this.gridPosX < 0) {
            this.gridPosX += Math.floor(config.width / this.scene.tileSize);
        }
        this.x = this.gridPosX * this.scene.tileSize;
        this.y = this.gridPosY * this.scene.tileSize;
    }
}
