var game;
window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 600,
        height: 900,

        scale: {
            mode: Phaser.Scale.FIT,
            max: {
                width: 600,
                height: 900
            },
        },

        scene: [Scene1, Scene2, Scene3]
    };
    game = new Phaser.Game(config);
}