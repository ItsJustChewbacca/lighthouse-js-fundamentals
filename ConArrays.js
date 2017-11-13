function concat(array1, array2){
  for ( var x = 0; x < array2.length; x++ ) {
    array1.push(array2[x]);
  }
  console.log(array1)
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]))