
/* 
- Secara default, saat kita menambahkan field, maka field tersebut bisa diakses dari manapun

- Jika kita ingin membuat field yang bersifat private (hanya bisa diakses di dalam class),
  kita bisa menggunakan tanda # sebelum nama field nya

- Ini dinamakan private class field, dan hanya bisa diakses dari dalam class saja
*/

// Contoh
class Counter{
    #counter = 0;

    increment(){
        this.#counter++
    }

    decrement(){
        this.#counter--
    }

    get(){
        return this.#counter
    }
}

const hitungCounter = new Counter()
// hitungCounter.#counter = 100 // error
hitungCounter.increment()
hitungCounter.increment()
hitungCounter.increment()
hitungCounter.increment()
hitungCounter.increment()
console.log(hitungCounter.get());

hitungCounter.decrement()
console.log(hitungCounter.get());
