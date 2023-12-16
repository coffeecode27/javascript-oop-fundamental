/* 
- Kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan

- Kita tidak bisa menggunakan operator typeof, karena object dari class, jika kita gunakan operator typeof,
  hasilnya adalah “object”

- Operator instanceof akan menghasilkan boolean, true jika benar object tersebut adalah instance object nya,
  atau false jika bukan

- Operator instanceof mendukung class inheritance, artinya instanceof juga bisa digunakan untuk mengecek,
  apakah sebuah object adalah instance dari class tertentu, atau turunan dari class tertentu

  Note : jika kita menggunakan typeof, itu artinya kita mengecek typedata, bukan instance dari class
*/

class Parent{

}

// class Child{

// }

class Child extends Parent{

}

const parent = new Parent()
const child = new Child()
const imam = new Child()

console.log(parent instanceof Parent); // true
console.log(child instanceof Child); // true
console.log(imam instanceof Parent); // true karena class Child extends dari class Parent