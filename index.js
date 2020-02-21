var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
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

/*removeLastKitten() removes the last kitten in the kittens array and
returns a new array, leaving the kittens array unchanged*/
function removeLastKitten(){

}

/*removeFirstKitten() removes the first kitten from the kittens
array and returns a new array, leaving the kittens array unchanged*/
function removeFirstKitten(){
  var newKittens = kittens.slice(1);
  return newKittens;
}
