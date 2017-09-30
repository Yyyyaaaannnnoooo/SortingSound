function bubbleSort(arr){	
	osc.amp(0.5, 0.5);
	let done = false;
	this.a = arr;
	let len = this.a.length, i = len - 1, j = 1;	
	console.log(i, j);
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
			if(i <= 0 || isSorted(this.a))done = true;		
			//console.log(this.a);
		}
	}

	this.show = function(){
    show(this.a, i, j, done);
  }
}