/**
 ________      ___  ___      ________      ________      ___           _______      
|\   __  \    |\  \|\  \    |\   __  \    |\   __  \    |\  \         |\  ___ \     
\ \  \|\ /_   \ \  \\\  \   \ \  \|\ /_   \ \  \|\ /_   \ \  \        \ \   __/|    
 \ \   __  \   \ \  \\\  \   \ \   __  \   \ \   __  \   \ \  \        \ \  \_|/__  
  \ \  \|\  \   \ \  \\\  \   \ \  \|\  \   \ \  \|\  \   \ \  \____    \ \  \_|\ \ 
   \ \_______\   \ \_______\   \ \_______\   \ \_______\   \ \_______\   \ \_______\
    \|_______|    \|_______|    \|_______|    \|_______|    \|_______|    \|_______|
                                                                                    
                                                                                    
                                                                                    
 ________       ________      ________      _________                               
|\   ____\     |\   __  \    |\   __  \    |\___   ___\                             
\ \  \___|_    \ \  \|\  \   \ \  \|\  \   \|___ \  \_|                             
 \ \_____  \    \ \  \\\  \   \ \   _  _\       \ \  \                              
  \|____|\  \    \ \  \\\  \   \ \  \\  \|       \ \  \                             
    ____\_\  \    \ \_______\   \ \__\\ _\        \ \__\                            
   |\_________\    \|_______|    \|__|\|__|        \|__|                            
   \|_________|                                                                     
                                                                                    
*/
function bubbleSort(arr){	
	this.done = false;
	this.a = arr;
	let len = this.a.length, i = len - 1, j = 1;
	this.update = function(playing){
		if(!this.done && playing){
			if(this.a[j-1] > this.a[j]){
				let temp = this.a[j-1];
				this.a[j-1] = this.a[j];
				this.a[j] = temp;
			}		
			j++;
			if(j > i) {
				i--; 
				j = 1;
			}
			if(i <= 0 || isSorted(this.a)){
				this.done = true;
				osc.amp(0, 1);
				volume0();
			}
		}
	}

	this.show = function(){
		show(this.a, i, j);
	}
}

