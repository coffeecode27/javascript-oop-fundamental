/* 
- Walaupun JavaScript sudah memiliki standard class Error

- Namun alangkah baiknya, kita membedakan tiap jenis error

- Untuk membuat error sendiri secara manual sangatlah mudah, cukup membuat class turunan dari class Error

- Dan jangan lupa tambahkan parameter message, agar bisa dikirimkan ke parameter di constructor class Error

*/

// Contoh
class ErrorValidation extends Error{
    constructor(message, field){
        super(message)
        this.field = field;
    }
}

class MathUtil{
    static sum(...numbers){

        if(numbers.length == 0){
            const error = new ErrorValidation('Total Parameter harus lebih dari 0', 'numbers')
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
    console.log(MathUtil.sum()); 
    console.log('Imam'); 
} catch (error) { // error disinii adalah error yg telah kita throw yaitu instance dari ErrorValidation
    if(error instanceof ErrorValidation){
        console.log(`Terjadi error pada field ${error.field} dengan error : ${error.message}`);
    }else{
        console.log(`Erorr : ${error.message}`);
    }
} finally { 
    console.log('Program Selesai!');
}

console.log("Suranda");