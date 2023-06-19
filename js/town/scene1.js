import { app } from '../lib/appScale.js'

export default class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
        this.textNum = 0;
        this.bgNum = 0;
        this.imageList = []
    }
    preload() {
        //load our images or sounds 
        this.load.image("apartment", "assets/Backgrounds/Town/apartment-2.png");
        this.load.image("elevator", "assets/Backgrounds/Town/elevator.png");

    }

    create() {
        // BG 1 --------------------------------------------
        let bg = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'apartment')
        bg.orgWidth = bg.displayWidth
        bg.orgHeight = bg.displayHeight
        bg.update = function () {
            if (app.width * this.orgHeight / this.orgWidth < app.height) {
                this.displayWidth = app.height * this.orgWidth / this.orgHeight
                this.displayHeight = app.height
            } else {
                this.displayWidth = app.width
                this.displayHeight = app.width * this.orgHeight / this.orgWidth
            }
        }

        let textBg = this.add.rectangle(window.innerWidth / 2, window.innerHeight * 2, 540, 260, '#000000', 0.5);
        textBg.orgWidth = textBg.displayWidth
        textBg.orgHeight = textBg.displayHeight
        textBg.update = function () {
            if (app.width * this.orgHeight / this.orgWidth < app.height) {
                this.displayWidth = app.height * this.orgWidth / this.orgHeight
                this.displayHeight = app.height / 2
            } else {
                this.displayWidth = app.width
                this.displayHeight = app.width * this.orgHeight / this.orgWidth
            }
        }

        this.narrative = this.add.text(app.centerX, app.centerY + 600, 'Our home.', { fontFamily: 'Arial', fill: '#ffffff', fontSize: 80, wordWrap: { width: app.width - 15, useAdvancedWrap: true } }).setOrigin(0.5);

        // -------------------------------------------------------------
        this.imageList.push(bg, textBg, this.narrative)

        // all sprite update
        for (let index = 0; index < this.imageList.length; index++) {
            this.imageList[index].update()
        }
        // -------------------------------------------------------------

        this.scale.on('resize', this.resize, this)

        this.cameraUpdate()
        this.resize()

        this.textNum = 2;

        this.input.on('pointerdown',
            function () {
                if (this.textNum == 2) {
                    this.narrative.setText('The big and bustling city.')
                    this.textNum = 3;
                    this.bgNum = 2;
                }
                else if (this.bgNum == 2) {
                    // BG 2 --------------------------------------------
                    bg.setTexture('elevator');
                    this.narrative.setText('Another boring day. Nothing ever happens here.')
                    this.textNum = 4;
                    this.bgNum = 3;
                }
            }, this
        );
    }

    cameraUpdate() {
        app.update()
        const camera = this.cameras.main
        camera.setZoom(app.zoom)
        camera.centerOn(app.centerX, app.centerY)
    }

    resize() {
        this.cameraUpdate()
        // all sprite update
        for (let index = 0; index < this.imageList.length; index++) {
            this.imageList[index].update()
        }
    }

}