/**
 ___      ________       ________       _______       ________      _________    ___      ________      ________      
|\  \    |\   ___  \    |\   ____\     |\  ___ \     |\   __  \    |\___   ___\ |\  \    |\   __  \    |\   ___  \    
\ \  \   \ \  \\ \  \   \ \  \___|_    \ \   __/|    \ \  \|\  \   \|___ \  \_| \ \  \   \ \  \|\  \   \ \  \\ \  \   
 \ \  \   \ \  \\ \  \   \ \_____  \    \ \  \_|/__   \ \   _  _\       \ \  \   \ \  \   \ \  \\\  \   \ \  \\ \  \  
  \ \  \   \ \  \\ \  \   \|____|\  \    \ \  \_|\ \   \ \  \\  \|       \ \  \   \ \  \   \ \  \\\  \   \ \  \\ \  \ 
   \ \__\   \ \__\\ \__\    ____\_\  \    \ \_______\   \ \__\\ _\        \ \__\   \ \__\   \ \_______\   \ \__\\ \__\
    \|__|    \|__| \|__|   |\_________\    \|_______|    \|__|\|__|        \|__|    \|__|    \|_______|    \|__| \|__|
                           \|_________|                                                                               
                                                                                                                      
                                                                                                                      
 ________       ________      ________      _________                                                                 
|\   ____\     |\   __  \    |\   __  \    |\___   ___\                                                               
\ \  \___|_    \ \  \|\  \   \ \  \|\  \   \|___ \  \_|                                                               
 \ \_____  \    \ \  \\\  \   \ \   _  _\       \ \  \                                                                
  \|____|\  \    \ \  \\\  \   \ \  \\  \|       \ \  \                                                               
    ____\_\  \    \ \_______\   \ \__\\ _\        \ \__\                                                              
   |\_________\    \|_______|    \|__|\|__|        \|__|                                                              
   \|_________|                                                                                                       
                                                                                                                      
*/
function insertionSort(arr){
  this.done = false;
  this.a = arr;
  let i = 0, len = this.a.length, j;
  let temp = this.a[i]; 
  this.update = function(playing){
    if(!this.done && playing){
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

/**
 ________       _______       ___           _______       ________      _________    ___      ________      ________      
|\   ____\     |\  ___ \     |\  \         |\  ___ \     |\   ____\    |\___   ___\ |\  \    |\   __  \    |\   ___  \    
\ \  \___|_    \ \   __/|    \ \  \        \ \   __/|    \ \  \___|    \|___ \  \_| \ \  \   \ \  \|\  \   \ \  \\ \  \   
 \ \_____  \    \ \  \_|/__   \ \  \        \ \  \_|/__   \ \  \            \ \  \   \ \  \   \ \  \\\  \   \ \  \\ \  \  
  \|____|\  \    \ \  \_|\ \   \ \  \____    \ \  \_|\ \   \ \  \____        \ \  \   \ \  \   \ \  \\\  \   \ \  \\ \  \ 
    ____\_\  \    \ \_______\   \ \_______\   \ \_______\   \ \_______\       \ \__\   \ \__\   \ \_______\   \ \__\\ \__\
   |\_________\    \|_______|    \|_______|    \|_______|    \|_______|        \|__|    \|__|    \|_______|    \|__| \|__|
   \|_________|                                                                                                           
                                                                                                                          
                                                                                                                          
 ________       ________      ________      _________                                                                     
|\   ____\     |\   __  \    |\   __  \    |\___   ___\                                                                   
\ \  \___|_    \ \  \|\  \   \ \  \|\  \   \|___ \  \_|                                                                   
 \ \_____  \    \ \  \\\  \   \ \   _  _\       \ \  \                                                                    
  \|____|\  \    \ \  \\\  \   \ \  \\  \|       \ \  \                                                                   
    ____\_\  \    \ \_______\   \ \__\\ _\        \ \__\                                                                  
   |\_________\    \|_______|    \|__|\|__|        \|__|                                                                  
   \|_________|   
   */  

function selectionSort(arr){
  this.done = false;
  this.a = arr;
  let len = this.a.length, i = 0, j = i + 1, minIdx;
  function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  } 
  this.update = function(playing){ 
    if(!this.done && playing){
      minIdx = i;
      if(this.a[j] < this.a[minIdx]) minIdx = j;
      j++;
      if(i != minIdx)swap(this.a, i, minIdx);
      if(j >= len){
        i++;
        j = i + 1;
      }
      if(i >= len || isSorted(this.a)){
        this.done = true;
        console.log("done");
        volume0();
        osc.amp(0, 0.5);
      }
    }
  }
  this.show = function(){
    show(this.a, i, j);
  }
}

/**
 _____ ______       _______       ________      ________      _______      
|\   _ \  _   \    |\  ___ \     |\   __  \    |\   ____\    |\  ___ \     
\ \  \\\__\ \  \   \ \   __/|    \ \  \|\  \   \ \  \___|    \ \   __/|    
 \ \  \\|__| \  \   \ \  \_|/__   \ \   _  _\   \ \  \  ___   \ \  \_|/__  
  \ \  \    \ \  \   \ \  \_|\ \   \ \  \\  \|   \ \  \|\  \   \ \  \_|\ \ 
   \ \__\    \ \__\   \ \_______\   \ \__\\ _\    \ \_______\   \ \_______\
    \|__|     \|__|    \|_______|    \|__|\|__|    \|_______|    \|_______|
                                                                           
                                                                           
                                                                           
 ________       ________      ________      _________                      
|\   ____\     |\   __  \    |\   __  \    |\___   ___\                    
\ \  \___|_    \ \  \|\  \   \ \  \|\  \   \|___ \  \_|                    
 \ \_____  \    \ \  \\\  \   \ \   _  _\       \ \  \                     
  \|____|\  \    \ \  \\\  \   \ \  \\  \|       \ \  \                    
    ____\_\  \    \ \_______\   \ \__\\ _\        \ \__\                   
   |\_________\    \|_______|    \|__|\|__|        \|__|                   
   \|_________|                                                            
                                                                           
*/
function mergeSort(arr){
  this.done = false;
  this.a = arr; 
  let len = this.a.length, next,
  tree = [], curMid, curC, workL = [], workR = [], j = 0,  merging = false;
  initTree(0, len - 1);
  this.update = function(playing){ 
    if(!this.done && playing){
      //write here steps
      if(isSorted(this.a) || (tree.length == 0 && !merging)){
        this.done = true;
        console.log("done");
        volume0();
      }
      if(merging)remergeStep(this.a);
      else{
        next = tree[0];
        let mid = floor((next.l + next.r) / 2);
        remergeStart(mid, this.a);
        //HERE WE REMOVE THE NEXT FROM THE TREE ARRAY
        for(let i = tree.length - 1; i >= 0; i--){
            if(tree[i].r == next.r && tree[i].l == next.l){
              tree.splice(i, 1);
              break;
            }
          }
        j = next.r - workR.length;
      }
    }
  }
  this.show = function(){
    show(this.a, j, curC);
  }
  
  function remergeStep(arr){
    if (workL.length > 0 && workR.length > 0) {
      if (workL[0] < workR[0]) {
        arr[curC] = workL[0];
        workL.splice(0, 1);
      } else {
        arr[curC] = workR[0];
        workR.splice(0, 1);
      }
      curC++;
      return;
    }
    if (workL.length > 0) {
      arr[curC] = workL[0];
      workL.splice(0, 1);
      curC++;
      return;
    }
    if (workR.length > 0) {
      arr[curC] = workR[0];
      workR.splice(0, 1);
      curC++;
      return;
    }
    merging = false;
  }

  function remergeStart(mid, arr){
    merging = true;
    curMid = mid;
    curC = next.l;
    workL = [];
    workR = [];
    for(let i = next.l; i <= mid; i++){
      workL.push(arr[i]);
    }
    for(let i = mid + 1; i <= next.r; i++){
      workR.push(arr[i]);
    }
  }

  function initTree(left, right){
    if(left < right){
      let mid = floor((left + right) / 2);
      initTree(left, mid);
      initTree(mid + 1, right);
      tree.push(new mergeLeaf(left, right));
    }
  }
  function mergeLeaf(_l, _r){
    this.l = _l;
    this.r = _r;
  }
}

/********************
 ________  ___  ___  ___  ________  ___  __       
|\   __  \|\  \|\  \|\  \|\   ____\|\  \|\  \     
\ \  \|\  \ \  \\\  \ \  \ \  \___|\ \  \/  /|_   
 \ \  \\\  \ \  \\\  \ \  \ \  \    \ \   ___  \  
  \ \  \\\  \ \  \\\  \ \  \ \  \____\ \  \\ \  \ 
   \ \_____  \ \_______\ \__\ \_______\ \__\\ \__\
    \|___| \__\|_______|\|__|\|_______|\|__| \|__|
          \|__|                                   
                                                  
                                                  
 ________  ________  ________  _________          
|\   ____\|\   __  \|\   __  \|\___   ___\        
\ \  \___|\ \  \|\  \ \  \|\  \|___ \  \_|        
 \ \_____  \ \  \\\  \ \   _  _\   \ \  \         
  \|____|\  \ \  \\\  \ \  \\  \|   \ \  \        
    ____\_\  \ \_______\ \__\\ _\    \ \__\       
   |\_________\|_______|\|__|\|__|    \|__|       
   \|_________|                                   
                                                  
*/
function quickSort(arr){
  this.done = false;
  this.a = arr;
  let len = this.a.length, currentDiv = -1, currentL = - 1, currentR = -1,
  divResult = -1, divI = 0, divJ = 0, divPivot = 0, next = null, heap = [],
  isInitialized, stillIn = false;
  heap.push(new step(0, len - 1));
  this.update = function(playing){ 
    if(!this.done && playing){
      if (heap.length > 0){
        if(next == null)next = heap[heap.length - 1];
        if (divResult == -1 && next.l < next.r){
          currentL = next.l;
          currentR = next.r;
          currentDiv = divI;
          divisionStep(next.l, next.r, this.a);
        }else{          
          quicksortStep(next.l, next.r, divResult);
          divResult = -1;
          //delete next from the heap array
          for(let i = heap.length - 1; i >= 0; i--){
            if(heap[i].r == next.r && heap[i].l == next.l){
              heap.splice(i, 1);
              break;
            }
          }
          next = null;
        }
      }
      if(isSorted(this.a)){
        this.done = true;
        console.log("done");
        volume0();
      }
    }
  }
  this.show = function(){
    for (let i = 0; i < this.a.length; i++) {
      if(i == currentL || i == currentR)stroke(cyan);
      else if(i == divI || i == divJ){
        stroke(magenta);
        playSound(this.a[i]);
      } else stroke(0);
      strokeWeight(3);
      let posX = floor((w / 2) - ((this.a.length * barSpacing) / 2));      
      drawLine(arr, posX, i);
      // line(posX + i * barSpacing, (height / 2), posX + i * barSpacing, (height / 2) - this.a[i]);
    }
  }

  function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  function divisionStep(left, right, arr){
    if (!isInitialized){
      divI = left;
      divJ = right - 1;
      divPivot = arr[right];
      isInitialized = true;
    }
    if(divI < right && arr[divI] <= divPivot){
      divI++;
      return;
    }
    if(divJ > left && arr[divJ] >= divPivot){
      divJ--;
      return;
    }
    if(divI < divJ){
      swap(arr, divI, divJ);
      return;
    }
    if (arr[divI] > divPivot){
      swap(arr, divI, right);
    }
    divResult = divI;
    isInitialized = false; 
  }

  function quicksortStep(left, right, div){
    if (left < right){
      currentDiv = div;
      currentL = left;
      currentR = right;
      heap.push(new step(left, div-1));
      heap.push(new step(div, right));
    }
  }

  function step(_l, _r){
    this.l = _l;
    this.r = _r;
  }
}

/**
 ________      ________      ________      ___      ___    ___ 
|\   __  \    |\   __  \    |\   ___ \    |\  \    |\  \  /  /|
\ \  \|\  \   \ \  \|\  \   \ \  \_|\ \   \ \  \   \ \  \/  / /
 \ \   _  _\   \ \   __  \   \ \  \ \\ \   \ \  \   \ \    / / 
  \ \  \\  \|   \ \  \ \  \   \ \  \_\\ \   \ \  \   /     \/  
   \ \__\\ _\    \ \__\ \__\   \ \_______\   \ \__\ /  /\   \  
    \|__|\|__|    \|__|\|__|    \|_______|    \|__|/__/ /\ __\ 
                                                   |__|/ \|__| 
                                                               
                                                               
 ________       ________      ________      _________          
|\   ____\     |\   __  \    |\   __  \    |\___   ___\        
\ \  \___|_    \ \  \|\  \   \ \  \|\  \   \|___ \  \_|        
 \ \_____  \    \ \  \\\  \   \ \   _  _\       \ \  \         
  \|____|\  \    \ \  \\\  \   \ \  \\  \|       \ \  \        
    ____\_\  \    \ \_______\   \ \__\\ _\        \ \__\       
   |\_________\    \|_______|    \|__|\|__|        \|__|       
   \|_________|                                                
                                                               
  */
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
      generateDigitBucket(this.a);
      this.update = function(playing){ 
        if(!this.done && playing){
      //here the steps
      if(t >= digitBuckets.length){
        generateDigitBucket(this.a);
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
    show(this.a, t, idx);
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

    function generateDigitBucket(arr){
      digitBuckets = [];
      for(let j = 0;j < len; j++){//do this only if the t loop is not done yet
        let digit = getDigit(arr[j],i+1);
        digitBuckets[digit] = digitBuckets[digit] || [];
        digitBuckets[digit].push(arr[j]);
      }
    }
  }

  /**
 ________  ___  ___  _______   ___       ___          
|\   ____\|\  \|\  \|\  ___ \ |\  \     |\  \         
\ \  \___|\ \  \\\  \ \   __/|\ \  \    \ \  \        
 \ \_____  \ \   __  \ \  \_|/_\ \  \    \ \  \       
  \|____|\  \ \  \ \  \ \  \_|\ \ \  \____\ \  \____  
    ____\_\  \ \__\ \__\ \_______\ \_______\ \_______\
   |\_________\|__|\|__|\|_______|\|_______|\|_______|
   \|_________|                                       
                                                      
                                                      
 ________  ________  ________  _________              
|\   ____\|\   __  \|\   __  \|\___   ___\            
\ \  \___|\ \  \|\  \ \  \|\  \|___ \  \_|            
 \ \_____  \ \  \\\  \ \   _  _\   \ \  \             
  \|____|\  \ \  \\\  \ \  \\  \|   \ \  \            
    ____\_\  \ \_______\ \__\\ _\    \ \__\           
   |\_________\|_______|\|__|\|__|    \|__|           
   \|_________|                                       
*************************************************
THIS NEEDS TO BE REVISED AS IT DOESN'T RETURN THE ARRAY COMPLETELY SORTED                                                     
*/
function shellSort(arr) {
  let gaps = createGaps(arr);
  this.done = false;
  this.a = arr;
  let g = 0, gap = gaps[g], i = gap, j = i, len = this.a.length, temp = this.a[i];
  this.update = function(playing){
    if(!this.done && playing){
      shellSortStep(this.a);
      if(i >= len){
        i = gap;
        g++;  
        gap = gaps[g];     
      }     
      if(g > gaps.length || isSorted(this.a)){
        volume0();       
        this.done = true;
      }
    }
  }
  function shellSortStep(arr){
    if(i < len){          
      temp = arr[i];     
      if(j >= gap && arr[j - gap] > temp){
         arr[j] = arr[j - gap];
         j -= gap;
         return;
      }
      arr[j] = temp;
      j = i;
      i++;      
    }
  }
  this.show = function(){
    show(this.a, i, j);
  }

  function createGaps(a) {
    // if a is an array of 100, gaps would be [50, 25, 12, 6, 3, 1]
    let gaps = [];
    let i, j, t;
    for (i = 0, j = a.length, t; 1 <= (t = Math.floor(j / Math.pow(2, i + 1))); i += 1) {
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
}


