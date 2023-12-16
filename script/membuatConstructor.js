/* 
- Sebelum EcmaScript versi 6, pembuatan class biasanya menggunakan function, hal ini dikarenakan
  sebenarnya Javascript bukanlah bahasa pemrograman yang fokus ke OOP
- Untuk membuat class dijavascript lama, kita bisa membuatnya dengan menggunakan function
- Function ini kita sebut dengan 'Constructor Function'

** Membuat Object **
- Setalah kita membuat class, dan ketika kita ingin membuat object dari class tersebut, kita bisa
  menggunakan kata kunci 'new', lalu diikuti dengan nama constructor function nya
*/

// Membuat constructor function versi lama
// note : untuk membuat constructor function, huruf awalnya biasanya menggunakan huruf kapital (Uppercase)

function Person(){ // class

}

const imam = new Person() // object