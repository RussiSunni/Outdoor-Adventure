class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
        this.textNum = 0;
        this.bgNum = 0;
    }
    preload() {
        //load our images or sounds 
        this.load.image("fridge", "assets/Backgrounds/Town/fridge.png");
    }

    create() {

        // Background.        
        this.bg = this.add.image(0, 0, 'fridge')
            .setOrigin(0)

        this.bgDisplay();
    }

    bgDisplay() {
        this.bg.displayWidth = this.sys.canvas.width;
        this.bg.displayHeight = this.sys.canvas.height;
    }

    onRightButtonDown() {
        this.scene.start("Scene2");
    }

    onForwardButtonDown() {
        //this.scene.start("Scene2");
    }
}