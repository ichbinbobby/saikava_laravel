class SceneMainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "SceneMainMenu" });
    }
    create() {
        this.title = this.add.text(this.game.config.width * 0.5, 300, "KANNAPILLAR", {
            fontFamily: 'monospace',
            fontSize: 48,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        });
        this.title.setOrigin(0.5);
        this.scene.start("SceneMain");
    }
}