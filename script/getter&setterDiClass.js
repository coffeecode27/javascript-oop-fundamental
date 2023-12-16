/* 
- Class juga mendukung pembuatan getter dan setter
- Perlu diingat, getter dan setter ini akan berada di prototype, bukan di instance object
*/


// Contoh
class Person {
    constructor(firstName, lastname){
        this.firstName = firstName
        this.lastname = lastname
    }
    // Getter untuk mengambil data fullname dari firstName dan lasName
    get fullName(){
        return `${this.firstName} ${this.lastname}`
    }

    // Setter ini bisa digunakan langsung oleh object instance-nya untuk membuat atau meng-set data
    // lalu data yang di-set, akan di replace atau ditambahkan kedalam value propertynya
    // sehingga untuk mengakses data, bisa dengan mengakses Getter-nya
    set fullName(value){
        const val = value.split(" ")
        this.firstName = val[0]
        this.lastname = val[1]
    }

}

const orang1 = new Person("imam" ,"suranda")
console.log(orang1);

console.log(orang1.fullName);
orang1.fullName = "Yeviana Effendi"
console.log(orang1.fullName);
console.log(orang1);