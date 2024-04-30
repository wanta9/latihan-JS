// // Fungsi untuk menghitung nilai rata-rata dengan arrow function
// const hitungRataRata = (nama, nilai, callback) => {
//     const total = nilai.reduce((acc, curr) => acc + curr, 0);
//     const rataRata = total / nilai.length;
//     callback(nama, rataRata);
// }

// // Fungsi untuk menghitung total belanjaan dengan arrow function
// const hitungTotalBelanjaan = (nama, belanjaan, callback) => {
//     const total = belanjaan.reduce((acc, curr) => acc + curr, 0);
//     callback(nama, total);
// }

// // Callback untuk menampilkan hasil
// const tampilkanHasil = (nama, hasil) => {
//     console.log(`Hasil untuk ${nama}: ${hasil}`);
// }

// // Data
// const murid = "Supri";
// const nilaiMurid = [90, 67, 45];
// const ibu = "Ibu ";
// const belanjaanIbu = [12000, 13000, 15000];

// // Penggunaan fungsi dengan callback
// hitungRataRata(murid, nilaiMurid, tampilkanHasil);
// hitungTotalBelanjaan(ibu, belanjaanIbu, tampilkanHasil);

// // JQuery

// console.log('mulai');
// $.ajax({
//     URL: 'data/mahasiswa.json',
//     success: (mhs) => {
//         mhs.forEach(m => console.log(m.nama));
//     },
//     error: (e) =>{
//         console.log(e.responseText);
//     }
// })
// console.log('selesai');

// callback
sapa = (nama) => {
    // anonymous function
    console.log(nama);
  };
  
  init = (nama, callbackFunction) => {
    callbackFunction(nama);
    //   let nama = 'Rony Wijaya'; // Simpan nama di dalam fungsi init
  };
  
  // let panggilNama = init(sapa);
  // panggilNama('Rony Wijaya');
  user = { nama: 'Rony Wijaya' };
  init(user.nama, sapa);
  
  // syncronous Callback
  let mahasiswa = [
    {
      nama: 'Rony Wijaya',
      umur: 21,
      kelas: '11',
      jurusan: 'Teknik Informatika',
    },
    {
      nama: 'Hazel Kernel',
      umur: 20,
      kelas: '11',
      jurusan: 'Sistem Informasi',
    },
    {
      nama: 'Ridwan Kernel',
      umur: 20,
      kelas: '11',
      jurusan: 'Sistem Informasi',
    },
  ];
  
  console.log('mulai');
  mahasiswa.forEach((mhs) => {
    console.log(mhs.nama);
  });
  console.log('selesai');
  
  // Asyncronous Callback
  getDataMahasiswa = (url, success, error) => {
    let xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          success(xhr.response);
        } else if (xhr.status == 404) {
          error(xhr.response);
        }
      }
    };
  
    xhr.open('get', url);
    xhr.send();
  };
  
  success = (result) => {
    console.log(typeof result, 'ini awal');
    let mhs = JSON.parse(result);
    console.log(typeof mhs, 'setelah di parse json');
    mhs.forEach((mhs) => {
      console.log(mhs.name);
    });
  };
  error = (err) => {
    console.log(err);
  };
  
  console.log('mulai');
  getDataMahasiswa('https://jsonplaceholder.typicode.com/users', success, error);
  console.log('selesai');
  
  // Ajax
  console.log('mulai');
  $.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
      mhs.forEach((mhs) => {
        console.log(mhs.nama);
      });
    },
    error: () => {},
  });
  console.log('selesai');
  
  let data = async () => {};