
let SortAlg, osc, fft, env,//audio is the sound library
	cyan, magenta, alpha = 15,//WE DEFINE THE COLORS AS GLOBAL VARIABLES
	range,//DEFINES THE MIN MAX HEIGHT OF OUR BARS
	arraySize = 50, myArray = [],
	barSpacing = 5, w, h,
	initialized = false, play = false,
	mono, speedController = 1;//monospace font
const leftMargin = 345;
function preload(){
	mono = loadFont("font/SourceCodePro-Bold.otf");//THIS CAN BE USED FOR SOME TEXT INSIDE THE SKETCH
}
function setup(){
	pixelDensity(1);
	w = windowWidth;
	h = windowHeight;
	prevW = w;
	prevH = h;
	createCanvas(w - 15, h - 25);
	cyan = color(0, 255, 255);
	magenta = color(255, 0, 255);
	background(51);
	textSize(32);
	range = h / 2 - 100;//SET THE BARS HEIGHT ACCORDING TO THE CANVAS HEIGHT
	myArray = filltheArray(myArray, arraySize);
	// initialize the sound library
	osc = new p5.Oscillator();
	osc.setType('sine');
	fft = new p5.FFT();//THIS CAN BE USED TO VISUALIZE THE AUDIO
	env = new p5.Env();
	osc.start();
	env.setADSR(0.001, 0.5, 0.1, 0.5);
	env.setRange(1, 0);
	volume0();//WE START AT VOLUME 0 AND WE INCREASE IT WHEN A SORTING IS CALLED
}

function draw (){
	noStroke();
	rectMode(CORNER);
	fill(255, alpha);//OUR BACKGROUND WITH VARIABLE ALPHA CHANNEL
	rect(0, 0, w, h);
	if(SortAlg != null){
		//HERE WE CONTROL THE SPEED OF THE VISUALIZATION
		if(speedController > 0){
			for(let i = 0; i < speedController; i++)SortAlg.update(play);
		}else{
			if(frameCount % speedController == 0)SortAlg.update(play);
		}
		SortAlg.show();
		if(SortAlg.done){
			play = false;
			document.getElementById("playPause").innerHTML = 'PLAY';
			stop();//STOP THE STOPWATCH WHEN THE SORTING IS DONE
		}
	}else{
		show(myArray, null, null, false);// IF THE SORTING HAS NOT BEEN INITIALIZED DISPAY THE INITIAL ARRAY
	}
	showTime();//CALL THE STOPWATCH FUNCTION TO SHOW IT
}

function initSorting(){
	let select = document.getElementById("kernel");
	let answer = select.options[select.selectedIndex].value;
	let myArrayCopy = [];
	arrayCopy(myArray, myArrayCopy, myArray.length);
	//stopwatch
	reset();//ALWAYS RESET WHEN THE SORTING IS INITIALIZED
	if(play)start();//AND START IF THE PLAY BUTTON IS ON
	//
	if(answer == 0)SortAlg = new bubbleSort(myArrayCopy);
	if(answer == 1)SortAlg = new selectionSort(myArrayCopy);
	if(answer == 2)SortAlg = new insertionSort(myArrayCopy);
	if(answer == 3)SortAlg = new mergeSort(myArrayCopy);	
	if(answer == 4)SortAlg = new quickSort(myArrayCopy);
	if(answer == 5)SortAlg = new shellSort(myArrayCopy);
	if(answer == 6)SortAlg = new radixSort(myArrayCopy);	
	if(answer == 7)SortAlg = new countingSort(myArrayCopy);
	initialized = true;
}
//HERE WE CREATE AN ARRAY OF RANDOM INTEGERS
function filltheArray(arr, arrSize){
	arr = [];
	for (let i = 0; i < arrSize; i++) {
		arr.push(floor(random(0, range)));
	}
	return arr;
}
//THIS FUNCTION RESIZES THE ARRAY ACCORDING TO THE SIZE OF THE WINDOW
function resizeArray(){
	let theArraySize = document.getElementById("arraySize").value;
	let ww = w - (leftMargin + 10);
	theArraySize = floor(map(theArraySize, 20, 200, 20, floor(ww / barSpacing)));	
	document.getElementById("theArraySize").innerHTML = 'ARRAY SIZE: ' + theArraySize;
	console.log('ww'+ww);
	myArray = filltheArray(myArray, theArraySize);
	if(initialized)initSorting();//IF THE SORTING HAS BEEN ALREADY INITIALIZED RESIZE IT
}
//HERE WE SET WAVE OF OUR OSCILLATOR OBJECT
function setWave(){	
	let select = document.getElementById("waveForm");
	let answer = select.options[select.selectedIndex].value;
	if(answer == 0)osc.setType('sine');
	if(answer == 1)osc.setType('triangle');
	if(answer == 2)osc.setType('sawtooth');
	if(answer == 3)osc.setType('square');
}
//THIS FUNCTION ACCELERATES OR SLOWS THE VISUALIZATION
function timeWarp(){
	let input = document.getElementById("timeWarp").value;
	console.log(input);
	speedController = input;
	if(speedController == 0)speedController = 1;//IT SHOULD NEVER BE 0!
	document.getElementById("time").innerHTML = 'SPEED: ' + speedController;
}

/**
THIS FUNCTION STARTS AND STOPS THE VISUALIZATION
*/
function playPause(){
	play = !play;
	setWave();//WE SET THE OSCILLATOR WAVE TYPE
	if(SortAlg == null)initSorting();//IF THE SORTING ALGORITHM ISN'T INITIALIZED INITIALIZE IT
	if(SortAlg != null && SortAlg.done)initSorting();//IF THE SORTING IS DONE THAN RESTART IT
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
	document.getElementById("playPause").innerHTML = txt;//UPDATE THE TEXT ON WEBPAGE
}
//THIS CHANGES THE ALPHA VALUE OF THE BACKGROUND AS AESTHETIC EFFECT
function changeAlpha(){
	alpha = floor(document.getElementById("alpha").value);
	console.log(alpha);
	let txt = alpha.toString();
	document.getElementById("alphaChannel").innerHTML = 'ALPHA: ' + txt;
}

