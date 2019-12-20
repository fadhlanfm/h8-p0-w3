function dataHandling(input){
    var firstDimensionInputSize = input.length;
    var secondDimensionInputSize = input[0].length;

    for(i=0;i<firstDimensionInputSize;i++){
        for(j=0;i<secondDimensionInputSize;j++){
            switch(j){
                case 0:
                    console.log('Nomor ID: ' + input[i][0]);
                    break;
                case 1:
                    console.log('Nama Lengkap: ' + input[i][1]);
                    break;
                case 2:
                    console.log('TTL: ' + input[i][2] + ' ' + input[i][3]);
                    break;
                case 3:
                    break;
                case 4:
                    console.log('Hobi: ' + input[i][4]);
                    break;
                default:
                    console.log();break;return;
            }
        }
    }
    return;
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input));