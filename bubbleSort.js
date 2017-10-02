function bubbleSort(arr){
	// let BGText = arr.toString(), tempTxt; 	
	osc.amp(0.5, 0.5);
  	volumUp();
	let done = false;
	this.a = arr;
	let len = this.a.length, i = len - 1, j = 1;
	this.update = function(){
		if(!done){
			if(this.a[j-1] > this.a[j]){
				let temp = this.a[j-1];
				this.a[j-1] = this.a[j];
				this.a[j] = temp;
			}		
			j++;
			if(j > i) {
				i--; 
				j = 1;
			}
			if(i <= 0 || isSorted(this.a)){
				done = true;
				osc.amp(0, 1);
				volume0();
			}
			// tempTxt = this.a.toString();
			// BGText = tempTxt.concat("\n", BGText);
			// noStroke();
			// text(BGText, 0, 0, w, h);
			// console.log(BGText);
		}
	}

	this.show = function(){
		show(this.a, i, j);
	}
}