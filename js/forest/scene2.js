class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }
    preload() {
        //load our images or sounds 
        this.load.image("cabinBG", "assets/cabin.png");
        this.load.image("moveLeft", "assets/UI/moveLeftButton.png");
        this.load.image("moveRight", "assets/UI/moveRightButton.png");
        this.load.image("moveForward", "assets/UI/moveForwardButton.png");
    }
    create() {

        // Background.        
        const bg = this.add.image(0, 0, 'cabinBG')
            .setOrigin(0)

        bg.displayWidth = this.sys.canvas.width;
        bg.displayHeight = this.sys.canvas.height;

        // Left button.
        this.leftBtn = this.add.image(60, game.config.height - 60, "moveLeft");
        this.leftBtn.setInteractive();
        this.leftBtn.on("pointerdown", this.onLeftButtonDown, this);

        // Right button.
        this.rightBtn = this.add.image(game.config.width - 60, game.config.height - 60, "moveRight");
        this.rightBtn.setInteractive();
        this.rightBtn.on("pointerdown", this.onRightButtonDown, this);

        // Forward button.
        this.fwdBtn = this.add.image(game.config.width / 2, game.config.height - 60, "moveForward");
        this.fwdBtn.setInteractive();
        this.fwdBtn.on("pointerdown", this.onForwardButtonDown, this);
    }

    onLeftButtonDown() {
        this.scene.start("Scene1");
    }

    onRightButtonDown() {
        this.scene.start("Scene1");
    }

    onForwardButtonDown() {
        this.scene.start("Scene3");
    }
}