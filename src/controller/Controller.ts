import { WebGLRenderer } from "three";

export class Controller {
  renderer: WebGLRenderer;
  constructor(renderer : WebGLRenderer) {
    this.renderer = renderer;
  }

  setDarkMode = () => {
    this.renderer.setClearAlpha(0.8);
  };

  setLightMode = () => {
    this.renderer.setClearAlpha(0);
  };
}
