function heapSort(arr){
	let done = false;
	this.a = arr;
	console.log(this.a);
	let len = this.a.length, end = len-1, mid = floor((len - 2) / 2);

	// heapify(this.a, len);

	// while(end > 0){
	// 	swap(this.a, end--, 0);
	// 	siftDown(this.a, 0, end);
	// }
	// return arr;
	this.update = function(){
		if(!done){
			if(mid >= 0){
				// mid--;
				siftDown(this.a, mid--, len-1);
				return; 
			}
			if(end > 0){								
				// end--;
				swap(this.a, end--, 0);				
				siftDown(this.a, 0, end);
			}
			// console.log(this.a);
			console.log(mid, end);
			if(isSorted(this.a))done = true;
		}
	}

	this.show = function(){
		show(this.a, mid, end, done);
	}
	// function heapify(arr, len){
	//    // break the array into rooot + two sides, to create tree (heap)
	//    let mid = Math.floor((len-2)/2);
	//    while(mid >= 0){
	//    	 siftDown(arr, mid--, len-1);    
	// 	   }
	// 	}
	function siftDown(arr, start, end){
		let rooot = start, 
			child = rooot * 2 + 1, 
			toSwap = rooot;
		while(child <= end){
			if(arr[toSwap] < arr[child]){
				swap(arr, toSwap, child);
			}
			if(child+1 <= end && arr[toSwap] < arr[child+1]){
				swap(arr, toSwap, child + 1)
			}
			if(toSwap != rooot){
				swap(arr, rooot, toSwap);
				rooot = toSwap;
			}
			else{
				return; 
			}
			toSwap = rooot;
			child = rooot * 2 + 1;
		}
	}

	function swap(arr, i, j){
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}
