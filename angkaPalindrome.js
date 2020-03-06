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
}

function angkaPalindrome(num) {
  // you can only write your code here!
  var num = num.toString();
  do{
    num = parseInt(num);
    num++
    var num = num.toString();
  }while(!palindrome(num));
  return num;
}
  

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001