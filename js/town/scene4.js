class Scene4 extends Phaser.Scene {
    constructor() {
        super('Scene4');
        this.textNum = 0;
        this.bgNum = 0;
    }
    preload() {
        //load our images or sounds 
        this.load.image("park-entrance", "assets/Backgrounds/Town/park-entrance.png");
        this.load.image("park", "assets/Backgrounds/Town/park.png");
    }

    create() {

        // Background.        
        this.bg = this.add.image(0, 0, 'park-entrance')
            .setOrigin(0)

        this.bgDisplay();

        this.textBg = this.add.rectangle(0, 700, 540, 260, '#000000', 0.5).setOrigin(0);
        this.narrative = this.add.text(20, 720, 'Nice day', { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24 })

        this.bgNum = 2;

        this.input.on('pointerdown',
            function () {
                if (this.bgNum == 2) {
                    this.bg = this.add.image(0, 0, 'park')
                        .setOrigin(0)
                    this.bgDisplay();
                }
            }, this
        );
    }

    bgDisplay() {
        this.bg.displayWidth = this.sys.canvas.width;
        this.bg.displayHeight = this.sys.canvas.height;
    }
}