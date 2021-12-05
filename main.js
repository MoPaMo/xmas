var config = {
    type: Phaser.AUTO,
    width: screen.width,
    height: screen.height,
    physics: {
      default: "arcade",
      arcade: {
        gravity: {
          y: 0,
          x: 0
        },
      },
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    },
  };
  
  var game = new Phaser.Game(config);
  
  
  function preload() {
    this.load.setBaseURL("/assets/");
  
    this.load.image("white", "/white.png");
    this.load.image("avatar", "/Main.png");
  }
  var keys, avatar
  
  function create() {
    this.cameras.main.setSize(screen.width, screen.height);
  
    keys = {
        a: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        w: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
        s: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        d: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
      }
    avatar = this.physics.add.image(400, 100, "avatar");
    avatar.setScale(0.25, 0.25);
    //avatar.setCollideWorldBounds(true);
    this.cameras.main.startFollow(avatar);
    var snow = this.add.particles("white");
  
    snow.createEmitter({
      x: {
        min: 00,
        max: screen.width
      },
      y: 1,
      lifespan: 2000,
      speedY: {
        min: 200,
        max: 400
      },
      scale: {
        start: 0.2,
        end: 0
      },
      quantity: 2,
      blendMode: "ADD",
    });
  
  
  }
  
  function update() {
  
    if (keys['w'].isDown) {
      avatar.y -= 2;
    }
    if (keys['d'].isDown) {
      avatar.x += 2;
    }
    if (keys['a'].isDown) {
        avatar.x -= 2;
      }
      if (keys['s'].isDown) {
        avatar.y += 2;
      }
    
  }