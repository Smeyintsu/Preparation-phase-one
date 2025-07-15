/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
    let result = [];

    let cityRoute = ['Yogyakarta', 'Semarang', 'Surabaya', 'Denpasar'];

    let transportCost = {
        Pesawat: 275000,
        Kereta: 250000,
        Bis: 225000,
    }

    let discount = 0;
    if (emoney === 'OVO') {
        discount = 0.15;
    } else if (emoney === 'Dana') {
        discount = 0.1;
    } else if (emoney === 'Gopay') {
        discount = 0.05;
    }

    for (let i = 0; i < arr.length; i++) {
        let resultArray = [];
        let tempString = '';
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == '-') {
                resultArray.push(tempString);
                tempString = ''
            } else {
                tempString += arr[i][j]
            }
        }
        resultArray.push(tempString);

        let name = resultArray[0];
        let from = resultArray[1];
        let to = resultArray[2];
        let transport = resultArray[3];

        let idxFrom = 0;
        let idxTo = 0;
        for (let k = 0; k < cityRoute.length; k++) {
            if (cityRoute[k] === from) {
                idxFrom = k;
            } else if (cityRoute[k] === to) {
                idxTo = k;
            }
        }

        let distance = Math.abs(idxFrom - idxTo);
        let useTransport = transportCost[transport];
        let pricePerRoute = useTransport * distance;
        let totalPrice = pricePerRoute - pricePerRoute * discount;

        let travel = {
            name: name,
            departureCity: from,
            destinationCity: to,
            transport: transport,
            totalCost: totalPrice,
        }

        result.push(travel);
    }

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i].totalCost < result[j].totalCost) {
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp; 
            }
        }
    }
    return result;
  };
  
  console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
  /*
  [ { name: 'Bahari',
      departureCity: 'Semarang',
      destinationCity: 'Denpasar',
      transport: 'Pesawat',
      totalCost: 467500 },
    { name: 'Alif',
      departureCity: 'Denpasar',
      destinationCity: 'Surabaya',
      transport: 'Kereta',
      totalCost: 212500 },
    { name: 'Danang',
      departureCity: 'Yogyakarta',
      destinationCity: 'Semarang',
      transport: 'Bis',
      totalCost: 191250 } ]
  */
  console.log("==================================================================================================");
  console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
  // /*
  // [ { name: 'Shafur',
  //     departureCity: 'Surabaya',
  //     destinationCity: 'Yogyakarta',
  //     transport: 'Kereta',
  //     totalCost: 450000 },
  //   { name: 'Taufik',
  //     departureCity: 'Semarang',
  //     destinationCity: 'Surabaya',
  //     transport: 'Pesawat',
  //     totalCost: 247500 },
  //   { name: 'Alex',
  //     departureCity: 'Yogyakarta',
  //     destinationCity: 'Semarang',
  //     transport: 'Kereta',
  //     totalCost: 225000 } ]
  // */
  console.log("==================================================================================================");
  console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
  // /*
  // [ { name: 'Katy',
  //     departureCity: 'Surabaya',
  //     destinationCity: 'Denpasar',
  //     transport: 'Pesawat',
  //     totalCost: 261250 },
  //   { name: 'Andika',
  //     departureCity: 'Denpasar',
  //     destinationCity: 'Surabaya',
  //     transport: 'Bis',
  //     totalCost: 213750 } ]
  // */
  console.log("==================================================================================================");
  console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
  // /*
  // [ { name: 'Putra',
  //     departureCity: 'Denpasar',
  //     destinationCity: 'Yogyakarta',
  //     transport: 'Pesawat',
  //     totalCost: 825000 } ]
  // */
  console.log(travelingIndonesia([], 'Cash')); // [];