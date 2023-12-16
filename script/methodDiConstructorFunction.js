/* 
- Sama seperti typedata object biasanya, kita juga bisa menambahkan method dalam constructor function.
- Jika kita tambahkan method didalam constructor function, secara otomatis object yang dibuat akan memiliki
  method tersebut.
*/

// Menambahkan method dalam consutructor function
function Person() {
    this.firstName = ''
    this.lastName = ''
    this.sayHello = function(name) {
        console.info(`Hello ${name}, my name is ${this.firstName}`);
    }
}

const imam = new Person()
imam.firstName = "Imam"
imam.sayHello("Yevi")

