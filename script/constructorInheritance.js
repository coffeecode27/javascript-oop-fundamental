
/* 
- Dalam Constructor, kita biasanya membuat property baik itu berisi value ataupun function(method)
- Di dalam constructor, kita bisa memanggil constructor lain, dengan begitu kita bisa mewarisi semua
  property yang dibuat di constructor lain tersebut
- Untuk memanggil constructor lain, kita bisa menggunakan nama "Constructor.call(this.parameter)"
*/

function Parent(firstName){
    this.firstName = firstName
    this.sayHello = function(nama) {
        console.info(`Hello ${nama}, my name is ${this.firstName}`)
    }
}

function Child(firstName, lastName){
    this.lastName = lastName
    // panggil dan kirim parameter ke constructor Parent dari object saat ini(child)
    // 'this' didalam parameter yg kita kirimkan ke constructor Parent mempunyai referensi ke object saat ini(child)
    Parent.call(this, firstName)
}

const imam = new Child("Imam", "Suranda")
console.log(imam);