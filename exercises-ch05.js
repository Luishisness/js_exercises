var prompt = require('sync-prompt').prompt;
/////////////////////Part 1 Chapter 5 exercises//////////////////////////////////

/////////////////////////////////////////Flatten/////////////////////////////////
var arrays = [[1, 2, 3], [4, 5], [6]];
var flattening= function(arr){ 
  return arrays.reduce(function(previousValue, currentValue){return previousValue.concat(currentValue);});                              
};
console.log(flattening(arrays));

/////////////////////////////////////////Every and Some/////////////////////////////////
var every=function(arr, isNan){
  for(var i=0; i<arr.length;i++){
   	if(!isNan(arr[i])){
   		return false;   		 
    }
  }
   return true;
};

var some=function(arr, isNan){
  for(var i=0; i<arr.length;i++){
     if(isNan(arr[i])){
    	return true;   		 
     }
  }
   return false;
};
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false