function setup() {
  createCanvas(1000, 1000);
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  for (let i = 0; i < 200; i += 20) {
    bezier(
      mouseX - i / 2.0,
      40 + i,
      410,
      20,
      440,
      300,
      240 - i / 16.0,
      300 + i / 8.0
    );
  }

  for (let i = 0; i < 200; i += 20) {
    bezier(
      mouseY - i / 2.0,
      -40 + i,
      -500,
      500,
      800,
      1500,
      240 - i / 16.0,
      300 + i / 8.0
    );
  }
}

// for days 5 and 6