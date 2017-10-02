function selectionSort(arr){
  osc.amp(0.5, 0.5);
  volumUp();
  let done = false;
  this.a = arr;
  let len = this.a.length, i = 0, j = i + 1, minIdx;
  function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  } 
  this.update = function(){ 
    if(!done){
      minIdx = i;
      if(this.a[j] < this.a[minIdx]) minIdx = j;
      j++;
      if(i != minIdx)swap(this.a, i, minIdx);
      if(j >= len){
        i++;
        j = i + 1;
      }
      if(i >= len || isSorted(this.a)){
        done = true;
        console.log("done");
        volume0();
        osc.amp(0, 0.5);
      }
      // console.log(BGText);
      //console.log(this.a);
    }
  }
  this.show = function(){
    show(this.a, i, j);
  }
}