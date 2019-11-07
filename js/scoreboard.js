const ScoreBoard = {
    ctx: undefined,
    score:undefined,
  
    init: function(ctx, score, level) {
      this.ctx = ctx;
      this.score = score;
      this.level = level;
    },
  
    draw: function(score, level) {
      var name = document.getElementById('frogName').value;

      this.ctx.fillStyle = 'black'
      this.ctx.font = '30px sans-serif'
      this.ctx.fillText("Score of the " + name + " frog: " + score, 50, 30)
      this.ctx.fillText("Level:  " + level, 1280, 30)

    //   this.ctx.fillText("Score of the " + name + " frog: " + score, 50, 30)


    }
  }