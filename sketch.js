
let bs, osc, fft, env,//audio is the sound library
	cyan, magenta, alpha = 15,
	range,//declare global min and max sorting number as constant!!
	arraySize = 50, myArray = [],//, myArrayCopy = [];
	arraySizeSlider, 
	barSpacing = 5, w, h, prevW, prevH, counter = 0, finalCount = 0,
	initialized = false, play = false, isPlaying = false,//consider adding a pause function
	mono, BGText, txtCanvas, speedController = 1;//monospace font

function preload(){
	mono = loadFont("font/SourceCodePro-Bold.otf")
}
function setup(){
	pixelDensity(1);
	w = windowWidth;
	h = windowHeight;
	prevW = w;
	prevH = h;
	createCanvas(w - 15, h - 25);
  	// ortho(-width/2, width/2, height/2, -height/2, 0, 500);
	cyan = color(0, 255, 255);
	magenta = color(255, 0, 255);
	background(51);
	textSize(32);
	range = h / 2 - 100;
	myArray = filltheArray(myArray, arraySize);
	// initialize the sound library
	osc = new p5.Oscillator();
	osc.setType('sine');
	fft = new p5.FFT();
	env = new p5.Env();
	osc.start();
	env.setADSR(0.001, 0.5, 0.1, 0.5);
	env.setRange(1, 0);
	volume0();	
	// bs = new bubbleSort(myArray);
}

function draw (){
	// background(255);
	noStroke();
	// strokeWeight(5);
	// stroke(0);
	// alpha = map(mouseX, 0, w, 0, 255);
	rectMode(CORNER);
	fill(255, alpha);
	rect(0, 0, w, h);
	if(bs != null){
		if(speedController > 0){
			for(let i = 0; i < speedController; i++)bs.update(play);
		}else{
			if(frameCount % speedController == 0)bs.update(play);
		}
		bs.show();
		if(bs.done){
			play = false;
			document.getElementById("playPause").innerHTML = 'PLAY';
			stop();
		}
	}else{
		show(myArray, null, null, false);
	}
	showTime();
}

function initSorting(){
	if(!isPlaying){
		let select = document.getElementById("kernel");
		let answer = select.options[select.selectedIndex].value;
		let myArrayCopy = [];
		arrayCopy(myArray, myArrayCopy, myArray.length);
		//stopwatch
		reset();
		if(play)start();
		//
		if(answer == 0)bs = new bubbleSort(myArrayCopy);
		if(answer == 1)bs = new selectionSort(myArrayCopy);
		if(answer == 2)bs = new insertionSort(myArrayCopy);
		if(answer == 3)bs = new mergeSort(myArrayCopy);	
		if(answer == 4)bs = new quickSort(myArrayCopy);
		if(answer == 5)bs = new shellSort(myArrayCopy);
		if(answer == 6)bs = new radixSort(myArrayCopy);
	}
	initialized = true;
}

function filltheArray(arr, arrSize){
	arr = [];
	for (let i = 0; i < arrSize; i++) {
		arr.push(floor(random(0, range)));
	}
	return arr;
}

function resizeArray(){
	let theArraySize = document.getElementById("arraySize").value;
	theArraySize = floor(map(theArraySize, 20, 200, 20, floor(w / barSpacing)));	
	document.getElementById("theArraySize").innerHTML = 'ARRAY SIZE: ' + theArraySize;
	console.log(theArraySize);
	myArray = filltheArray(myArray, theArraySize);
	if(initialized)initSorting()
}

function setWave(){	
	let select = document.getElementById("waveForm");
	let answer = select.options[select.selectedIndex].value;
	if(answer == 0)osc.setType('sine');
	if(answer == 1)osc.setType('triangle');
	if(answer == 2)osc.setType('sawtooth');
	if(answer == 3)osc.setType('square');
}

function timeWarp(){
	let input = document.getElementById("timeWarp").value;
	console.log(input);
	speedController = input;//floor(map(input, 0, 100, -10, 10));
	if(speedController == 0)speedController = 1;
	document.getElementById("time").innerHTML = 'SPEED: ' + speedController;
}

function playPause(){//add a ot of stuff like what when the 
	play = !play;
	setWave();
	if(bs == null)initSorting();
	if(bs != null && bs.done)initSorting();
	let txt;
	if(play){
		txt = 'PAUSE';
		volumeUp();
		start();
		}else{
			txt = 'PLAY';
			volume0();
			stop();
		}
	document.getElementById("playPause").innerHTML = txt;
}

function changeAlpha(){
	alpha = floor(document.getElementById("alpha").value);
	console.log(alpha);
	let txt = alpha.toString();
	document.getElementById("alphaChannel").innerHTML = 'ALPHA: ' + txt;
}

