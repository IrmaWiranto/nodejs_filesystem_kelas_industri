//buat repository di github masing masing
//namanya: nodejs_filesystem_kelas_industri
//harus punya 2 file, readbiodatafile.js dan writebiodatafile.js
//file yang mau dibuat dan dibaca biodata.txt
//isinya adalah nama, kelas, alamat, dan umur

const fs = require('node:fs');
fs.readFile('Biodata.txt', 'utf8', function(error, data) {
    if(error) 
        {console.error(error);
    } else {
        console.log(data);
    }
});