function groupAnimals(animals) {
  // you can only write your code here!
  var output = [];
  if(animals.length===0){
    return output
  }
  else{
    for(i=0;i<animals.length;i++){
      for(j=0;j<animals.length-i-1;j++){
        if(animals[j][0]>animals[j+1][0]){
          var tmp = animals[j]
          animals[j] = animals[j+1]
          animals[j+1] = tmp
        }
      }
    }
    
    output.push([animals[0]])
    for(k=1;k<animals.length;k++){
      if(animals[k][0]==output[output.length-1][0][0]){
        output[output.length-1].push(animals[k])
      }else{
        output.push([animals[k]])
      }
    }
    return output
  }
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]