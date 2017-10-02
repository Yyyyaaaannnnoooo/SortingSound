function heapSort(arr){
	let done = false;
	this.a = arr;
	console.log(this.a);
	let len = this.a.length;
	// arrLength = len,
	// i = floor(arrLength / 2),
	// j = len - 1;
	let sortedList = [],
	listCopy = arr,
	heap = [],
	targetLength = len;

	function chunk(list) {
		var chunks = [];
		for(var i=0; i<list.length; i++) {
			if(list.length % 2 == 1 && i+1 == list.length) {
				chunks.push(list[i]);
			} else {
				if(i % 2 == 0) {
					chunks.push(Math.max(list[i], list[i+1]));
				}
			}
		}
		return chunks; 
	}

	function bubble(list) {
		var remainder = chunk(list),
		heap = [list];

		heap.push(remainder);
		while(remainder.length != 1) {
			remainder = chunk(remainder);
			heap.push(remainder);
		}

		return heap;
	}

	function getTopIndex(thing) {
		var currentIndex = 0,
		value = thing[thing.length-1][0],
		i = thing.length -2;

		while(i != -1) {
			if(!thing[i].length % 2 && currentIndex > 0) {
				currentIndex--;
			}

			if(thing[i][currentIndex + 1] == value) {
				currentIndex++;
				currentIndex = i ? currentIndex << 1 : currentIndex;
			} else if(currentIndex) {
				currentIndex = i ? currentIndex << 1 : currentIndex;

			}
			
			i--;
		}

		return currentIndex;
	}

this.update = function(){
	if(!done){
		if(sortedList.length != targetLength) {
			heap = bubble(listCopy);
			sortedList.push(heap[heap.length-1][0]);
			listCopy.splice(getTopIndex(heap), 1);
			this.a = sortedList;
		}
		console.log(this.a);
		if(isSorted(this.a))done = true;
	}

}

this.show = function(){
	show(this.a, 0, 0, done);
}

}
