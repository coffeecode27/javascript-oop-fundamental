/* 
- Sama seperti field, terdapat proposal juga untuk menambah fitur private method di EcmaScript

- Dengan demikian, access modifier private juga bisa digunakan di method

- Caranya sama, dengan menambahkan tanda # diawal method, maka secara otomatis method tersebut adalah private

- Ingat fitur ini masih dalam tahapan, belum benar-benar menjadi standard EcmaScript,
  jadi mungkin tidak semua browser mendukung fitur ini

- https://github.com/tc39/proposal-private-methods 

*/

// Contoh
class Person {
    
    say(name){
        if(name){
            this.#sayWithName(name)
        }else{
            this.#sayWithoutName()
        }
    }

    #sayWithoutName(){
        console.log("Hello");
    }

    #sayWithName(name){
        console.log(`Hello ${name}`);
    }
}

const personOne = new Person()
personOne.say()