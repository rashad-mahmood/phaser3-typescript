import { MainScene } from './scenes/main-scene';

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'My Game',
  version: '1.0',
  height: 768,
  width: 1700,
  scale: {
    parent: 'game',
    mode: Phaser.Scale.FIT,
  },
  backgroundColor: 0xd3d3d3,
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [MainScene]
};
