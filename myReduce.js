// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(array, callback) {
   	var current = null;

	for (var i=0; i < array.length; i++) {
  	
  	current = callback(array[i],i,array);

  	current += 1;

  	return array[i];
  }

}



/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
