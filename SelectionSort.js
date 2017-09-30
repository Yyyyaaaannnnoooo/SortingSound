function selectionSort(arr){
  osc.amp(0.5, 0.5);
  let done = false;
  this.a = arr;
  console.log(this.a);
  let len = this.a.length, i = 0, j = i + 1, minIdx, temp;  
  console.log(i, j);
  this.update = function(){ 
    if(!done){
      minIdx = i;
      if(this.a[j] < this.a[minIdx]) minIdx = j;
      temp = this.a[i];
      this.a[i] = this.a[minIdx];
      this.a[minIdx] = temp;
      j++;
      if(j >= len){
        i++;
        j = i + 1;
      }
      if(i >= len || isSorted(this.a))done = true;
      //console.log(this.a);
    }
  }
  this.show = function(){
    show(this.a, i, j, done);
  }
}