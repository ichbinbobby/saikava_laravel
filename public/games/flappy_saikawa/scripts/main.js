var config = {
    type: Phaser.AUTO,
    width: 1334,
    height: 750,
    parent: 'game_container',
    pixelArt: true,
    physics: {
        default: "arcade",
            arcade: {
                gravity: { y: 500 },
                debug: true
            }
            },
            scene: {
                key: 'main',
                preload: preload,
                create: create,
                update: update
            }
            };

            // Initialize Phaser
            var game = new Phaser.Game(config);

            function preload()
            {
                    this.load.image(
                        'background',
                        '/games/flappy_saikawa/assets/background_school.png'
                    );
                    this.load.image(
                        'player',
                        '/games/flappy_saikawa/assets/flappy.png'
                    );
                    this.load.image(
                        'pipeUp',
                        '/games/flappy_saikawa/assets/pipeUp.png'
                    );
                    this.load.image(
                        'pipeDown',
                        '/games/flappy_saikawa/assets/pipeDown.png'
                    );
            }

            gameScene.create = function () {
                    let bg = this.add.sprite(0, 0, 'background');
                    bg.setOrigin(0, 0);

                    // player
                    this.player = this.add.sprite(150, this.sys.game.config.height / 2, 'player');

                    // scale down
                    this.player.setScale(0.20);

                    // group of pipes
                    this.pipesTop = this.add.group(
                        {
                            key: 'pipeDown',
                            repeat: 5,
                            setXY: {
                                x: 300,
                                y: 90,
                                stepX: 200,
                                stepY: 0
                            }
                        }
                    )

                    this.pipesBottom = this.add.group(
                        {
                            key: 'pipeUp',
                            repeat: 5,
                            setXY: {
                                x: 300,
                                y: 600,
                                stepX: 200,
                                stepY: 0
                            }
                        }
                    )

                    Phaser.Actions.ScaleXY(this.pipesTop.getChildren(), -0.5, -0.5);
                    Phaser.Actions.ScaleXY(this.pipesBottom.getChildren(), -0.5, -0.5);

                    // set speeds
                    Phaser.Actions.Call(
                        this.pipesTop.getChildren(), function (enemy) {
                            enemy.speed = this.pipeSpeed;
                        }, this
                    );
                    Phaser.Actions.Call(
                        this.pipesDown.getChildren(), function (enemy) {
                            enemy.speed = this.pipeSpeed;
                        }, this
                    );
            }

            gameScene.update = function () {

                      // check for active input
                if (this.input.activePointer.isDown) {

                }
            }
