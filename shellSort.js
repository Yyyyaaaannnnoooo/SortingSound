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























