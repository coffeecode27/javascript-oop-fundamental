/*
            ===== PROTOTYPE =====
- Saat kita membuat object dari constructor function, object tersebut disebut instance
  semua property (baik itu value maupun method), akan berada didalam instance object-nya
  
- Setiap kita membuat sebuah contructor function, maka secara otomatis akan dibuatkan prototype-nya
  misal ketika kita membuat contructor function 'Person', maka secara otomatis akan dibuatkan 'Person.prototype'

- Saat kita membuat sebuah object instance, secara otomatis object tersebut adalah turunan dari 
  Constructor.prototype nya

- Untuk mengakses prototype milik sebuah instance, kita bisa menggunakan _proto_

        ===== MENAMBAH PROPERTY KE PROTOTYPE =====
- Property itu mirip dengan yang ada pada object, dimana kita bisa menambahkan property baik itu value ataupun
  method
- Saat kita menambahkan sebuah property ke Prototype, secara otomatis semua object instance turunan dari
  prototype tersebut akan memiliki property yg kita tambahkan tersebut
*/

// Contoh
function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.sayHello = function(name) {
        console.info(`Hello ${name}, my name is ${this.firstName}`);
    }
}

// Menambah property ke Prototype (tidak akan tampil didalam object instancenya, melainkan pada prototypenya)
Person.prototype.sayGoodbye = function(){
    console.log('Goodbye');
} 

Person.prototype.run = function(){
    console.log('Run Biatchh!');
}

const imam = new Person('imam', 'suranda')
const yevi = new Person('Yeviana', 'Effendi')
console.log(imam, yevi);
// cara akses method dari prototype (Person), jika sebelumnya instance imam sudah memiliki method dengan
// nama yg sama, maka yang akan diakses pertamakali adalah method tersebut
// jika ketika di cek tidak ada, barulah akan naik ke prototype-nya 
imam.sayGoodbye() 
yevi.run()
