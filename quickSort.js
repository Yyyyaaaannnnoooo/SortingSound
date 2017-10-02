function quickSort(arr){
  osc.amp(0.5, 0.5);
  volumUp();
  let done = false, isInitialized, stillIn = false;
  this.a = arr;
  let len = this.a.length, currentDiv = -1, currentL = - 1, currentR = -1,
  divResult = -1, divI = 0, divJ = 0, divPivot = 0, next = null, heap = [];
  heap.push(new step(0, len - 1));
  this.update = function(){ 
    if(!done){
      //write here steps
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
        done = true;
        console.log("done");
        volume0();
        osc.amp(0, 0.5);
      }
      // console.log(this.a);
    }
  }
  this.show = function(){
    // show(this.a, divI, currentL);
    for (let i = 0; i < this.a.length; i++) {
      if(i == currentL || i == currentR)stroke(cyan);
      else if(i == divI || i == divJ){
        stroke(magenta);
        playSound(this.a[i]);
      } else stroke(0);
      strokeWeight(3);
      let posX = floor((w / 2) - ((this.a.length * barSpacing) / 2));
      line(posX + i * barSpacing, (height / 2), posX + i * barSpacing, (height / 2) - this.a[i]);
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
    // compCount++;
    if(divI < right && arr[divI] <= divPivot){
      divI++;
      return;
    }
    // compCount++;
    if(divJ > left && arr[divJ] >= divPivot){
      divJ--;
      return;
    }
    if(divI < divJ){
      swap(arr, divI, divJ);
      return;
    }
    // compCount++;
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