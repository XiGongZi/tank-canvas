import Init from "./init.js";

class Data {
  constructor(props) {
    this.init();
  }
  blocks = []
  init = () => {
    let blocks = new Init();
    console.log("blocks", blocks)
    this.blocks = blocks;
  }
}


export default Data;