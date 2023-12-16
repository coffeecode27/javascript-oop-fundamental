/* 
- Saat terjadi error di kode program JavaScript, kadang kita tidak ingin program kita berhenti

- Di JavaScript, kita bisa menangkap jika terjadi error

- Kita bisa menggunakan try catch statement untuk menangkap error

- Pada block try, kita akan 'mencoba' mengakses kode program yang bisa menyebabkan error,
  dan jika terjadi error, block try akan berhenti dan otomatis masuk ke block catch

- Jika tidak terjadi error, block catch tidak akan dieksekusi

        ==== Kata Kunci 'finally' ====

- Kadang kita ingin melakukan sesuatu entah itu terjadi error ataupun tidak

- Dalam try catch, kita bisa menambahkan block finally

- Block finally ini akan selalu dieksekusi setelah try catch selesai, entah terjadi error atau tidak,
 block finally akan selalu dieksekusi

        ==== Try Finally ====

- Kata kunci finally juga bisa digunakan tanpa perlu menggunakan catch 
- Biasanya ini digunakan dalam kasus tertentu

*/

// Contoh
class MathUtil{
    static sum(...numbers){

        if(numbers.length == 0){
            const error = new Error("Total parameter harus lebih dari 0")
            throw error;
        }

        let total=0;
        for(const number of numbers){
            total += number 
        }
        return total
    }
}

try {
    console.log(MathUtil.sum(1,2,3)); // jika ada error di baris ini, maka akan langsung melompat ke block catch
    console.log('Imam'); // dan baris ini tidak akan di eksekusi
} catch (error) { // akan dieksekusi saat ada error didalam block try
    console.log(`Error : ${error.message}`);
} finally { // akan tetap dieksekusi walaupun terjadi error ataupun tidak
    console.log('Program Selesai!');
}

console.log('Suranda'); // baris ini akan selalu dieksekusi

class Counter{
    
    #counter = 1

    next(){
        try{
            return this.#counter
        }finally{
            this.#counter++
        }
    }
}

const angka = new Counter()
console.log(angka.next());
console.log(angka.next());