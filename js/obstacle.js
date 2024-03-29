class Obstacle {
    constructor(ctx, width, height, image, gameWidth, gameHeight, vx) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;

      this.image = new Image();
      this.image.src = image

      this.posX = gameWidth;
      this.posY = gameHeight * 0.98 - this.height;
  
      this.vx = vx;
    }

    draw() {
      this.ctx.fillStyle = 'black';
      this.ctx.drawImage(this.image, this.posX, this.posY, 120, 50);
    }
  
    move() {
      this.posX -= this.vx;
    }
  }
  