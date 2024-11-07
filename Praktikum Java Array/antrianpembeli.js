// Antrian awal pembeli
let antrian = ["ray", "fiki", "fadhilla", "farah"];
console.log("Antrian awal:", antrian);

// Datang 1 pembeli, yaitu "nabila"
antrian.push("nabila");
console.log("Setelah 'nabila' datang:", antrian);

// Datang lagi 2 pembeli, yaitu "maza" dan "elsi"
antrian.push("maza", "elsi");
console.log("Setelah 'maza' dan 'elsi' datang:", antrian);

// Pembeli terakhir memutuskan pulang
antrian.pop();
console.log("Setelah pembeli terakhir pulang:", antrian);

// Pembeli pertama sudah mendapatkan belanjaannya
antrian.shift();
console.log("Setelah pembeli pertama selesai:", antrian);

// Pembeli kedua sudah mendapatkan belanjaannya
antrian.shift();
console.log("Setelah pembeli kedua selesai:", antrian);

// Pembeli baru "tomi" datang dan nyerobot antrian di depan
antrian.unshift("tomi");
console.log("Setelah 'tomi' nyerobot antrian:", antrian);

// Hasil akhir
console.log("Hasil akhir antrian:", antrian);
