class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
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
        // Background.        
        this.bg = this.add.image(0, 0, 'fridge')
            .setOrigin(0)

        this.bgDisplay();

        this.input.on('pointerdown',
            function () {
                if (this.isFoodChosen) {
                    this.clicks++;
                    if (this.clicks == 2)
                        this.scene.start("Scene3");
                }
            }, this);

        this.donuts = this.add.image(150, 565, 'donuts')
        this.donuts.setScale(0.5)
        this.donuts.setInteractive();
        this.donuts.on("pointerdown", this.onDonutsButtonDown, this);

        this.sandwich = this.add.image(115, 740, 'sandwich')
        this.sandwich.setScale(0.4)
        this.sandwich.setInteractive();
        this.sandwich.on("pointerdown", this.onSandwichButtonDown, this);
    }

    bgDisplay() {
        this.bg.displayWidth = this.sys.canvas.width;
        this.bg.displayHeight = this.sys.canvas.height;
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