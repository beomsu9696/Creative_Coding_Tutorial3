import { Text } from "./text.js";
import { Particle } from "./particle.js";

export const RANDOM_TEXT = "ABCMNRSTUXZ";

export class Visual {
  constructor() {
    this.text = new Text();

    this.textArr = RANDOM_TEXT.split("");

    this.particles = [];

    this.mouse = {
      x: 0,
      x: 0,
      radius: 100,
    };
    document.addEventListener("pointermove", this.onMove.bind(this), false);
  }

  show(stageWidth, stageHeight) {
    const str = this.textArr[
      Math.round(Math.random() * (this.textArr.length - 1))
    ];
  }

  onMove(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }
}
