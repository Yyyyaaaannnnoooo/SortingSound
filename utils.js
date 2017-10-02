function show(arr, idx1, idx2){
  	  // BGText = arr.toString();
  	  // let tempTxt = arr.toString();
     //  BGText = tempTxt.concat("\n", BGText);
     //  txtCanvas.innerHTML = BGText;
           //  noStroke();
     //  text(BGText, 0, 0, w, h);
	for (let i = 0; i < arr.length; i++) {
		if(i == idx1)stroke(cyan);
		else if(i == idx2){
			stroke(magenta);
			playSound(arr[i]);
		} else stroke(0);
		strokeWeight(3);
		let posX = floor((w / 2) - ((arr.length * barSpacing) / 2));
		line(posX + i * barSpacing, (height / 2), posX + i * barSpacing, (height / 2) - arr[i]);
	}
}

function playSound(num){
	let midiValue = map(num, -range, range, 60, 100);
	// console.log(midiValue);
    var freqValue = midiToFreq(midiValue);
    osc.freq(freqValue);
    //osc.amp(env);
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

function volumUp(){	
	masterVolume(1, 0.5);
}