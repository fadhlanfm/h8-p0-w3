function balikString(input){
    var output=[];
    var reverseIndexing=input.length-1;
    for(i=0;i<input.length;i++){
        output[i]=input[reverseIndexing];
        reverseIndexing--;
    }
    return output;
}

console.log(balikString('hello world!'));