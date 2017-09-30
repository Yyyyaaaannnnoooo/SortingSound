
let bs, osc,//osc is the sound library
cyan, magenta,
	range,//declare global min and max sorting number as constant!!
	arraySize = 50, myArray = [],//, myArrayCopy = [];
	arraySizeSlider, 
	barSpacing = 5, w, h, 
	initialized = false, pause = false;//consider adding a pause function
	function setup(){
		pixelDensity(1);
		w = window.innerWidth;
		h = window.innerHeight;
		let cnv = createCanvas(w, h);
		cyan = color(0, 255, 255);
		magenta = color(255, 0, 255);
	//slider
	arraySizeSlider = createSlider
	//
	background(51);
	range = h / 2 - 100;
	myArray = filltheArray(myArray, arraySize);
	// console.log(myArray);
	// console.log(myArray);
	// initialiye the sound library
	osc = new p5.Oscillator();
	osc.setType('sine');
	// osc.freq(240);
	osc.amp(0.0);
	osc.start();
}

function draw (){
	background(255);
	if(bs != null){
		bs.update();
		bs.show();
	}else{
		show(myArray, null, null, true);
	}
}

function initSorting(){
	let select = document.getElementById("kernel");
	let answer = select.options[select.selectedIndex].value;
	let myArrayCopy = [];
	for(let i = 0; i < myArray.length; i++)myArrayCopy[i] = myArray[i];//this should 
		console.log(myArrayCopy);
	if(answer == 0)bs = new bubbleSort(myArrayCopy);
	if(answer == 1)bs = new selectionSort(myArrayCopy);
	if(answer == 2)bs = new insertionSort(myArrayCopy);
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
	if(initialized)initSorting()
}




