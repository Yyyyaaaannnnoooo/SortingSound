function insertionSort(arr){
  osc.amp(0.5, 0.5);
  let done = false;
  this.a = arr;
  let i = 0, len = this.a.length, j;
  let temp = this.a[i]; 
  console.log(i, j);
  this.update = function(){
    if(!done){
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
      if(isSorted(this.a))done = true;
      //console.log(this.a);
    }
  }

  this.show = function(){
    show(this.a, i, j, done);
  }
}