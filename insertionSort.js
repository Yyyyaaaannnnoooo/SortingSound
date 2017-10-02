function insertionSort(arr){
  // let BGText = arr.toString(), tempTxt; 
  osc.amp(0.5, 0.5);
  let done = false;
  volumUp();
  this.a = arr;
  let i = 0, len = this.a.length, j;
  let temp = this.a[i]; 
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
      if(isSorted(this.a)){
        osc.amp(0, 1);
        volume0();
        done = true;
        console.log('done');
      }
      // tempTxt = this.a.toString();
      // BGText = tempTxt.concat("\n", BGText);
      // noStroke();
      // text(BGText, 0, 0, w, h);
      // console.log(BGText);
      //console.log(this.a);
    }
  }

  this.show = function(){
    show(this.a, i, j);
  }
}