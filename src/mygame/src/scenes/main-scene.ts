export class MainScene extends Phaser.Scene {
  private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  private player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private ground: Phaser.GameObjects.TileSprite;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload(): void {
    this.load.image('tile', './assets/dirt_tile.png')
  }


  create(): void {
    this.ground = this.add.tileSprite(0, +this.game.config.height, +this.game.config.width*2, 100, 'tile');
    
    const graphics = this.add.graphics();
    graphics.fillStyle(0x000000).fillRect(0, 0, 60, 100);
    graphics.fillStyle(0xffffff).fillRect(35, 10, 10, 25);
    graphics.fillStyle(0xffa500).fillRect(60, 25, 30, 15);
    graphics.generateTexture('player', 90, 100);
    graphics.destroy();

    this.player = this.physics.add.sprite(150, 1000, 'player');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(500);

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    
  }

  update(): void {
    if(this.cursorKeys.right.isDown) {
      this.player.setVelocityX(300);
    }
    else if (this.cursorKeys.up.isDown && this.player.body.blocked.down) {
      this.player.setVelocityY(-300);
    } else {
      this.player.setVelocityX(0);
    }
    this.ground.tilePositionX += 5;
  }

}
