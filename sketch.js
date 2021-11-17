let b = [];
var angle = 0;
var slider;
let multiplier = 0.67;

function setup() {
	createCanvas(800, 600);
	reset();
}

function draw() {
	background('#87cefa');
	angle = slider.value();
	stroke(255);
	translate(400, height);
	branch(200); // recursive call len=200
}

function branch(len) {
	stroke(255);
	strokeWeight(2);
	line(0, 0, 0, -len);
	translate(0, -len);
	// Base Case - draw leaf
	if (len < 4) {
		noStroke();
		fill('green');
		ellipse(0, len, 3, 10);
	}

	if (len > 4) {
		push();
		rotate(angle);
		branch(len * multiplier);
		pop();
		// second branck
		push();
		rotate(-angle);
		branch(len * multiplier);
		pop();
	}
}

function reset() {
	while (b.length > 0) {
		b.pop();
	}
	slider = createSlider(0, TWO_PI, PI / 4, 0.01); // min, max, defualt value, step
	slider.position(windowWidth / 2 - 80, height + 30);
	angle = 0;
}
