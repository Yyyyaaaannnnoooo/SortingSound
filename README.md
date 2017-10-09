# AlgorhythmicSorting WEB application
<blockquote>AlgorhythmicSorting is an open source program and learning tool for people, who want to learn and analyze the diversity of sorting algorithms by hearing the different rhythmic and pattern generating behaviour of different sorting algorithms like bubble sort, merge sort, quick sort or heap sort and others. It shall be used by students, sound artists, researchers and hobbyists to learn the rhythmic basics of algorithms.</blockquote><br>
Based on the work of <a href="http://shintaro-miyazaki.com/?work=algorhythmicsorting"> Shintaro Miyazaki</a> this web applications shows the behaviour of different sorting algorithms on a random list of numbers. The web application has been written in <a href="https://p5js.org">p5.js</a>, a JavaScript library similar to <a href="https://processing.org">Processing</a>.
<h3>To the <a href="https://atomiccoders.github.io/SortingSound/"> WEB app</a></h3>
<h2>Sorting Algorithms</h2>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Bubble_sort">Bubble Sort</a></li>
<li><a href="https://en.wikipedia.org/wiki/Selection_sort">Selection Sort</a></li>
<li><a href="https://en.wikipedia.org/wiki/Insertion_sort">Insertion Sort</a></li>
<li><a href="https://en.wikipedia.org/wiki/Merge_sort">Merge Sort</a></li>
<li><a href="https://en.wikipedia.org/wiki/Quicksort">Quick Sort</a></li>
<li><a href="https://en.wikipedia.org/wiki/Shellsort">Shell Sort</a></li>
<li><a href="https://en.wikipedia.org/wiki/Radix_sort">Radix Sort</a></li>
<li>...more to come</li>
</ul>
<h2>How it works</h2>
For each sorting algorithm I created a class that takes an array of numbers as argument, with a <code>show()</code> and <code>update()</code> function.
The <code>show()</code> function displays the array as it is sorted by the algorithm.
The <code>update()</code> function executes step by step the algorithm. The algorithm have been broken down from being loops and recursion to step by step actions.
![diagram](https://user-images.githubusercontent.com/17408277/31335127-7fff60b6-acf1-11e7-9cce-11953c98b9da.png)
<h2>References</h2>
Really useful explanation and JavaScript codes can be found at the following blogs and websites
<ul>
<li><a href="https://khan4019.github.io/front-end-Interview-Questions/sort.html#bubbleSort">JS: Interview Questions
Sort related interview questions for intermediate JavaScript developers</a> by <a href="https://github.com/khan4019">That JS Dude</a></li>
<li><a href="http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript-all-the-code/">Sorting algorithms in JavaScript, all the code</a> by <a href="http://blog.benoitvallon.com">Benoit Vallon</a></li>
<li><a href="https://github.com/jcjohnson/sorting.js">sorting.js</a> another sorting web application made by <a href="https://github.com/jcjohnson">Justin Johnson</a></li>
<li><a href="https://taoalpha.github.io/blog/2016/01/19/tech-javascript-sorting-algorithm-radix-sort/">JavaSript Sorting Algorithm - Radix Sort and Bucket Sort</a>Useful for understanding radix sort, made by <a href="https://github.com/taoalpha">taoalpha</a></li>
<li><a href="https://github.com/timgrohmann/sorting-algorithms-visualized">Sorting Algorithms Visualized</a> a nice <a href="https://processing.org">Processing</a> based visualiztion of different sorting algorithm, made by <a href="https://github.com/timgrohmann">Tim Grohmann</a></li>
</ul>
<h2>BUGS</h2>
<ul>
  <li>shell sort needs to be fixed, it does not sort completely</li>
  <li>some problems with safari, the play button does not work properly. It works on any other browser</li>
</ul>
<h2>TO DO</h2>
<ul>
  <li>Use class prototypes</li>
  <li>Add new sorting algorithms</li>
  <li>Improve the <code>show</code> function</li>
</ul>
