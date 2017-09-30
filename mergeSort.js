function MergeSort(arr){
	let TheArrays = [];
	let done = false;
	this.a = arr;
	let i = 0, len = this.a.length, temp, j;
	mergeSort(this.a);

	this.update = function(){
		if(!done){ 		
			if(!isSorted(this.a) || i >= len - 1){
				this.a = merge(TheArrays[i], TheArrays[i + 1]);
				console.log(this.a);
				i += 2;
			} else done = true;
		}
	}

	this.show = function(){
		show(this.a);
	}

	function mergeSort(arrList){
		let listLen = arrList.length;
		if(listLen >= 2){
			let mid = floor(listLen / 2),
			Left = arrList.slice(0,mid),
			Right = arrList.slice(mid);
		   //send left and right to the mergeSort to broke it down into pieces
		   //then merge those
		   // return merge(mergeSort(Left),mergeSort(Right));
		   TheArrays.push(Left);
		   TheArrays.push(Right);
		   mergeSort(Left);
		   mergeSort(Right);
		}
}

function merge(left, right){
	let result = [],
	lLen = left.length,
	rLen = right.length,
	l = 0,
	r = 0;
	while(l < lLen && r < rLen){
		if(left[l] < right[r]){
			result.push(left[l++]);
		}
		else{
			result.push(right[r++]);
		}
	}  
	  //remaining part needs to be addred to the result
	  return result.concat(left.slice(l)).concat(right.slice(r));
	}
}