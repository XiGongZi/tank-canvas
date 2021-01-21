import Tank from "../blocks/tank.js";
import config from "../config/index.js";

function getTank(ele) {
  return new Tank(ele);
}

export default function Init() {
  let arr = [];
  // 创建实体
  config.blocks.forEach(ele => {
    if (![ele.name]) return console.log("name is undefind");
    let block = {};
    if (ele.name === "Tank") block = getTank(ele.property);
    arr.push(block);
  });
  
  return arr;
};