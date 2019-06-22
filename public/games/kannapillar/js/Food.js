class Food extends Entity {
    constructor(scene, x, y, key) {
        super(scene, x, y, key, 'Food');
    }
    update() {
        this.x = this.gridPosX * this.scene.tileSize;
        this.y = this.gridPosY * this.scene.tileSize;
    }
}
