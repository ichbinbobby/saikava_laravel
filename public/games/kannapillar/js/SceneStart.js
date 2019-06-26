class SceneStart extends Phaser.Scene {
    constructor() {
        super({ key: 'SceneStart' });
    }
    preload() {
        this.load.image('chocolate', '/games/kannapillar/assets/chocolate.png');
    }
    create() {
        this.startBtn = this.add.sprite(
            this.game.config.width * 0.5,
            250,
            'chocolate'
        );
        this.startBtn.setInteractive();
        this.startBtn.on('pointerup', function() {
            this.scene.start('SceneMainMenu');
        }, this);

        this.text = this.add.text(this.game.config.width * 0.5, 380, 'CLICK ME', {
            fontFamily: 'monospace',
            fontSize: 48,
            fontStyle: 'bold',
            color: '#d2b2ff',
            stroke: '#ffffff',
            strokeThickness: 5,
            align: 'center'
        });
        this.text.setOrigin(0.5);
        this.text.setInteractive();
        this.text.on('pointerup', function() {
            this.scene.start('SceneMainMenu');
        }, this);
    }
}
// This class only exists to start the AudioContext. For further information:
// https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio