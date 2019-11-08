let config = {
    type: Phaser.WEBGL,
    width: 1200,
    height: 600,
    parent: 'game_container',
    physics: {
        default: 'arcade'
            },
            scene: [
            SceneStart,
            SceneMainMenu,
            SceneMain,
            SceneGameOver
            ],
            pixelArt: true,
            roundPixels: true
            };
            let game = new Phaser.Game(config);