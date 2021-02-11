let str = "ini string"
for (let i = 0; i < 3; i++) {
    console.log("loop ke: ", i);
    if (i === 1) {
        str = null
    } else {
        console.log("ini jmlh karakter str: ", str.length);
    }    
} /* kode di atas akan terjadi error ketika data string berubah 
pada kondisi i = 1 nilai dari string tersebut berubah menjadi null 
sementara pada kondisi else kita menggunakan properti length sementara 
variable str sudah berubah manjadi null padahal properti ini hanya 
dimiliki jika variable bertipe string/array */