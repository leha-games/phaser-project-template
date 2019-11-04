import Phaser from "phaser";
import logoImg from "./assets/logo.png";

const aspectRatio = 16 / 9;
const configWidth = 800;
const configHeight = configWidth * aspectRatio;

const config = {
  type: Phaser.AUTO,
  width: configWidth,
  height: configHeight,
  scene: {
    preload: preload,
    create: create
  },
  scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      parent: 'game',
      width: configWidth,
      height: configHeight
  }
};

function initApp() {
    const game = new Phaser.Game(config);
    window.focus();
}

if (( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function preload() {
  this.load.image("logo", logoImg);
}

function create() {
  const logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
