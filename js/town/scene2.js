export default class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
        this.imageList = []
        this.textNum = 0;
        this.bgNum = 0;
        this.isFoodChosen = false;
        this.clicks = 0;
    }
    preload() {
        //load our images or sounds 
        this.load.image("fridge", "assets/Backgrounds/Town/fridge.png");
        this.load.image("donuts", "assets/Images/donuts.png");
        this.load.image("sandwich", "assets/Images/sandwich.png");
    }

    create() {
        // BG 1 --------------------------------------------
        this.background = this.add.image(0, 0, "fridge")
            .setOrigin(.0, 0);
        this.background.displayWidth = this.sys.canvas.width;
        this.background.displayHeight = this.sys.canvas.height;

        this.input.on('pointerdown',
            function () {
                if (this.isFoodChosen) {
                    this.clicks++;
                    if (this.clicks == 2)
                        this.scene.start("Scene3");
                }
            }, this);

        this.donuts = this.add.sprite(0, 0, 'donuts').setOrigin(0.5)
        this.donuts.displayWidth = this.sys.canvas.width / 5
        this.donuts.displayHeight = this.sys.canvas.height / 10
        this.donuts.setPosition(this.sys.canvas.width / 3.5, this.sys.canvas.height / 1.7)

        this.donuts.setInteractive();
        this.donuts.on("pointerdown", this.onDonutsButtonDown, this);

        this.sandwich = this.add.sprite(0, 0, 'sandwich').setOrigin(0.5)
        this.sandwich.displayWidth = this.sys.canvas.width / 6
        this.sandwich.displayHeight = this.sys.canvas.height / 12
        this.sandwich.setPosition(this.sys.canvas.width / 4.7, this.sys.canvas.height / 1.3)

        this.sandwich.setInteractive();
        this.sandwich.on("pointerdown", this.onSandwichButtonDown, this);
    }

    onDonutsButtonDown() {
        this.textBg = this.add.rectangle(0, 700, 540, 260, '#000000', 0.5).setOrigin(0);
        this.narrative = this.add.text(20, 720, 'You choose the donuts.', { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
        this.donuts.setAlpha(0)
        this.isFoodChosen = true
    }

    onSandwichButtonDown() {
        this.textBg = this.add.rectangle(0, 700, 540, 260, '#000000', 0.5).setOrigin(0);
        this.narrative = this.add.text(20, 720, 'You choose the sandwich.', { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
        this.sandwich.setAlpha(0)
        this.isFoodChosen = true
    }
}