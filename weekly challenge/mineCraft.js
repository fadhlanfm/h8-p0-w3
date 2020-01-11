

/**

 * ===========

 * MINE TYCOON

 * ===========

 *

 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)

 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:

 *

 * - copper

 * - silver

 * - gold

 * - diamond

 *

 * Step adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan.

 *

 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.

 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.

 * Output wajib berurutan mulai dari copper, silver, gold, lalu terakhir diamond.

 *

 * contoh:

 * #mine

 * [

 *  ['#', 'c', 's', '#', '#', '#', '#'],

 *  ['d', '#', 'c', '#', 'd', '#', '#'],

 *  ['#', '#', '#', 'g', '#', '#', '#']

 * ]

 * #steps: 11

 *

 * maka function akan mereturn:

 *  mineral:

 *    [[2, cooper], [1, silver], [1, diamond]]

 *

 *

 * RULES:

 * - Wajib menuliskan Pseudocode!

 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf

 *

 */

function mineCraft(mine, steps) {

    var targets = ['c', 's', 'g', 'd'];
    var result = [];

    for(h=0;h<targets.length;h++){
        var counter = 0;
        if(steps>1){
            for(i=0;i<mine.length;i++){
                steps--;
                for(j=0;j<mine[i].length;j++){
                    
                    if(targets[h] === mine[i][j]){
                        counter++;
                    }
                }
            }
            if(counter>0){
                result.push([counter, targets[h]]);
            }
        }
    }   
    return result;
}

var mine1 = [

	['#', 'h', 's', '#', '#', '#', 'g'],

	['u', '#', 'c', '#', 'd', '#', '#'],

	['#', '#', '#', '#', '#', '#', '#']

];

// console.log(mineCraft(mine1, 10));

// [[1, copper] [1, silver] [1, gold]]

var mine2 = [

	['#', '#', '#', '#', '#', 'w', '#'],

	['r', '#', 'c', '#', 'd', '#', '#'],

	['#', 't', '#', 'c', '#', '#', '#'],

	['#', '#', 's', 'g', '#', '#', '#'],

	['#', '#', '#', '#', '#', '#', '#']

];

console.log(mineCraft(mine2, 20));

// [[2, copper], [1, diamond]]

var mine3 = [

	['d', 'c', '#', 's', '#', 'w', '#'],

	['r', 'b', 'c', '#', '#', '#', 'g'],

	['#', 't', '#', 'c', '#', '#', '#'],

	['#', '#', 's', 'g', '#', '#', '#']

];

// console.log(mineCraft(mine3, 94));

// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]

