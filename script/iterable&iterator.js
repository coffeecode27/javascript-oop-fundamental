/* 
- Salah satu fitur terbaru di ES6 adalah iterable

- Iterable adalah spesial object yang memiliki standarisasi

- Dengan mengikuti standarisasi Iterable, 
  secara otomatis kita bisa melakukan iterasi terdapat data tersebut dengan menggunakan perulangan for...of

- Contoh yang sudah mengikuti standarisasi Iterable adalah string, Array, Object, dan lain-lain

- Jika kita mengikuti kontrak Iterable, maka object yang kita buat akan bisa dilakukan iterasi menggunakan for...of

- Setiap kita melakukan perulangan, object Iterator akan dibuat

- Hal ini menjadi aman jika kita melakukan iterasi berulang-ulang, karena Iterator baru akan dibuat terus menerus

*/

// Contoh
class CounterIteratorResult{ // class untuk hasil
    constructor(value, done){
        this.value = value
        this.done = done
    }
}

class CounterIterator{ // class untuk proses
    constructor(value, max){
        this.value = value
        this.max = max
    }
    next(){
        try{
            if(this.value >= this.max){ 
                // jika sudah terpenuhi, kirimkan ke class hasil (CounterIteratorResult)
                return new CounterIteratorResult(this.value, true)
            }else{
                // jika belum terpenuhi, juga kirimkan ke class hasil (CounterIteratorResult)
                return new CounterIteratorResult(this.value, false)
            }
        }finally{
            // dan naikkan nilai dari value, sehingga mencapai max
            this.value++
        }
    }
}

class Counter{ // class yg akan dikirimkan sebagai data iterable-nya
constructor(value, max){
    this.value = value
    this.max = max
  }

  // method kontrak iterable
  [Symbol.iterator](){
    return new CounterIterator(this.value, this.max)
  }
}

// Penggunaan perulangan for..of untuk iterator dari data yang iterable
const counter = new Counter(1, 20)
for(const data of counter){
    console.log(data);
}


