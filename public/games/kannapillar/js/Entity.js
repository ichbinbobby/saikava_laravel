class Entity extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, type)
    {
        super(scene, x * scene.tileSize, y * scene.tileSize, key);
        this.gridPosX = x;
        this.gridPosY = y;
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setData("type", type);
        this.setData("isDead", false);
    }
}
