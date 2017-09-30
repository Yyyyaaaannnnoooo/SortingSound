

function shellSort(arr) {
  // for(var g = 0; g < gaps.length; g++) {
  //   var gap = gaps[g];
  //   for(var i = gap; i < array.length; i++) {
  //     var temp = array[i];
  //     for(var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
  //       array[j] = array[j - gap];
  //     }
  //     array[j] = temp;
  //   }
  // }
  // return array;
  let gaps = [];
  for (let i = 0; i < arr.length; i++) {
    gaps.push(floor(random(100)));
  }
  let done = false;
  this.a = arr;
  let g = 0, i = g, j = i, len = this.a.length;
  this.update = function(){
    if(!done){
      let temp = this.a[i];
      let gap = gaps[g];
      if(j >= gap && this.a[j - gap] > temp){        
        this.a[j] = this.a[j - gap];
      }
      else{            
        j -= gap;
        j = i;
        i++;      
      }
      if(i >= len){
        g++;
        i = g;
      }
      this.a[j] = temp;
      if(isSorted(this.a))done = true;
      console.log(this.a);
    }
  }

  this.show = function(){
    show(this.a);
  }
}