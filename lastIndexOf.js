function lastIndexOf(arr, n) {
  var returnValue = -1;
  for (var x = 0; x < arr.length; x++ ) {
    if( arr[x] === n){
      returnValue = x
    }
  }
  return returnValue
}


