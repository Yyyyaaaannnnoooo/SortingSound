function mergeSort(arr){
  osc.amp(0.5, 0.5);
  volumUp();
  let done = false, merging = false;
  this.a = arr; 
  console.log(this.a);
  let len = this.a.length, next,
  tree = [], curMid, curC, workL = [], workR = [], j = 0;
  initTree(0, len - 1);
  this.update = function(){ 
    if(!done){
      //write here steps
      if(isSorted(this.a) || (tree.length == 0 && !merging)){
        done = true;
        console.log("done");
        volume0();
        osc.amp(0, 0.5);
      }
      if(merging)remergeStep(this.a);
      else{
        next = tree[0];
        let mid = floor((next.l + next.r) / 2);
        remergeStart(mid, this.a);
        tree.splice(0, 1);
        j = next.r - workR.length;
      }
      console.log(this.a);
    }
  }
  this.show = function(){
    show(this.a, j, curC);
  }
  
  function remergeStep(arr){
    if (workL.length > 0 && workR.length > 0) {
      // compCount++;
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