class Background {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.w2 = width / 2;
    this.h2 = height / 2;
    this.hFull = height;
    this.posX = 0;
    this.posY = 0;

    this.vx = 8;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, this.width, this.hFull);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#343434";
    this.ctx.fillRect(0, 40, this.width, 500);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 60, this.width, 20);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#343434";
    this.ctx.fillRect(0, 100, this.width, 100);
    this.ctx.stroke();

    this.ctx.setLineDash([100, 70]);
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(0, this.h2 -135);
    this.ctx.lineTo(this.width, this.h2 -135);
    this.ctx.lineWidth = 15;
    this.ctx.stroke();

    this.ctx.setLineDash([100, 70]);
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(0, this.h2 - 30);
    this.ctx.lineTo(this.width, this.h2 - 30);
    this.ctx.lineWidth = 15;
    this.ctx.stroke();

    this.ctx.setLineDash([100, 70]);
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(0, this.h2 + 90);
    this.ctx.lineTo(this.width, this.h2 + 90);
    this.ctx.lineWidth = 15;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 500, this.width, 20);
    this.ctx.stroke();

    //    this.ctx.drawImage(this.carImg, this.posX, this.posY, 70, 120);
  }

  move() {
    //this.posX -= this.vx;

    //if (this.posX <= -this.width) this.posX = 0;
  }
}
