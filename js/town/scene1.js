class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
        this.textNum = 0;
        this.bgNum = 0;
    }
    preload() {
        //load our images or sounds 
        this.load.image("apartment", "assets/Backgrounds/Town/apartment-2.png");
        this.load.image("elevator", "assets/Backgrounds/Town/elevator-2.png");
        this.load.image("hallway", "assets/Backgrounds/Town/hallway.png");
        this.load.image("photo", "assets/Backgrounds/Town/photo-closeup.png");
        this.load.image("kitchen", "assets/Backgrounds/Town/kitchen.png");
        this.load.image("cash", "assets/Backgrounds/Town/cash.png");
    }

    create() {

        // Background.        
        this.bg = this.add.image(0, 0, 'apartment')
            .setOrigin(0)

        this.bgDisplay();

        this.textBg = this.add.rectangle(0, 700, 540, 260, '#000000', 0.5).setOrigin(0);
        this.narrative = this.add.text(20, 720, 'Our home.', { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24 })

        this.textNum = 2;

        this.input.on('pointerdown',
            function () {
                if (this.textNum == 2) {
                    this.narrative.setText('The big and bustling city.')
                    this.textNum = 3;
                    this.bgNum = 2;
                }
                else if (this.bgNum == 2) {

                    this.bg = this.add.image(0, 0, 'elevator')
                        .setOrigin(0)
                    this.bgDisplay();

                    this.textNum = 4;
                    this.textBg = this.add.rectangle(0, 700, 540, 260, '#000000', 0.5).setOrigin(0);
                    this.narrative = this.add.text(20, 720, 'Another boring day. Nothing ever happens here.', { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })

                    this.bgNum = 3;
                }
                else if (this.bgNum == 3) {
                    this.bg = this.add.image(0, 0, 'hallway')
                        .setOrigin(0)
                    this.bgDisplay();

                    this.textBg = this.add.rectangle(0, 700, 540, 260, '#000000', 0.5).setOrigin(0);
                    if (this.textNum == 4) {
                        this.narrative = this.add.text(20, 720, "I wonder if Grandma's home.", { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
                        this.textNum = 5;
                    }
                    else if (this.textNum == 5) {
                        this.narrative = this.add.text(20, 720, "Hmm, seems like the place is empty.", { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
                        this.textNum = 6;
                        this.bgNum = 4;
                    }
                }
                else if (this.bgNum == 4) {
                    this.bg = this.add.image(0, 0, 'photo')
                        .setOrigin(0)
                    this.bgDisplay();

                    this.textBg = this.add.rectangle(0, 700, 540, 260, '#000000', 0.5).setOrigin(0);
                    if (this.textNum == 6) {
                        this.narrative = this.add.text(20, 720, "I wish I could go to wild places, like Grandpa used to.", { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
                        this.textNum = 7;
                    }
                    else if (this.textNum == 7) {
                        this.narrative = this.add.text(20, 720, "No school, homework. No one telling me what to do.", { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
                        this.textNum = 8;
                    }
                    else if (this.textNum == 8) {
                        this.narrative = this.add.text(20, 720, "What an exciting life. Nothing ever happens in my life...", { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
                        this.textNum = 8;
                        this.bgNum = 5;
                    }
                }
                else if (this.bgNum == 5) {
                    this.bg = this.add.image(0, 0, 'kitchen')
                        .setOrigin(0)
                    this.bgDisplay();
                    this.bgNum = 6;

                    this.textBg = this.add.rectangle(0, 700, 540, 260, '#000000', 0.5).setOrigin(0);
                    this.narrative = this.add.text(20, 720, "I'm hungry. I'll have...", { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
                }
                else if (this.bgNum == 6) {
                    this.bg = this.add.image(0, 0, 'kitchen')
                        .setOrigin(0)
                    this.bgDisplay();
                    this.bgNum = 6;

                    this.textBg = this.add.rectangle(0, 700, 540, 260, '#000000', 0.5).setOrigin(0);
                    this.narrative = this.add.text(20, 720, "I'm hungry. I'll have...", { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
                    this.scene.start("Scene2");
                }
            }, this
        );




    }

    bgDisplay() {
        this.bg.displayWidth = this.sys.canvas.width;
        this.bg.displayHeight = this.sys.canvas.height;
    }

    //     /**
    //  *
    //  * @param {string} text
    //  */
    //     typewriteText(text) {
    //         const length = text.length
    //         let i = 0
    //         this.time.addEvent({
    //             callback: () => {
    //                 this.narrative.text += text[i]
    //                 ++i
    //             },
    //             repeat: length - 1,
    //             delay: 200
    //         })
    //     }

    onRightButtonDown() {
        this.scene.start("Scene2");
    }

    onForwardButtonDown() {
        //this.scene.start("Scene2");
    }
}