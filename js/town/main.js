var game;
window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 540,
        height: 960,
        parent: 'phaser-game',

        scale: {
            mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
        },


        scene: [Scene1, Scene2, Scene3, Scene4]
    };
    game = new Phaser.Game(config);
}