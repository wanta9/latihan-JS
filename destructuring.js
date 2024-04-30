// // Descontructuring Assignment

// // Destructuring Array
// const nomor = [1, 2, 3];
// const [a, b, c] = nomor;
// console.log(a); 
// console.log(b); 
// console.log(c); 

// // Destructuring Objek
// const person = { name: 'John', age: 30 };
// const { name, age } = person;
// console.log(name); 
// console.log(age); 

// // Destructuring Function

// // Objek
// // Mendefinisikan fungsi dengan parameter yang merupakan objek
// function printPersonInfo({ name, age }) {
//     console.log(`Name: ${name}, Age: ${age}`);
// }

// let orang = { name: 'John', age: 30 };

// // Memanggil fungsi dengan objek
// printPersonInfo(person);

// // array
// // Mendefinisikan fungsi dengan parameter yang merupakan array
// function printFirstAndSecond([first, second]) {
//     console.log(`First element: ${first}, Second element: ${second}`);
// }

// let numbers = [1, 2, 3, 4, 5];

// // Memanggil fungsi dengan array sebagai argumen
// printFirstAndSecond(numbers);



// Fungsi untuk menghitung nilai rata-rata dengan arrow function
const hitungRataRata = (nama, nilai, callback) => {
    const total = nilai.reduce((acc, curr) => acc + curr, 0);
    const rataRata = total / nilai.length;
    callback(nama, rataRata);
}

// Fungsi untuk menghitung total belanjaan dengan arrow function
const hitungTotalBelanjaan = (nama, belanjaan, callback) => {
    const total = belanjaan.reduce((acc, curr) => acc + curr, 0);
    callback(nama, total);
}

// Callback untuk menampilkan hasil
const tampilkanHasil = (nama, hasil) => {
    console.log(`Hasil untuk ${nama}: ${hasil}`);
}

// Data
const murid = "Supri";
const nilaiMurid = [90, 67, 45];
const ibu = "Ibu ";
const belanjaanIbu = [12000, 13000, 15000];

// Penggunaan fungsi dengan callback
hitungRataRata(murid, nilaiMurid, tampilkanHasil);
hitungTotalBelanjaan(ibu, belanjaanIbu, tampilkanHasil);
