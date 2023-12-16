/* 
- Membuat method di class sebenarnya bisa dilakukan dengan cara seperti menambahkan method di constructor function

- Namun, hal tersebut sebenarnya menambahkan method ke dalam instance object

- Khusus untuk method sebaiknya kita menambahkan ke prototype, bukan ke instance object

- Untung nya di class, ada cara mudah menambahkan method dan secara otomatis ditambahkan ke prototype
*/

// Contoh 
class Person{
    constructor(name){
        this.name = name
    }

    // Membuat method dalam class, tanpa menggunakan kata kunci 'function'
    // dan dengan cara pembuatan method yg seperti ini,
    // itu artinya kita menambahkan method ini kedalam prototype-nya, bukan di object instance-nya
    sayHello(name){
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
}

const imam = new Person("imam")
imam.sayHello('yevi')
// console.log(imam);