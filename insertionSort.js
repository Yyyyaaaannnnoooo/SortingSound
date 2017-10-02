function insertionSort(arr){
  this.done = false;
  volumeUp();
  this.a = arr;
  let i = 0, len = this.a.length, j;
  let temp = this.a[i]; 
  this.update = function(){
    if(!this.done){
      temp = this.a[i];
      if(j >= 0 && this.a[j] > temp){
        this.a[j + 1] = this.a[j];
        j--;
      }else{      
        this.a[j + 1] = temp;  
        j = i - 1;
        i++;
      }
      if(i >= len)i = 0;
      if(isSorted(this.a)){
        osc.amp(0, 1);
        volume0();
        this.done = true;
        console.log('done');
      }
    }
  }

  this.show = function(){
    show(this.a, i, j);
  }
}