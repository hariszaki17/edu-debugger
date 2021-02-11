function penambahan(num1, num2) {
    return num1 - num2
}
const result = penambahan(23, 9)
console.log(result) /*ouput seharusnya adalah 32 akan tetapi fungsi 
mengeluarkan nilai 14, hal ini salah karena pada fungsi penambahan 
kita menulis minus(-) seharusnya (+)*/