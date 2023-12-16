/* 
- karena dalam javascript, Class itu berbentuk function, jadi secara default function tersebut bisa
  memiliki parameter
- Constructor function sama seperti function biasanya, bisa memiliki parameter, hal ini membuat ketika kita
  membuat object, bisa mengirim langsung data lewat parameter di constructor function tersebut
*/

// Contoh
function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.sayHello = function(name) {
        console.info(`Hello ${name}, my name is ${this.firstName}`);
    }
}

const imam = new Person('imam', 'suranda')
imam.firstName
console.log(imam);
