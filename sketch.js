let grid = [];
let w = 12;
let cols, rows;

function setup() {
  angleMode(DEGREES)
  createCanvas(600, 600);
  cols = floor(width / w);
  rows = floor(height / w);
  for (let i = 5; i < cols-5; i++) {
    for (let j = 5; j < rows-5; j++){
      let circle = new newCircle(i, j, w);
      grid.push(circle)
    }
  }
}

function draw() {
  // background(220);
  for (let k = 0; k < grid.length; k++){
    let circle = grid[k];
    circle.show();
    circle.update();
  }
  
}

function newCircle(i, j, w){
  background(0,0,0)
  this.i = i;
  this.j = j;
  this.r = w;

  let a = (i * 25) - 15

  stroke(0, 255, 0);

  this.update = function () {
    let inc = TWO_PI / 20;
    this.r = this.r + (sin(a) / w);
    a = a + inc;
    // console.log("r", this.r, "a", a, "inc", inc)
  }

  this.show = function () {
    stroke(0);
    strokeWeight(3)
    circle((i*w)+(w-(w/3)), (j*w)+(w-(w/3)), this.r);
  }
  
}
