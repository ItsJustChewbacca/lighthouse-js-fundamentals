function range(start, end, step) {
  if (start === undefined){
    return [];
  } else if (end === undefined){
    return [];
  } else if (step === undefined){
    return [];
  } else if (start > end){
    return [];
  } else if (step < 0){
    return [];
  }
  var someArray = [];
  for (var x = start; x <= end; x += step) {
    someArray.push(x);
  }
  return someArray
}
console.log(range(0, 10, 2))
