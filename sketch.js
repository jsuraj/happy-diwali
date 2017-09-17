function setup() {
	createCanvas(displayWidth, displayHeight);
	textSize(20);
	textAlign(CENTER);
	window.flag = false;
}

function draw() {
	if(window.flag) {
		text("Hello World", displayWidth/2, displayHeight/2);
	}
}

function touchStarted() {
	background(random(0, 255), random(0, 255), random(0, 255));  
	// window.flag = !window.flag;
}