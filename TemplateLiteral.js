// Contoh template literal
// const nama = 'papa zola';
// const umur = 30;
// const pekerjaan = 'pengembang web';

// // Menggunakan template literal untuk membuat string
// const bio = `Nama: ${nama}, Umur: ${umur}, Pekerjaan: ${pekerjaan}`;

// console.log(bio);

// tagged template

// Fungsi tag untuk memproses template literal
// function biodata(strings, ...values) {
//     let hasil = '';
//     strings.forEach((string, i) => {
//       hasil += string;
//       if (values[i]) {
//         hasil += values[i];
//       }
//     });
//     return hasil;
//   }
  
//   // Variabel untuk data
//   const nama = 'papa zola';
//   const umur = 30;
//   const pekerjaan = 'pengembang web';
  
//   // Memanggil fungsi tag dengan template literal
//   const bio = biodata`Nama: ${nama}, Umur: ${umur}, Pekerjaan: ${pekerjaan}`;
  
//   console.log(bio);
  
// html fragment
// const nama = 'papa zola';
// const umur = 30;
// const pekerjaan = 'pengembang web';

// const htmlFragment = `
//   <div class="bio">
//     <h2>Nama: ${nama}</h2>
//     <p>Umur: ${umur}</p>
//     <p>Pekerjaan: ${pekerjaan}</p>
//   </div>
// `;

// // Sekarang, Anda dapat menyisipkan htmlFragment ke dalam dokumen HTML
// // Misalnya, dengan menggunakan innerHTML:
// document.body.innerHTML = htmlFragment;

// // expession interpolation
// const nama = 'papa zola';
// const umur = 30;
// const pekerjaan = 'pengembang web';

// const htmlFragment = `
//   <div class="bio">
//     <h2>Nama: ${nama}</h2>
//     <p>Umur: ${umur}</p>
//     <p>Pekerjaan: ${pekerjaan}</p>
//     <p>Tahun lahir: ${new Date().getFullYear() - umur}</p>
//   </div>
// `;

// // Sekarang, Anda dapat menyisipkan htmlFragment ke dalam dokumen HTML
// // Misalnya, dengan menggunakan innerHTML:
// document.body.innerHTML = htmlFragment;

//fusion bjir
// Variabel data
// const nama = 'papa zola';
// const umur = 30;
// const pekerjaan = 'pengembang web';

// // Fungsi untuk mendapatkan tahun lahir
// function hitungTahunLahir(umur) {
//   return new Date().getFullYear() - umur;
// }

// // HTML fragment dengan expression interpolation
// const htmlFragment = `
//   <div class="bio">
//     <h2>Nama: ${nama}</h2>
//     <p>Umur: ${umur}</p>
//     <p>Pekerjaan: ${pekerjaan}</p>
//     <p>Tahun lahir: ${hitungTahunLahir(umur)}</p>
//   </div>
// `;

// // Menyisipkan htmlFragment ke dalam dokumen HTML
// document.body.innerHTML = htmlFragment;
