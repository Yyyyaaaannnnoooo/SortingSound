function radixSort(arr){
  // helper function to get the last nth digit of a number
  function getDigit (num,nth){
    // get last nth digit of a number
    let ret = 0;
    while(nth--){
      ret = num % 10
      num = Math.floor((num - ret) / 10)
    }
    return ret
  }
  this.done = false;
  this.a = arr;
  let len = this.a.length, max = Math.floor(Math.log10(Math.max.apply(Math,this.a))),  
      // get the length of digits of the max value in this array
      digitBuckets = [],idx = 0, i = 0, /*j = 0,*/ t = 0, g = 0, jDone = false, tDone = false;
      generateDigitBucket();
      this.update = function(playing){ 
        if(!this.done && playing){
      //here the steps
      if(t >= digitBuckets.length){
        generateDigitBucket();
        idx = 0;
        t = 0;
        i++;
      }
      radixStep(this.a);
      if(isSorted(this.a)){
        this.done = true;
        console.log("done");
        volume0();
      }
    }
  }
  this.show = function(){
    show(this.a, t, g);
  }

  function radixStep(arr){
      //idx = 0
      if(t < digitBuckets.length){
        if(digitBuckets[t] && digitBuckets[t].length > 0){
          if(g < digitBuckets[t].length){
            arr[idx++] = digitBuckets[t][g];
            g++;
            return;
          }else g = 0;
        }
        t++;
        return;
      }
    }

    function generateDigitBucket(){
      digitBuckets = [];
      for(let j = 0;j < len; j++){//do this only if the t loop is not done yet
        let digit = getDigit(arr[j],i+1);
        digitBuckets[digit] = digitBuckets[digit] || [];
        digitBuckets[digit].push(arr[j]);
      }
    }
  }