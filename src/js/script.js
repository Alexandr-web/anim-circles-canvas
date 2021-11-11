class AnimateCanvas {
  constructor(canvas) {
    this.canvas = {
      el: canvas,
      ctx: canvas.getContext('2d'),
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.circle = {
      maxDiameter: 50,
      amount: 150,
      colors: ['#d70000ff', '#d78f00ff', '#d7d300ff'],
    };
    this.circles = [];
  }

  setSizeByCanvas() {
    this.canvas.el.width = this.canvas.width;
    this.canvas.el.height = this.canvas.height;
  }

  setCircles() {
    for (let i = 0; i < this.circle.amount; i++) {
      this.circles.push({
        x: this.canvas.width * Math.random(),
        y: this.canvas.height * Math.random(),
        color: this.circle.colors[Math.floor(Math.random() * (this.circle.colors.length - 1))],
        diameter: this.circle.maxDiameter * Math.random(),
        speedX: 5 * Math.random(),
        speedY: 5 * Math.random()
      });
    }
  }

  createCircles() {
    this.canvas.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.circles.map(circle => {
      const {
        x,
        y,
        color,
        diameter
      } = circle;

      this.canvas.ctx.beginPath();
      this.canvas.ctx.arc(x, y, diameter, Math.PI * 2, false);
      this.canvas.ctx.fillStyle = color;
      this.canvas.ctx.fill();
    });
  }

  anim() {
    window.requestAnimationFrame(() => {
      this.circles = this.circles.map(circle => {
        circle.x += circle.speedX;
        circle.y += circle.speedY;

        if (circle.x > this.canvas.width || circle.x < 0) {
          circle.speedX *= -1;
        }

        if (circle.y > this.canvas.height || circle.y < 0) {
          circle.speedY *= -1;
        }

        return circle;
      });

      this.createCircles();
      this.anim();
    });
  }

  start() {
    this.setCircles();
    this.setSizeByCanvas();
    this.createCircles();
    this.anim();
  }
}

window.addEventListener('load', () => {
  new AnimateCanvas(document.querySelector('#canvas')).start();
});