// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(array, callback) {
// naming of new array 
var newArryay  = [];
// for loop  (index i is 0, index is less than the array .length plus 1)
for (var i=0; i < array.length; i++) {
// callingback origonal array (callback is a function in a function)
 newArryay[i] = callback(array[i],i,array);
 }
 
 
  return newArryay;

 
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
