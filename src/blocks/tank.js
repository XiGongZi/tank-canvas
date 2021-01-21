class Tank {
  constructor(props = {
    color: "#000000",
    defaultPosition: [0,0],
    id: 0
  }) {
    this.color = props.color;
    this.id = props.id;
    this.defaultPosition = props.defaultPosition;
    
  }
  defaultPosition = [0,0]
  id = 0
  color = "#000000"
  position = [1, 2]
}


export default Tank;