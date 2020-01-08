function palindrome(kata) {
  // you can only write your code here!
  
  //versi 1
  var reversedKata = '';
  for(i=kata.length-1; i>=0; i--){
    reversedKata += kata[i];
  }

  if(reversedKata == kata){
      return true;
  }else{
      return false;
  }

  //versi 2
//   var setengahKata = Math.floor(kata.length/2);
//   var indexing = 0;
//   var result = false;
//   for(i=setengahKata;i>=0;i--){
//     if(kata[i]!=kata[kata.length - 1 - indexing]){
//         result =  false;
//     }else{
//         result =  true;
//     }
    
//   }
//   return result;


}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false