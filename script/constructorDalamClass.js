/* 
- Karena bentuk constructor function mirip dengan function(biasanya), maka kita bisa menambahkan
  parameter pada constructor function, lantas bagaimana dengan Class ?

  - Dalam class kita juga bisa menambahkan constructor, dimana dengan menggunakan constructor kita juga bisa
  menambahkan parameter saat pertamakali membuat object instance-nya

- Untuk membuat constructor dalam class, kita cukup menambahkan katakunci 'constructor'

- intinya, constructor didalam class itu adalah function atau bagian dari class yang akan dijalankan
  pertamakali saat kita membuat sebuah object instance, atau pada saat kita menjalankan class tersebut
*/

// Contoh 
class Person {
    // contructor pada class, akan otomatis dijalankan saat pertamakali pembuatan object instance
    constructor(name){
        console.log(`Hello ${name}`);
    }
}

const imam = new Person('Imam') // parameter ini akan dikirim ke constructor didalam class