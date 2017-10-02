function shellSort(arr) {
  function createGaps(a) {
    // if a is an array of 100, gaps would be [50, 25, 12, 6, 3, 1]
    let gaps = [];
    for (var i = 0, j = a.length, t; 1 <= (t = Math.floor(j / Math.pow(2, i + 1))); i += 1) {
      gaps[i] = t;

      if (t === 1) {
        break;
      }
    }
    if (gaps[i] !== 1) {
      gaps.push(1);
    }
    return gaps;
  }
  volumeUp();
  let gaps = createGaps(arr);
  let done = false;
  this.a = arr;
  let g = 0, gap = gaps[g], i = gap, j = i, len = this.a.length, temp = this.a[i];
  this.update = function(){
    if(!done){
      gap = gaps[g]  
      temp = this.a[i];//chnged     
      if(j >= gap && this.a[j - gap] > temp){
        this.a[j] = this.a[j - gap];
        j -= gap;
      }
      else{
        this.a[j] = temp;     
        j = i;  
        i++;    
      } 
      if(i >= len){
        i = gap;
        g++;        
      }  
      // if(g >= gaps.length)g = 0;      
      if(g > gaps.length || isSorted(this.a)){
        volume0();       
        done = true;
      }
    }
  }

  this.show = function(){
    show(this.a, i, j);
  }
}