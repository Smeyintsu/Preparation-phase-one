/**
  Hapus Simbol Rekursif
  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.
  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusSimbolRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
**/

function hapusSimbolRec(str) {
    if (str.length === 0) {
        return '';
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 0 && str[i] <= 9)) {
                return str[i].concat(hapusSimbolRec(str.slice(1)));
            } else {
                return hapusSimbolRec(str.slice(1));
            }
        } else {
            return hapusSimbolRec(str.slice(1));
        }
    }
  }
  
  console.log(hapusSimbolRec('test4@aa')); //test4aa
  console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbolRec('ma@#k!an~')); // makan
  console.log(hapusSimbolRec('coding')); // coding
  console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100