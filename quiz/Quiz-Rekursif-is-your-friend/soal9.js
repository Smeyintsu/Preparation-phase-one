/**
Virus Check Recursive
---------------------
Implementasikan function `virusCheckRecursive` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `virus` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  virus: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  virus: 'h|r' ==> berarti mencari h dan r

outuput: 3


RULES:
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - Dilarang membuat variable di luar function virusCheckRecursive
  - Dilarang mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - Dilarang menambahkan function di luar maupun di dalam function virusCheckRecursive

*/

function virusCheckRecursive(str, viruses) {
    if (str.length === 0) {
        return viruses === undefined ? 'There is no virus' : 0;
    }

    if (viruses === undefined) {
        return 'There is no virus';
    }

    let splitVirus = viruses.toLowerCase().split('|');
    let firstChar = str[0].toLowerCase();

    let isVirus = false;
    for (let i = 0; i < splitVirus.length; i++) {
        if (splitVirus[i] === firstChar) {
            isVirus = true;
            break;
        }
    }
    return (isVirus ? 1 : 0) + virusCheckRecursive(str.slice(1), viruses);
  }
  
  console.log(virusCheckRecursive('qlD4MZax0raQqew', 'x|0|q')); // 5
  console.log(virusCheckRecursive('HH0NBP1zRa', 'h|r')); // 3
  console.log(virusCheckRecursive('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6
  console.log(virusCheckRecursive('mjBgPlzks', 'm')); // 1
  console.log(virusCheckRecursive('AIn4Ks05bBaa', 'x')); // 0
  console.log(virusCheckRecursive('RsMFjBUjvIaP')); // There is no virus
  console.log(virusCheckRecursive('')); // There is no virus