function setup() {
	createCanvas(windowWidth, windowHeight);							//windowWidth works over displayWidth
	// console.log(displayWidth+' '+displayHeight);
	// console.log(windowWidth+' '+windowHeight);
	textSize(30);
	textAlign(CENTER);
	textStyle(BOLD);
	textFont('Georgia');
}

function draw() {
	text("Hello", windowWidth/2, windowHeight/2);
}

function touchStarted() {
	background(random(0, 255), random(0, 255), random(0, 255));
}
