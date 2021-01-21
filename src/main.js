import Data from "./libs/data.js";




class CanvasDraw{
  constructor(props) {
    this.init();
  }
  data = {}
  init = () => {
    let data = new Data();
    this.data = data.blocks;
  }
}


let canvas = new CanvasDraw();

console.log(canvas);