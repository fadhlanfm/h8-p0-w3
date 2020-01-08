function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var counter = 0;
  if(kalimat.length==1){
    if(kalimat[0] && kalimat[0]!==' '){
      return 1;
    }else{
      return 0;
    }
  }else if(kalimat.length<1){
      return 0;
  }else{
    for(i=0;i<kalimat.length;i++){
      if(kalimat[i] && kalimat[i]!==' ' && kalimat[i+1]===' '){
        counter++;
      }
      if(i==kalimat.length-1 && kalimat[kalimat.length-1] && kalimat[kalimat.length-1]!==' '){
        counter++;
      }
    }
    return counter;
  }
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
console.log(hitungJumlahKata('')); // 0
console.log(hitungJumlahKata(' ')); // 0
console.log(hitungJumlahKata('    ')); // 0
console.log(hitungJumlahKata('    I believe I can code  ')); // 5
console.log(hitungJumlahKata('I believe I can code  ')); // 5
console.log(hitungJumlahKata('    I believe I can code')); // 5
console.log(hitungJumlahKata('I    believe I can code')); // 5
console.log(hitungJumlahKata('I    believe I can code ')); // 5