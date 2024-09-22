//buat repository di github masing masing
//namanya: nodejs_filesystem_kelas_industri
//harus punya 2 file, readbiodatafile.js dan writebiodatafile.js

const fs = require('node:fs');

//file yang mau dibuat dan dibaca biodata.txt
//isinya adalah nama, kelas, alamat, dan umur
fs.writeFile('Biodata.txt', 'Nama: Irma Nur Faizah Wiranto, Kelas: XI TJKT 2, Alamat: Vida Bekasi jln. Taman Apel Hijau VD, Umur: 16 thn',
function(error) {
    if (error){
        console.error ('Terjadi Error karena: ', error);
    } else {
        console.log('file berhasil dibuat');
    }
});