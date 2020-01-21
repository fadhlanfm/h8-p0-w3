function groupAnimals(animals) {
  // you can only write your code here!
  var output = [];
  var dictionary = 'abcdefghijklmnopqrstuvwxyz';

  for(i=0;i<dictionary.length;i++){
    var subOutput = [];
    for(j=0;j<animals.length;j++){ 
      if(animals[j][0]==dictionary[i]){
        found = true;
        subOutput.push(animals[j]);
      }
    } 
    if (subOutput.length>0) {
      output.push(subOutput);
    }
  }
  return output;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]