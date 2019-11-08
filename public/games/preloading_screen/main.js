var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game_container',
    scene: {
        preload: preload,
        create: create
    }
};

// Initialize Phaser
var game = new Phaser.Game(config);

function preload()
{
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text(
        {
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        }
    );
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text(
        {
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        }
    );
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text(
        {
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        }
    );
    assetText.setOrigin(0.5, 0.5);

    this.load.image(
        'logo',
        '/games/preloading_screen/assets/zenvalogo.png'
    );
    for (var i = 0; i < 500; i++) {
        this.load.image(
            'logo'+i,
            '/games/preloading_screen/assets/zenvalogo.png'
        );
    }

    // event listeners
    this.load.on(
        'progress', function (value) {
            console.log(value);
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        }
    );

    this.load.on(
        'fileprogress', function (file) {
            console.log(file);
            assetText.setText('Loading asset: ' + file.src);
        }
    );

    this.load.on(
        'complete', function () {
            console.log('complete');
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        }
    );
}

function create()
{
    var logo = this.add.image(400, 300, 'logo');
}
