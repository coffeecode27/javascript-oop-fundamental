/* 
- static adalah kata kunci yang bisa kita tambahkan sebelum field atau method, 
  biasannya ketika kita membuat field atau method, maka secara otomatis field 
  akan menjadi property di instance object, dan method akan menjadi function di prototype

- Jika kita tambahkan static, maka hal itu tidak terjadi

- Jika kita tambahkan static dalam class field, secara otomatis field tersebut bukan lagi milik instance object,
   melainkan milik class nya itu sendiri

- Biasanya static digunakan jika kita ingin membuat utility field atau function

- Cara mengakses static class field pun tidak lagi lewat object, melainkan lewat class nya

- Static class field bisa diartikan sifatnya global, tidak peduli diakses dimana atau siapa yang mengakses,
  hasilnya akan sama

*/

// Contoh
class Configuration{
// jika kita menggunakan static field, maka instance object dari class ini tidak akan mewarisi property berikut
// dan property ini hanya akan menjadi milik class ini sendiri
   static name = "Belajar Javascript OOP"
   static version= 1.0
   static author = "T.Imam Suranda"
}

// Jadi untuk mengakses property yg static, kita langsung menyebutkan nama class, dan chaining dengan nama
// property atau method yang ingin diakases, tidak perlu lagi membuat instance object dari class-nya
console.log(Configuration.name);
console.log(Configuration.version);
console.log(Configuration.author);

// const config = new Configuration()
// console.log(config);