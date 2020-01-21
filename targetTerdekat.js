function targetTerdekat(arr) {
    // you can only write your code here!
    var indexOfO = [];
    var indexOfX = [];
    var arrayKosong = [];
    var perjarakan = [];

    for(i=0;i<arr.length;i++){
        if(arr[i]=='o'){
            indexOfO.push(i);
        }else if(arr[i]=='x'){
            indexOfX.push(i);
        }
    }


    if(indexOfO.length==0 || indexOfX.length==0){
        return 0;
    }else{
        for(o=0;o<indexOfO.length;o++){
            for (x=0;x<indexOfX.length; x++){
                if(indexOfO[o]-indexOfX[x]>0){
                    perjarakan.push([indexOfO[o], indexOfX[x], indexOfO[o]-indexOfX[x]]);
                }else{
                    perjarakan.push([indexOfO[o], indexOfX[x], indexOfX[x]-indexOfO[o]]);
                }
            }
        }
    
        var result = perjarakan[0][2];
        for(i=0;i<perjarakan.length-1;i++){
            if(result > perjarakan[i+1][2]){
                result = perjarakan[i+1][2];
            }
        }
        return result;
    }
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'o', 'x', ' ', ' ', 'x'])); // 1
  console.log(targetTerdekat([' ', 'o', ' ', 'o', 'x', ' ', 'o', 'x'])); // 1