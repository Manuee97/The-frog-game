const ScoreBoard = {
    ctx: undefined,
    score:undefined,
  
    init: function(ctx, score) {
      this.ctx = ctx;
      this.score = score;
    },
  
    draw: function(score) {
      var name = document.getElementById('frogName').value;
      this.ctx.fillStyle = 'black'
      this.ctx.font = '30px sans-serif'
      this.ctx.fillText("Score de la rana "+ name + ": " + score, 50, 30)
      this.ctx.fillText("Nivel:  "+ level, 50, 30)
    }
  }