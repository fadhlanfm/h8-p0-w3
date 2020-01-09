function cariMean(arr) {
    // you can only write your code here!
    var sum = 0;
    for(i=0;i<arr.length;i++){
        sum += arr[i];
    }

    if(sum % arr.length == 0){
        return sum/arr.length;
    }else{
        //PEMBULATAN KE ATAS (sesuai soal)
        // return sum/arr.length+1-(sum % arr.length/arr.length);
        
        //PEMBULATAN NORMAL (kalo 1.00001 sampai 1.49999 => 1, kalo 1.5 sampai 1.99999 => 2) (sesuai test case)
        if(sum % arr.length/arr.length >= 0.5){
            return sum/arr.length+1-(sum % arr.length/arr.length);
        }else{
            return sum/arr.length-(sum % arr.length/arr.length);
        }
    }
}
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7