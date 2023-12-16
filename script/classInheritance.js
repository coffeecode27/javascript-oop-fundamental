/* 
- Sebelumnya kita sudah tahu bahwa prototype mendukung pewarisan, walaupun agak sedikit tricky cara pembuatannya
- Untungnya itu diperbaiki di ES6 dengan fitur 'class' nya
- Sebuah class bisa melakukan pewarisan dari class lainnya dengan menggunakan kata kunci extends
- Di JavaScript, class inheritance sama seperti prototype inheritance, hanya bisa memiliki satu parent class
*/

// Contoh

// Parent class yang
class Parent{
    sayHello(name){
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
}

// Class yang akan mewarisi segala sesuatu dari parent class-nya
// untuk melakukan inheritance dari class parent-nya, gunakan kata kunci extends diikuti nama parent classnya
class Child extends Parent{
    sayHello(name){
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
}

const parent = new Parent()
parent.name = 'ayah'
parent.sayHello('anak')

const child = new Child()
child.name = 'anak'
child.sayHello('ayah')

console.log(parent, child);