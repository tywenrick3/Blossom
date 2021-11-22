let b = [];
let angle = 0;
let slider;
let multiplier = 0.67;
let mode;
let leafColor = 'pink';
let colors = [
	'green',
	'yellow',
	'red',
	'brown',
	'pink',
	'purple',
	'lightgreen',
];

function setup() {
	createCanvas(800, 600);
	slider = createSlider(0, TWO_PI, PI / 4, 0.01); // min, max, defualt value, step
	slider.position(windowWidth / 2 - 80, height + 30);
	reset();
}

function draw() {
	if (mode == 0) {
		//startscreen
		start();
	}
	if (mode == 1) {
		//main
		main();
	}
}

function start() {
	background('#f1a1d9');
	textAlign(CENTER);
	fill('white');
	textSize(72);
	textFont('bilo, sans-serif');
	text('Blossom', width / 2, height / 2);
	textSize(22);
	text('press enter', width / 2, height / 2 + 250);
}

function main() {
	background('#87cefa');
	angle = slider.value();
	stroke(255);
	translate(400, height);
	branch(200); // recursive call len=200
}

function keyPressed() {
	if (keyCode == 13 && mode == 0) {
		mode = 1;
	}
	if (keyCode == 27 && mode == 1) {
		reset();
	}
	if (keyCode == 32 && mode == 1) {
		let index = floor(random(0, 7));
		leafColor = colors[index];
	}
}

function branch(len) {
	//set stroke color and weight
	stroke(255);
	strokeWeight(2);
	line(0, 0, 0, -len);
	translate(0, -len);
	// Base Case - draw leaf
	if (len < 4) {
		noStroke();
		fill(leafColor);
		ellipse(0, len, 3, 10);
	}

	if (len > 4) {
		push();
		rotate(angle);
		branch(len * multiplier);
		pop();
		//second branch
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
	mode = 0;
	angle = 0;
}
