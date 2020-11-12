//Soal 1
console.log("Soal 1");
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var urutBuah = daftarBuah.sort();
for (var num = 0; num < urutBuah.length; num++) {
    console.log(urutBuah[num])
}
console.log("\n");

//Soal 2
console.log("Soal 2");
var kalimat = "saya sangat senang belajar javascript";
var kalimatSplit = kalimat.split(' ');
console.log(kalimatSplit );
console.log("\n");

//Soal 3
console.log("Soal 3");
var buah = [{ nama: "strawberry", warna: "merah", "ada bijinya": "tidak", harga: 9000 },
{ nama: "jeruk", warna: "oranye", "ada bijinya": "ada", harga: 8000 },
{ nama: "Semangka", warna: "Hijau & Merah", "ada bijinya": "ada", harga: 10000 },
{ nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 10000 }];

buah.forEach(function (item, index) {
    console.log("Array Buah "+(index+1)+ " : " + item.nama)
});
console.log("Buah - 1")
console.log("Nama :" + buah[0].nama);
console.log("Warna :" + buah[0].warna);
console.log("Ada Bijinya :" + buah[0]["ada bijinya"]);
console.log("Harga :" + buah[0].harga)
;

