/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
    let str = String(equation);

    if (str.length === 1) {
        return equation;
    }

    let firstNum = str[0];
    let zeroCount = str.length - 1;
    let total = firstNum + '0'.repeat(zeroCount);
    let rest = Number(str.slice(1));

    if (rest === 0) {
        return total;
    }

    return total + '+' + parseNumber(str.slice(1));
  };
  
  console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
  console.log(parseNumber(90)) // 90
  console.log(parseNumber(2333)) // 2000+300+30+3