## Table of Content
1. [Prelude What is error?](#prelude-what-is-error)
1. [Types of program errors](#types-of-program-errors)
1. [Error in Javascript?](#how-do-we-solve-that)
1. [How do we solve that?](#how-do-we-solve-that)
1. [The Debugger](#why-we-need-callback)
1. [Let's get our hand dirty with debugger](#lets-make-callback---synchronous)
1. [Real world case study](#real-world-case-study)
1. [Referensi](#referensi)

## Prelude what is error?
Pada phase 0 kita telah banyak melakukan koding program mulai dari membuat laman html sederhana hingga memecahkan masalah menggunakan bahasa pemrogramman. Dalam setiap pratik koding tentu kita tidak terlepas dari kesalahan. Mungkin sebelumnya kita sembat bertemu dengan beberapa masalah seperti kode tidak dapat berjalan, program tidak menghasilkan output yang semestinya dan banyak lagi. Hal-hal inilah yang kita biasa disebut error.

## Types of program errors
Error dalam dunia programman dapat diklasifikasikan menjadi beberapa tipe:
* ***syntax errors*** => sitanks error adalah jenis error yang mana sangat berkaitan erat dengan cara penulisan sebuah bahasa pemrogramman dimana penulisan kode kita tidak sesuai dengan apa yang telah bahasa pemromgramman tentukan. contoh:
```javascript
cnts nama = "diaz" // cnts secara aturan salah karena konstan direpresentasikan oleh const pada javascript
const obj = { nama: "diaz"  // error karena untuk deklarasi object didefinisikan menggunakan kurung kurawal buka dan kurung kurawal tutup.
```
* ***semantic errors*** => semantik error adalah jenis error yang mana secara aturan atau keyword yang berlaku sudah sesuai hanya saja penggunaannya tidak tepat.
contoh: 
```javascript
const pi = 3.14
pi = 200 // error terjadi karena pi dideklarasikan sebagai konstanta akan tetapi pada baris selanjutanya pi direassign dengan nilai baru.
```
```javascript

const person = {
    name: null
}
console.log(person.name.firstName); // error terjadi karena dalam key(name) tidak terdapat sebuah objek yang memiliki key(firstName)
```
```javascript
const person = {
    name: {
        firstname: "Joni",
        lastName: "dudung"
    }
}
console.log(person.name.firstName); // contoh yang benar
```
* ***logical errors*** => logical error adalah jenis error yang sebenarnya lebih dari cara kita berfikir karena secara penulisan kodingan tidak ada masalah tapi output dari program yang kita buat tidak sesuai dengan yang diinginkan.
```javascript
function penambahan(num1, num2) {
    return num1 - num2
}
const result = penambahan(23, 9)
console.log(result) // ouput seharusnya adalah 32 akan tetapi fungsi mengeluarkan nilai 14, hal ini salah karena pada fungsi penambahan kita menulis minus(-) seharusnya (+)
```
```javascript
for (let i = 0; i < 100; i--) {
    console.log(i)
} // infinity loop
```

Dari sudut pandang bagaimana mesin mendeteksi error pada kodingan, error dapat dibedakan menjadi beberapa jenis:
* ***compile time errors*** => error ini adalah error dimana terjadi ketika program awal program dijalankan dan program tidak dapat berjalan sama sekali. Compile time error dapat diindikasikan juga jika di kodingan kita terjadi sytax atau semantic error.
* ***run time errors*** => error ini terjadi ketika terdapat perubahan data yang mana data ini menyebabkan mesin program(runtime) tidak dapat berjalan.
```javascript
let str = "ini string"
for (let i = 0; i < 3; i++) {
    console.log("loop ke: ", i);
    if (i === 1) {
        string = null
    } else {
        console.log("ini jmlh karakter str: ", str.length);
    }    
} // kode di atas akan terjadi error ketika data string berubah pada kondisi i = 1 nilai dari string tersebut berubah menjadi null sementara pada kondisi else kita menggunakan properti length sementara variable str sudah berubah manjadi null padahal properti ini hanya dimiliki jika variable bertipe string/array
```
```javascript
function pembagian(num1, num2) {
    return num1 / num2
}

let resultSalah = pembagian(10, 0) // terjadi error karena mesin tidak dapat mengkalkulasi pembagian dengan pembagi 0
let resultBenar = pembagian(10, 2) // benar
```
## Errors in Javascript
Javascript dapat mendeteksi error dan menghasilkan pesan yang cukup jelas dan dapat dimengerti, error-error tersebut dapat kita list diantaranya adalah:
* ***ReferenceError*** => error yang terjadi ketika kita memanggil variable yang tidak pernah di deklarasi. contoh:
```javascript
function foo() { 
  'use strict'; 
  bar = true; //variable bar tidak pernah dideklarasi
} 
foo(); // ReferenceError: bar is not defined
```
* ***Unexpected token*** => error yang dihasilkan karena terdapat sintaks yang tidak sesuai dengan kaidah penulisan kode bisa karena adanya penambahan karakter yang berkaitan dengan sintaks atau kurang. contoh karakter***({, (, ;, )***
```javascript
for (let i = 0;; i < 5; i++) {
    console.log(i)
} // error terjadi karena ada penambahan karakter ; 
```
* ***Unexpected identifier*** => error yang terjadi karena kesalahan sintak karena ada sisipan tambahan dari karakter selain karakter yang berkaitan dengan sintaks.
```javascript
let a = 'saya'
if s (a === 'saya) {
    console.log(a)
} // error terjadi karena setelah sintaks if tidak langsung dilanjutkan dengan token { } tapi ada sisipan karakter lain
```


## How do we solve that?
Seletah melihat tipe-tipe error diatas sekarang yang menjadi pertanyaan besar adalah gimana sih cara kita menyelesaikan error-error tersebut?

<img src="menjadiMesin.jpg"
     alt="Menjadi mesin" />

Mugkin beberapa dari kita sudah pernah menontoh kartun spongebob. Nah episode diatas spongebob memberitahu squidward jika ingin memenagkan game di atas adalah dengan caranya ***MENJADI MESIN***. Ini sebenarnya adalah konsep yang sangat bagus dan dapat diimplementasikan juga ketika kita ingin menyelesaikan error pada kodingan kita.

Sederhananya adalah kita harus bisa berfikir bagaimana mesin mengeksekusi program yang kita buat, mulai dari bagaimana control flow (mesin membaca kodingan satu persatu baris kode dari atas ke bawah) bekerja, bagaimana setiap operasi dieksekusi, apa saja perubahan data yang terjadi ketika kita menjalankan program, dll.

Mungkin kadang kita menemui kesulitan ketika mencari error dengan meruntut kode dari atas sampai bawah dan terkadang kode yang kita tulis dieksekusi tidak seperti apa yang kita pikirkan. Disinilah kita membutuhkan bala bantuan sebuah tools magic yaitu ***DEBUGGER***.

## The Debugger
Sang magic telah datang!!!
oke sekarang kita mendegar istilah baru lagi, debugger. Kalau sebelumnya kita biasa menyebut kesalahan program itu error pada dunia koding error ini biasa kita sebut bug dan cara kita menghilangkan bug ini dengan cara BELI BAYGOOONNN!!!, gak gak gak bercanda cara kita untuk menghilangkan bug biasa dinamakan debugging dan alat yang digunakan adalah debugger.

<img src="hammer.gif" alt="hammer is debugger"/>

Debugger berfungsi untuk membantu programmer untuk melakukan tracing pada kode yang dijalankan. tracing meliputi evaluasi control flow, monitoring perubahan data, dan masih banyak lagi fitur-fitur bermanfaat lainnya.

https://www.lambdatest.com/blog/reference-error-javascript/#:~:text=When%20any%20value%20is%20assigned,%22x%22%20in%20strict%20mode.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token

https://www.geeksforgeeks.org/difference-between-compile-time-errors-and-runtime-errors/

https://www.inf.unibz.it/~calvanese/teaching/06-07-ip/lecture-notes/uni10/node2.html



