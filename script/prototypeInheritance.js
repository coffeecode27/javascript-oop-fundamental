/* 
- Seakrang kita sudah tau bahwa prototype selalu memiliki parent, artinya dia adalah turunan,
  parent tertinggi adalah Object Prototype

  - Jadi bagaimana jika kita ingin melakukan inheritance ke Prototype lain ?

- Hal ini juga bisa dilakukan, namun agak sedikit tricky, karena hal ini sebenarnya sudah tidak
  direkomendasikan lagi untuk javascript OOP pada javascript modern (ES6), dan sudah direkomendasikan 
  untuk memakai kata kunci Class.
*/

function Parent(name) {
    this.name = name
}

function Child(name) {
    this.name = name
}

// Child.prototype = Parent.prototype; // cara salah

// jadi prototype didalam contructor Child, diambil atau diwariskan dari constructor Parent
Child.prototype = Object.create(Parent.prototype) 


Parent.prototype.sayHello = function(name) {
    console.log(`Hello ${name}, My name is Parent ${this.name}`);
}

Child.prototype.sayHello = function(name) {
    console.log(`Hello ${name}, My name is Child ${this.name}`);
}

const parent = new Parent('ayah') // bikin object instance dari contructor Parent
const child = new Child('anak') // bikin object instance dari contructor Child

parent.sayHello('imam')
child.sayHello('yevi')