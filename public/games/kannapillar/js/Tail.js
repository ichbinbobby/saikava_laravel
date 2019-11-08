class Tail extends Entity {
    constructor(scene, x, y, key)
    {
        super(scene, x, y, key, 'Tail');
        this._gridPosX = x;
        this._gridPosY = y;
    }
    set gridPosX(value)
    {
        this._gridPosX = value;
        this.x = value * this.scene.tileSize;
    }
    get gridPosX()
    {
        return this._gridPosX;
    }
    set gridPosY(value)
    {
        this._gridPosY = value;
        this.y = value * this.scene.tileSize;
    }
    get gridPosY()
    {
        return this._gridPosY;
    }
}
