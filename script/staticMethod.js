/* 
- Kata kunci static juga tidak hanya bisa ditambahkan di field, tapi juga di method

- Jika kita tambahkan di method, artinya method tersebut jadi milik class nya, bukan prototype

- Dan untuk mengakses method tersebut, kita juga bisa lakukan seperti mengakses static class field

*/

// Contoh
class MathUtil{
    static sum(...numbers){
        let total=0;
        for(const number of numbers){
            total += number 
        }
        return total
    }
}

// jadi cara akses methodnya pun seperti kita mengakses global object
const angka = MathUtil.sum()
console.log(angka);