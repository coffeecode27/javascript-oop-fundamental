/* 
- Selain digunakan untuk memanggil constructor milih parent class,
  kata kunci super juga bisa digunakan untuk mengakses method parent class

  - Caranya bisa menggunakan super.namafunction

  - Dengan kata lain, super sebenarnya adalah reference ke parent prototype, mirip seperti __proto__
*/

// Contoh
class Shape{
    // Method di parent class
    paint(){
        console.log('Paint Shape');
    }
}

class Circle extends Shape{
    paint(){
        super.paint() // memanggil method yang ada pada prototype parent class-nya
        console.log('Paint circle');
    }
}

const tukang = new Circle()
tukang.paint()