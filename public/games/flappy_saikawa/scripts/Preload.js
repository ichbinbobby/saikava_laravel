var preloadState = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function Preload(){
        Phaser.Scene.call(this, {key: 'Preload'});
    },
    preload: function() {
    // Preload images for this state
      this.load.image('background',
        '/games/flappy_saikawa/assets/background_school.png');
    },

    create: function() {
        console.log("Preload");
        game.scene.start('MainMenu');

        let bg = this.add.sprite(0, 0, 'background');
        bg.setOrigin(0, 0);
    },
    update: function() {
        // Update objects & variables
    }
});

// Add scene to list of scenes
myGame.scenes.push(preloadState);
