/* 
- Class Inheritance sifatnya seperti Prototype Inheritance

- Bagaimana dengan Constructor Inheritance?
  Sebenarnya Constructor Inheritance hanyalah melakukan eksekusi constructor lain 
  dengan tujuan agar property di constructor lain bisa ditambahkan ke instance object ini

- Dalam kasus ini, jika kita ingin mencapai hasil yang sama, kita bisa menggunakan 
  kata kunci 'super' di dalam constructor

- Kata kunci super digunakan untuk memanggil constructor super class

- Jika di child class kita membuat constructor, maka kita wajib memanggil parent constructor, 
  walaupun di parent tidak ada constructor

*/

// Contoh

// Parent sebagai super class
class Parent{
    constructor(firstName){
        this.firstName = firstName
    }
    // method
    sayHello(name){
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }
}

// jika class yang meng-extends constructor parent-nya ingin membuat constructor,
// maka wajib untuk membawa contructor dari parent-nya, walaupun parent class-nya tidak pernah
// atau tidak memiliki constructor didalamnya
// tapi jika parent class-nya sudah memiliki constructor, dan child classnya tidak membuat constructor
// maka secara otomatis child class-nya akan mewarisi constructor dari parent-class nya
class Child extends Parent{
    constructor(firstName, lastName){
        // kata kunci super berarti kita memanggil constructor dari parent-nya
        super(firstName)
        this.lastName = lastName
    }
    sayHello(name){
        console.log(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`);
    }
}

const parent = new Parent('ayah')
parent.sayHello('anak')

const child = new Child('Yeviana', 'Effendi')
child.sayHello('ayah')

console.log(parent, child);