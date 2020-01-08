var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
*/

function dataHandling2(input){

    //
    input.splice(1, 1, 'Roman Alamsyah Elsharawy');
    input.splice(2, 1, 'Provinsi Bandar Lampung');
    input.splice(4, 2, 'Pria', 'SMA Internasional Metro');
    console.log(input);
    // ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

    //
    var tanggalLahir = input[3];
    var tanggalLahirTanpaGaris = tanggalLahir.split('/');

    var angkabulan = tanggalLahirTanpaGaris[1];    
    switch(angkabulan){
        case '01': 
            var bulan = "Januari";
            break;
        case '02':
            var bulan = "Februari";
            break;
        case '03': 
            var bulan = "Maret";
            break;
        case '04': 
            var bulan = "April";
            break;
        case '05': 
            var bulan = "Mei";
            break;
        case '06': 
            var bulan = "Juni"; 
            break;
        case '07': 
            var bulan = "Juli";
            break;
        case '08': 
            var bulan = "Agustus";
            break;
        case '09': 
            var bulan = "September";
            break;
        case '10': 
            var bulan = "Oktober";
            break;
        case '11': 
            var bulan = "November";
            break;
        case '12': 
            var bulan = "Desember";
            break;
        }
    console.log(bulan);
    // Mei

    var tanggalNih = tanggalLahir.split('/').join('-');
    
    console.log(tanggalLahirTanpaGaris.sort(function(a, b){return b-a}));
    console.log(tanggalNih);
    return input[1].slice(0,15);
}

console.log(dataHandling2(input));