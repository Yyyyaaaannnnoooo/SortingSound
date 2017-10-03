function show(arr, idx1, idx2){
	strokeWeight(3);
	noFill();
	for (let i = 0; i < arr.length; i++) {
		if(i == idx1)stroke(cyan);
		else if(i == idx2){
			stroke(magenta);
			playSound(arr[i]);
		} else stroke(0);
		let posX = floor((w / 2) - ((arr.length * barSpacing) / 2));
		drawLine(arr, posX, i);
	}	
	// let posX = floor((w / 2) - ((arr.length * barSpacing) / 2));
	// beginShape();
	// vertex(posX, h);
	// for (let i = 0; i < arr.length; i++) {
	// 	if(i == idx1)stroke(cyan);
	// 	else if(i == idx2){
	// 		stroke(magenta);
	// 		playSound(arr[i]);
	// 	} else stroke(0);
	// 	vertex(posX + i * barSpacing, (h / 2) - arr[i]);
	// 	// drawLine(arr, posX, i);
	// }
	// endShape();
}
function drawLine(arr, x, index){
	line(x + index * barSpacing, (h / 2) + arr[index], x + index * barSpacing, (h / 2) - arr[index]);	
}
	// line(posX + i * barSpacing, (height / 2), posX + i * barSpacing, (height / 2) - arr[i]);
function playSound(num){
	let midiValue = map(num, 0, range, 60, 100);
    var freqValue = midiToFreq(midiValue);
    osc.freq(freqValue);
    env.play(osc, 0, 0.1);
}

function isSorted(arr) {
	let sorted = true;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i+1]) {
			sorted = false;
			break;
		}
	}
	return sorted;
}
function volume0(){
	masterVolume(0, 0.5);
}

function volumeUp(){	
	masterVolume(1, 0.5);
}