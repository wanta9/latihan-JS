
// 1. Object Literal
// let guru = {
//     name: 'papa zola',
//     energi: 30,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.name}, energimu sekarang ${this.energi}`)
//     }
// }

// 2. Function Declaration
// function guru(name, energi) {
//     let guru = {};
//     this.name = name;
//     guru.energi = energi;

//     guru.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.name}, energimu sekarang ${this.energi}`)
//     }

//     guru.ngajar = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.name}, energimu sekarang ${this.energi}`)
//     }

//     return guru;
// } 

// let zola = guru('papa zola', 30);
// let jasmine = guru('cikgu jasmine', 20);

// 3. Constructor Function
// function guru(name, energi) {
//     this.name = name;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.name}, energimu sekarang ${this.energi}`)
//     }

//     this.ngajar = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.name}, energimu sekarang ${this.energi}`)
//     }
// }
// let zola = new guru('papa zola', 30);
// let jasmine = new guru('cikgu jasmine', 20);

// 4. Object.create
// function guru(name, energi) {
//     this.name = name;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.name}, energimu sekarang ${this.energi}`)
//     }

//     this.ngajar = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.name}, energimu sekarang ${this.energi}`)
//     }

//     this.tidur = function (jam) {
//         this.energi += jam * 2;
//         console.log(`halo ${this.name}, energimu sekarang ${this.energi}`)
//     }
//     function guru(name, energi) {
//         let guru = Object.create(this);
//         guru.name = name;
//         guru.energi = energi;

// }

// }

// let zola = new guru('papa zola', 30);
// let jasmine = new guru('cikgu jasmine', 20);

// 5. Prototype
//     function guru(name, energi) {
//         this.name = name;
//         this.energi = energi;
// }

// guru.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `halo ${this.name}, energimu sekarang ${this.energi}`
// }

// guru.prototype.ngajar = function (jam) {
//     this.energi -= jam;
//     return `halo ${this.name}, energimu sekarang ${this.energi}`
// }

// guru.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `halo ${this.name}, energimu sekarang ${this.energi}`
// }

// let zola = new guru ('papa zola', 10);

// versi Class
// class guru {
//     constructor(name, energi) {
//         this.name = name;
//         this.energi = energi;
//     }
//     makan(porsi) {
//         this.energi += porsi;
//         return `halo ${this.name}, energimu sekarang ${this.energi}`
//     }
//     ngajar(jam) {
//         this.energi -= jam;
//         return `halo ${this.name}, energimu sekarang ${this.energi}`
//     }
//     tidur(jam) {
//         this.energi += jam * 2;
//         return `halo ${this.name}, energimu sekarang ${this.energi}`
//     }
// }

// let zola = new guru ('papa zola', 10);
// let jasmine = new guru ('cikgu jasmine', 20);

// let angka = []

// Tugas Ka Akmal 
class Murid {
    constructor(nama, kelas, tanggal_lahir, tempat_lahir) {
        this.nama = nama;
        this.kelas = kelas;
        this.tanggal_lahir = tanggal_lahir;
        this.tempat_lahir = tempat_lahir;
    }

    hitungUmur() {
        const hari = new Date();
        const tanggallahir = new Date(this.tanggal_lahir);
        let umur = hari.getFullYear() - tanggallahir.getFullYear();
        const bulanSekarang = hari.getMonth();
        const bulanLahir = tanggallahir.getMonth();

        if (bulanLahir < bulanSekarang || (bulanLahir === bulanSekarang && hari.getDate() < tanggallahir.getDate())) {
            umur--;
        }
        return umur;
    }

    perkenalanDiri() {
        const umur = this.hitungUmur();
        return `Halo, nama saya ${this.nama}. Aku berumur ${umur} tahun.`;
    }
}

let Ridwan = new Murid('Ridwan', 'XII RPL', '2006-08-26', 'Bekasi');
let Gontor = new Murid('Gontor', 'XII RPL', '2027-02-29', 'Bekasi');
console.log(Ridwan.perkenalanDiri());
console.log(Gontor.perkenalanDiri());
