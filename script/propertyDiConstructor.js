
/* 
- Setelah kita membuat object, kita bisa dengan mudah menambahkan property kedalam object tersebut
  hanya dengan menggunakan nama variablenya, diikuti tanda titik dan nama property(yang ingin ditambahkan)
- Namun jika seperti itu, Constructor Function yang telah kita buat tidak terlalu berguna, karena
  property nya hanya ada didalam object yang kita tambahkan property
- Lalu, untuk menambahkan property didalam object yang kita buat dari constructor function,
  kita bisa menggunakan kata kunci this lalu diikuti dengan nama property nya
*/

// Property dalam constructor function
function Person(){
    this.firstName = ''
    this.lastName = ''
}

const imam = new Person()
imam.firstName = "Imam"
imam.lastName = "Suranda"

const yevi = new Person()
yevi.firstName = "Yeviana"
yevi.lastName = "Effendi"

console.log(imam,yevi);

