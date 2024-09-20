function setup() {
    createCanvas(400, 400);
    background("pink");
  }
  
  function draw() {
  
    stroke("black");
    fill("brown");
  
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  
