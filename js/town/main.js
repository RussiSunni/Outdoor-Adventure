var game;
window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 540,
        height: 960,
        parent: 'phaser-game',

        scale: {
            mode: Phaser.Scale.FIT,
        },


        scene: [Scene1, Scene2, Scene3, Scene4]
    };
    game = new Phaser.Game(config);
}