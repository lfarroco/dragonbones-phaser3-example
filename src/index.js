import Phaser from "phaser";
import dragonBones from "./external/dragonBones";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  plugins: {
    scene: [
      { key: "DragonBones", plugin: dragonBones.phaser.plugin.DragonBonesScenePlugin, mapping: "dragonbone" }
    ]
  },
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {

  // We need to use the name of armature set on dragonbones (the `root` parent)
  this.load.dragonbone(
      "armature_name",
      "src/assets/mana/manachara_tex.png",
      "src/assets/mana/manachara_tex.json",
      "src/assets/mana/manachara_ske.json",
  );
}

function create() {

  const arm = this.add.armature("armature_name", "armature_name");

  window.armature = arm
  arm.x = 400;
  arm.y = 300;
  arm.animation.play("walk");

  // we can access body parts with
  // armature.list[2]
  // armature.list[2].frame.name === "foot"
  // armature.list[2].setTexture("manachara","head")
  // armature.list[2].setTint("0xff33ff")
  // the first argument is the main texture name, the second one is the subtexture 
  // when imported into phaser, the main texture is divided into slices
  // and this API allows us to access by their names instead of coords
}
