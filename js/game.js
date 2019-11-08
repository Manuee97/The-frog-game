const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
  playerKeys: {
    TOP_KEY: 38,
    BOTTOM_KEY: 40,
    LEFT_KEY: 37,
    RIGHT_KEY: 39,
    SPACE: 86
  },
  level: 0,
  score: 0,
  maxScore: 0,
  points: 0,

  init: function() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = window.innerWidth;
    this.height = window.innerHeight - 180;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.start();
  },

  start: function() {
    document.querySelector(".finish").style.display = "none";
    this.score = 0;
    this.points = 0;
    this.maxScore = this.maxScore;
    this.level = 0;
    this.reset();
    this.interval = setInterval(() => {
      this.framesCounter++;

      this.clear();
      this.drawAll();
      this.moveAll();

      this.clearObstacles();
      if (this.player.posY < 20) {
        this.score = this.score + 100;
        this.points = this.points + 100;
        this.player.posX = 680;
        this.player.posY = 535;
        this.level = this.level + 1;
      }
      if (this.framesCounter % 70 === 0) this.generateObstacles();
      if (this.framesCounter % 50 === 0) this.points++;
      if (this.isCollision()) this.gameOver();
      if (this.framesCounter > 1000) this.framesCounter = 0;
    }, 1000 / this.fps);
  },

  reset: function() {
    var rr = Math.round(Math.random() * 10);

    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(
      this.ctx,
      80,
      70,
      `./img/La-Rana` + rr + `.png`,
      this.width,
      this.height,
      this.playerKeys
    );
    this.obstacles = [];
    ScoreBoard.init(this.ctx, this.score, this.level);
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  drawAll: function() {
    this.background.draw();
    this.player.draw(this.framesCounter);
    this.obstacles.forEach(obstacle => obstacle.draw());
    ScoreBoard.draw(this.score, this.level);
  },

  moveAll: function() {
    this.background.move();
    this.player.move();
    this.obstacles.forEach(obstacle => obstacle.move());
  },

  generateObstacles: function() {
    var r = Math.round(Math.random() * 10);

    if (this.points < 100) {
      var v1 = 10;
      var v2 = 8;
      var v3 = 7;
      var v4 = 6;
    } else if (this.points > 100) {
      var v1 = 15;
      var v2 = 15;
      var v3 = 12;
      var v4 = 10;
    } else if (this.points > 200) {
      var v1 = 19;
      var v2 = 15;
      var v3 = 13;
      var v4 = 17;
    } else if (this.points > 300) {
      var v1 = 23;
      var v2 = 17;
      var v3 = 16;
      var v4 = 8;
    } else if (this.points > 400) {
      var v1 = 22;
      var v2 = 25;
      var v3 = 18;
      var v4 = 13;
    } else if (this.points > 500) {
      var v1 = 28;
      var v2 = 20;
      var v3 = 25;
      var v4 = 17;
    } else if (this.points > 600) {
      var v1 = 30;
      var v2 = 26;
      var v3 = 25;
      var v4 = 15;
    } else if (this.points > 700) {
      var v1 = 40;
      var v2 = 35;
      var v3 = 25;
      var v4 = 30;
    } else if (this.points > 800) {
      var v1 = 60;
      var v2 = 55;
      var v3 = 45;
      var v4 = 50;
    } else if (this.points > 900) {
      var v1 = 80;
      var v2 = 75;
      var v3 = 55;
      var v4 = 60;
    } else if (this.points > 1000) {
      var v1 = 100;
      var v2 = 90;
      var v3 = 80;
      var v4 = 90;
    }

    if (this.points > 0) {
      this.obstacles.push(
        new Obstacle(
          this.ctx,
          15,
          45,
          `./img/coche` + r + `.png`,
          this.width,
          145,
          v1
        )
      );
    }
    if (this.points % 2 == 0) {
      this.obstacles.push(
        new Obstacle(
          this.ctx,
          15,
          45,
          `./img/coche` + r + `.png`,
          this.width,
          250,
          v2
        )
      );
    }
    if (this.points % 3 == 0) {
      this.obstacles.push(
        new Obstacle(
          this.ctx,
          15,
          45,
          `./img/coche` + r + `.png`,
          this.width,
          360,
          v3
        )
      );
    }
    if (this.points % 2.5) {
      this.obstacles.push(
        new Obstacle(
          this.ctx,
          15,
          45,
          `./img/coche` + r + `.png`,
          this.width,
          480,
          v4
        )
      );
    }
  },



  gameOver: function() {
      let mySound = new Audio()
      mySound.src = "./rana.mp3"
      mySound.play()
    if (this.score > this.maxScore) {
      this.maxScore = this.score;
    }

    clearInterval(this.interval);
    document.querySelector("#maxScore").innerHTML = `${this.maxScore}`;

    document.querySelector(".finish").style.display = "flex";
  },

  isCollision: function() {
    // colisiones genéricas
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    return this.obstacles.some(
      obs =>
        this.player.posX + this.player.width > obs.posX &&
        obs.posX + obs.width > this.player.posX &&
        this.player.posY + this.player.height > obs.posY &&
        obs.posY + obs.height > this.player.posY
    );
  },

  clearObstacles: function() {
    this.obstacles = this.obstacles.filter(obstacle => obstacle.posX >= 0);
  }
};
