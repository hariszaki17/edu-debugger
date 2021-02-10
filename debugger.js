for (let i = 0;; i < 2; i++) {
    console.log("mantap");
    // debugger
    
    const a = "kalal''"
    if (i === 1) {
        console.log("INI SATU");
        // a = "kala"
    } else {
        console.log("INI BUKAN SATU");
    }
    // debugger
}

// secara umum debugging adalah proses untuk memcari sumber error dari kode yang kita tulis
// yang menjadi pertanyaan adalah bagaimana kita mencari tau sumber dari error tsb?
// sederhananya kita dapat melakukan evaluasi pada tiap baris kodingan yang kita buat.
// tapi sering kali kodingan yang kita buat tidak merepresentasikan bagaimana cara kodingan kita berjalan sesuai control flow

// contohnya adalah jika kita menulis for loop terdapat block code di dalamnya walaupun misalnya code block for loop hanya dituliskan
// dalam 6 baris tapi karena for tersebut ialah loop maka kodingan kita scr runtime dieksekusi sejumlah loop yang berlaku, karenanya 
// mencari error hanya dengan melihat kodingan terkadang juga tidak cukup karena ada proses dibelakang kodingan tersebut yg sejatinya harus kita evaluasi
// belum lagi jika setiap loop variable yang terdapat dalam  block code kita berubah nilainya dan mungkin saja nilai inilah yang menjadi penyebab datangnya error.

// kareanya dalam proses debugging ini kita butuh bantuan tools untuk melakukan evaluasi scr lebih menyeluruh menggunakan debugger
// scr basic node runtime sudah menyediakan tool debugging bawaan yang kita dapat guanakan secara praktis. node debugger dapat digunakan menggunakan cli
// dan terdapat set command yang kita dapat gunakan sbg utilitas untuk melakukan debug

// command node debugger yang common digunakan daintaranya adalah: setBreakpoint, next, cont, watch, dll
// setiap keyword/command diatas memiliki fungsi yang berbeda => tulis funsgis masing" command