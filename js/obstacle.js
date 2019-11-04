class Obstacle {
    constructor(ctx, width, height, image, gameWidth, gameHeight) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;

      this.image = new Image();
      this.image.src = image;
  
      this.posX = gameWidth;
      this.posY = gameHeight * 0.98 - this.height;
  
      this.vx = 10;
    }
  
    draw() {
      this.ctx.fillStyle = 'black';
    //   this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
      this.ctx.drawImage(this.image, this.posX, this.posY, 120, 50);
    }
  
    move() {
      this.posX -= this.vx;
    }
  }
  