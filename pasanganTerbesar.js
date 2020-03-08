function pasanganTerbesar(num) {
    // you can only write your code here!
    if(!num){
        return 'please input number'
    }else{
        var stringyNum = num.toString();
        if(stringyNum.length<2){
            return 'please input at least 2 digit'            
        }else{
            var output = stringyNum[0]+stringyNum[1];

            for(i=0;i<stringyNum.length-1;i++){
                if(output>=stringyNum[i]+stringyNum[i+1]){
                    output = output;
                }else{
                    output = stringyNum[i]+stringyNum[i+1];   
                }
            }
            return output;
        }
        
    }
    
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99