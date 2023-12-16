
/*
- Sama seperti pada contructor function, dalam class pun kita bisa menambahkan property

- Karena hasil akhirny adalah sebuah object, jadi menambahkan property dalam class juga bisa
  dilakukan di instance object-nya, atau juga bisa langsung didalam constructor di class-nya
 */

// Contoh 
class Person{
    constructor(name){
        this.name = name
    }
}

const imam = new Person("imam")
console.log(imam.name);