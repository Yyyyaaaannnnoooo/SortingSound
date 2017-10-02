function heapSort(arr){
	let done = false;
	this.a = arr;
	console.log(this.a);
	let len = this.a.length,
	arrLength = len,
	i = floor(arrLength / 2),
	j = len - 1;

	function heap_root(arr, i) {
		let left = 2 * i + 1;
		let right = 2 * i + 2;
		let max = i;
		if (left < len && arr[left] > arr[max]) {
			max = left;
		}
		if (right < len && arr[right] > arr[max])     {
			max = right;
		}
		if (max != i) {
			swap(arr, i, max);
			heap_root(arr, max);
		}
	}

	function swap(arr, index_A, index_B) {
		let temp = arr[index_A];
		arr[index_A] = arr[index_B];
		arr[index_B] = temp;
	}

	this.update = function(){
		if(!done){
			if(i >= 0){
				heap_root(this.a, i);
				i -= 1
			}else if(j > 0) {
				swap(this.a, 0, i);
				arrLength--;
				heap_root(this.a, 0);
				j--;
			}
			console.log(this.a);
			if(isSorted(this.a))done = true;
		}

	}

	this.show = function(){
		show(this.a, i, j, done);
	}

}
