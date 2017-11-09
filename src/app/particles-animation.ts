import * as anime from 'animejs';

export interface ParticlesAnimationOptions {
  windowSize: {
    width: number,
    height: number,
  };
  colors: string[];
  particlesNumber: number;
}

export class ParticlesAnimation {

  private _context2D: CanvasRenderingContext2D;
  private _renderAnimation: anime.AnimeInstance;

  constructor(
    canvasSelector: string,
    readonly options: ParticlesAnimationOptions,
  ) {
    // declare rendering context
    const canvasEl: HTMLCanvasElement = document.querySelector(canvasSelector);
    canvasEl.width = this.options.windowSize.width * 2;
    canvasEl.height = this.options.windowSize.height * 2;
    this._context2D = canvasEl.getContext('2d');
    this._context2D.scale(2, 2);

    // prepare render animation
    this._renderAnimation = anime({
      targets: canvasSelector,
      duration: Infinity,
      update: () => {
        this._context2D.clearRect(0, 0, 1080, 1920);
      }
    });
  }

  animate(coordX: number, coordY: number): void {
    this._renderAnimation.play();
    this._animateParticules(coordX, coordY);
  }

  private _setParticuleDirection(p) {
    const angle = anime.random(0, 360) * Math.PI / 180;
    const value = anime.random(50, 180);
    const radius = [-1, 1][anime.random(0, 1)] * value;
    return {
      x: p.x + radius * Math.cos(angle),
      y: p.y + radius * Math.sin(angle)
    };
  }

  private _createParticule(x, y) {
    const p: any = {};
    p.x = x;
    p.y = y;
    p.color = this.options.colors[anime.random(0, this.options.colors.length - 1)];
    p.radius = anime.random(16, 32);
    p.endPos = this._setParticuleDirection(p);
    p.draw = () => {
      this._context2D.beginPath();
      this._context2D.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
      this._context2D.fillStyle = p.color;
      this._context2D.fill();
    };
    return p;
  }

  private _createCircle(x, y) {
    const p: any = {};
    p.x = x;
    p.y = y;
    p.color = '#FFF';
    p.radius = 0.1;
    p.alpha = 0.5;
    p.lineWidth = 6;
    p.draw = () => {
      this._context2D.globalAlpha = p.alpha;
      this._context2D.beginPath();
      this._context2D.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
      this._context2D.lineWidth = p.lineWidth;
      this._context2D.strokeStyle = p.color;
      this._context2D.stroke();
      this._context2D.globalAlpha = 1;
    };
    return p;
  }

  private _renderParticule(anim: anime.AnimeInstance) {
    for (let i = 0; i < anim.animatables.length; i++) {
      const obj: any = anim.animatables[i];
      obj.target.draw();
    }
  }

  private _animateParticules(x, y) {
    const circle = this._createCircle(x, y);
    const particules = [];
    for (let i = 0; i < this.options.particlesNumber; i++) {
      particules.push(this._createParticule(x, y));
    }

    anime
      .timeline()
      .add({
        targets: particules,
        x: (p) => p.endPos.x,
        y: (p) => p.endPos.y,
        radius: 0.1,
        duration: anime.random(1200, 1800),
        easing: 'easeOutExpo',
        update: this._renderParticule
      })
      .add({
        targets: circle,
        radius: anime.random(80, 160),
        lineWidth: 0,
        alpha: {
          value: 0,
          easing: 'linear',
          duration: anime.random(600, 800)
        },
        duration: anime.random(1200, 1800),
        easing: 'easeOutExpo',
        update: this._renderParticule,
        offset: 0
      });
  }
}
