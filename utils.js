function show(arr, idx1, idx2, isDone){
	for (let i = 0; i < arr.length; i++) {
		if(i == idx1)stroke(cyan);
		else if(i == idx2){
			stroke(magenta);
			playSound(arr[i], isDone);
		} else stroke(0);
		strokeWeight(3);
		let posX = floor((w / 2) - ((arr.length * barSpacing) / 2));
		line(posX + i * barSpacing, (height / 2), posX + i * barSpacing, (height / 2) - arr[i]);
	}
}

function playSound(num, bool){
	num = map(num, -range, range, 220, 880);
	osc.freq(num);
	if(bool)osc.amp(0, 0.5);
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