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

/* START OF PSEUDOCODE

  PROCEDURE mineCraft
    READ mine: 2D array, steps: integer
    SET targets <= [[0, 'c'], [0, 's'], [0, 'g'], [0, 'd']],
        output <= empty array

    FOR each row of mine
      FOR each column of mine
        IF steps IS GREATER THAN zero THEN
          FOR each row of targets
            IF mine[each row][each column] IS EQUAL TO targets[each row][first column] THEN
              DO add one to targets[each row][first column]
            END IF
          END FOR
          DO substract one to steps
        END IF
      END FOR
    END FOR

    FOR each row of targets
      IF targets[each row][first column] NOT EQUAL TO zero THEN
        DO move the selected row of targets to output
      END IF
    END FOR

    PRINT output
  END PROCEDURE

END OF PSEUDOCODE */

function mineCraft(mine, steps) {

  var targets = [[0, 'c'], [0, 's'], [0, 'g'], [0, 'd']];
  var output = [];
  

  for(i=0;i<mine.length;i++){
    for(j=0;j<mine[i].length;j++){
      if(steps>0){
        for(k=0;k<targets.length;k++){
          if(mine[i][j] === targets[k][1]){
            targets[k][0]++;
          }
        }
        steps--;
      }
    }
  }
  
  for(i=0;i<targets.length;i++){
    if(targets[i][0] !== 0){
      output.push(targets[i]);
    }
  }

  return output;
}

var mine1 = [

	['#', 'h', 's', '#', '#', '#', 'g'],

	['u', '#', 'c', '#', 'd', '#', '#'],

	['#', '#', '#', '#', '#', '#', '#']

];

console.log(mineCraft(mine1, 10));

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

console.log(mineCraft(mine3, 94));

// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]
