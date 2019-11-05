class Player {
  constructor(ctx, width, height, image, gameWidth, gameHeight, keys) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = image;

    this.posX = 680;
    this.posY = 535;
    this.posY0 = gameHeight * 0.98 - this.height;
    this.vy = 50;
    this.vx = 50;
    this.gravity = 0;
    this.gameWidth = gameWidth;

    //   this.frames = 2;
    this.framesIndex = 0;

    this.keys = keys;
    this.bullets = [];
    this.setListeners();
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, 100,70);
  }

  move() {
    // if(this.posY <= this.posY0) {
    //   this.posY += this.vy;
    //   this.vy += this.gravity;
    // } else {
    //   this.vy = 1;
    //   this.posY = this.posY0;
    // }
    // this.bullets.forEach(bullet => bullet.move())
   }

  setListeners() {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.TOP_KEY:
            this.posY -= this.vy;
            this.vy;
          break;
        case this.keys.BOTTOM_KEY:
            this.posY += this.vy;
            this.vy;
          break;
        case this.keys.LEFT_KEY:
            this.posX -= this.vx;
            this.vx;
          break;
        case this.keys.RIGHT_KEY:
            this.posX += this.vx;
            this.vx;
          break;
      }
    });
  }

  shoot() {
      this.bullets.push(new Bullet(this.ctx, 10, this.posX, this.posY, this.width, this.height, this.posY0))
    }

  /*clearBullets() {
      this.bullets = this.bullets.filter(bullet => bullet.posX <= this.gameWidth)
    }*/
}
