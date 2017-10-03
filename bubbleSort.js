function bubbleSort(arr){	
	// osc.amp(0.5, 0.5);
 //  	volumeUp();
	this.done = false;
	this.a = arr;
	let len = this.a.length, i = len - 1, j = 1;
	this.update = function(playing){
		if(!this.done && playing){
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
				this.done = true;
				osc.amp(0, 1);
				volume0();
			}
		}
	}

	this.show = function(){
		show(this.a, i, j);
	}
}