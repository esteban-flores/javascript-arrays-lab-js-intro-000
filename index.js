var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
destructivelyAppendKitten = function(name){
  kittens.push(name);
  return kittens;
}
/*
destructivelyPrependKitten = function(name){
  kittens.unshift(name);
  return kittens;
}

destructivelyRemoveLastKitten = function(){
  kittens.pop();
  return kittens;
}
*/


/*Arrays removeFirstKitten() removes the first kitten from the kittens
array and returns a new array, leaving the kittens array unchanged*/
var kittens = ['Milo', 'Otis', 'Garfield'];
function removeFirstKitten(){
  var newKittens = kittens.slice(1);
  return newKittens;
}
