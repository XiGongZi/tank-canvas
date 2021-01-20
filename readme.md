

1. 画布层  用来控制绘图\
```javascript
  class DavinciCanvas {
    drawList: {
      "tank0": {}
    },
    init() {
      this.drawList["tank0"] = new Tank();
    }
    draw() {}
  }

```

2. 数据层 用来存储各个实体的数据

```javascript
  class Data {
    list: {
      "tank0": {}
    },
    subscriptList: [],
    setData({
      "tank0": {
        
        }
    }) {
      this.list["tank0"] = "tank0";
    }
    getData() {
      return this.list["tank0"];
    }
  }

```

3. 控制器层 用来做各种约束
```javascript
  class DavinciCanvas {
    drawList: {
      "tank0": {}
    },
    init() {
      this.drawList["tank0"] = new Tank();
    }
    draw() {}
  }

```

4. 实体层 描述各种实体
```javascript
  class Tank {
    position: [0,0],
    // 0 left, 1 right, 2 up, 3 down
    forward: 1,
    // 获取边界
    getBorder() {}
    
  }

```



init =》 载入预设实体 =》 绘制新的实体 =》 启动自循环AI(不是) =》 申请位置更新 =》 控制器设定是否接受并更新实体数据 =》 绘制新的实体

dom操作 =》 申请位置更新 =》 控制器设定是否接受并更新实体数据 =》 绘制新的实体


