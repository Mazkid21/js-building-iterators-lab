var myEach = require('./myEach');
var myMap = require('./myMap');
var myReduce = require('./myReduce');
/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

var numArray = [0,1,10,100,1000];

function myEach(array, callback) {
  
  for (var i=0; i < array.length; i++) {
  	callback(array[i],i,array);

  }

}


/* myEach */

//
/*myEach(numArray, function print(element, index, arr) {
   console.log('inside myEach', element, index, arr);
 });*/


function myMap(array, callback) {
// naming of new array 
var newArryay  = [];
// for loop  (index i is 0, index is less than the array .length plus 1)
for (var i=0; i < array.length; i++) {
// callingback origonal array (callback is a function in a function) and putting into a var with new array 
 newArryay[i] = callback(array[i],i,array);
 }

 // returning new arryay 
  return newArryay;
}


function myReduce(arr, callback) {

	for (var i=0; i < array.length; i++) {
  	callback(array[i],i,array);
  }
  	return array[i];
}


/*
 Best if 
/* myMap */

/*var input = ["a","b","c"];
var output = myMap(input, function capitalize(v){
    return v.toUpperCase();
});
console.log('Testing myMap');
console.log(output);
console.log(output[0] === "A" && output[1] === "B" && output[2] === "C"); // assertion

console.log("the end");*/
