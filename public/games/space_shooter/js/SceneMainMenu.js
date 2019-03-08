class SceneMainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "SceneMainMenu" });
    }
    preload() {
        this.load.image("sprBtnPlay", "/games/space_shooter/assets/sprBtnPlay.png");
        this.load.image("sprBtnPlayHover", "/games/space_shooter/assets/sprBtnPlayHover.png");
        this.load.image("sprBtnPlayDown", "/games/space_shooter/assets/sprBtnPlayDown.png");
        this.load.image("sprBtnRestart", "/games/space_shooter/assets/sprBtnRestart.png");
        this.load.image("sprBtnRestartHover", "/games/space_shooter/assets/sprBtnRestartHover.png");
        this.load.image("sprBtnRestartDown", "/games/space_shooter/assets/sprBtnRestartDown.png");
        this.load.audio("sndBtnOver", "/games/space_shooter/assets/sndBtnOver.wav");
        this.load.audio("sndBtnDown", "/games/space_shooter/assets/sndBtnDown.wav");
    }
    create() {
        this.scene.start("SceneMain");
    }
}