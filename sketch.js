
let bs, osc, fft, env,//audio is the sound library
	cyan, magenta,
	range,//declare global min and max sorting number as constant!!
	arraySize = 50, myArray = [],//, myArrayCopy = [];
	arraySizeSlider, 
	barSpacing = 5, w, h, 
	initialized = false, play = false,//consider adding a pause function
	mono, BGText, txtCanvas, speedController = 1;//monospace font

function preload(){
	mono = loadFont("font/SourceCodePro-Bold.otf")
}
function setup(){
	pixelDensity(1);
	w = window.innerWidth;
	h = window.innerHeight;
	let cnv = createCanvas(w, h);
	cyan = color(0, 255, 255);
	magenta = color(255, 0, 255);
	//declaring text
	textFont(mono);
	textSize(5);
	txtCanvas = document.getElementById("txtCanvas");
	//slider
	arraySizeSlider = createSlider
	//
	background(51);
	range = h / 2 - 100;
	myArray = filltheArray(myArray, arraySize);
	BGText = myArray.toString();
	// initialize the sound library
	osc = new p5.Oscillator();
	osc.setType('sine');
	fft = new p5.FFT();
	env = new p5.Env();
	env.setADSR(0.001, 0.5, 0.1, 0.5);
	env.setRange(1, 0);
	osc.start();
	volume0();	
	// bs = new bubbleSort(myArray);
}

function draw (){
	// background(255);
	noStroke();
	fill(255, 10);
	rect(0, 0, w, h);
	if(bs != null){
		if(play){
			if(speedController > 0){
				for(let i = 0; i < speedController; i++)bs.update();
			}else{
				if(frameCount % speedController == 0)bs.update();
			}
	}
		bs.show();
		if(bs.done){
			play = false;
			document.getElementById("playPause").innerHTML = 'PLAY';
		}
	}else{
		show(myArray, null, null, false);
	}
}

function initSorting(){
	let select = document.getElementById("kernel");
	let answer = select.options[select.selectedIndex].value;
	let myArrayCopy = [];
	for(let i = 0; i < myArray.length; i++)myArrayCopy[i] = myArray[i];//this should 
	if(answer == 0)bs = new bubbleSort(myArrayCopy);
	if(answer == 1)bs = new selectionSort(myArrayCopy);
	if(answer == 2)bs = new insertionSort(myArrayCopy);
	if(answer == 3)bs = new mergeSort(myArrayCopy);	
	if(answer == 4)bs = new quickSort(myArrayCopy);
	if(answer == 5)bs = new shellSort(myArrayCopy);
	initialized = true;
}

function filltheArray(arr, arrSize){
	arr = [];
	for (let i = 0; i < arrSize; i++) {
		arr.push(floor(random(-range, range)));
	}
	return arr;
}

function resizeArray(){
	let theArraySize = document.getElementById("arraySize").value;
	theArraySize = floor(map(theArraySize, 0, 100, 20, floor(w / barSpacing)));	
	console.log(theArraySize);
	myArray = filltheArray(myArray, theArraySize);
	// if(initialized)initSorting()
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
	speedController = floor(map(input, 0, 100, -10, 10));
	if(speedController == 0)speedController = 1;
	//if(speedController >= 0)speedController = floor(speedController);
}
function playPause(){//add a ot of stuff like what when the 
	play = !play;
	setWave();
	initSorting();	
	let txt;
	if(play){
		txt = 'PAUSE';
		volumeUp();
		}else{
			txt = 'PLAY';
			volume0();
		}
	document.getElementById("playPause").innerHTML = txt;
}


