/*
1. Apa itu algoritma ?
- Jawaban :
langkah - langkah untuk menyelesaikan sebuah masalah atau operasi yang menghasilkan atau menyelsaikan

2. Apa itu pseudocode ?
- Jawaban :
deskripsi sebuah langkah - langkah hampir mendekati bahasa pemograman untuk mempermudah alur pemograman 

3. Apabila ada sebuah pseudocode
    STORE suhu WITH ANY NUMBER
    IF suhu GREATER THAN 37.5 THEN
      DISPLAY "Anda Demam"
    ELSE IF suhu GREATER THAN 37 THEN
      DISPLAY "Anda Terindikasi Demam"
    ELSE 
      DISPLAY "Anda sehat"
    END IF

    Apa output dari pseudocode di atas apabila nilai dari "suhu" diisi dengan 37.2?
- Jawaban :
Anda Terindikasi Demam

4. Buatlah sebuah algoritma dan pseudocode untuk menentukan dan menampilkan hasil perhitungan luas dari bidang segitiga, Dimana rumus luas bidang segitiga adalah 1/2 x alas x tinggi

Algoritma
mulai
1. setengah kali alas
2. mendapatkan hasil setengah kali alas
3. hasil setengah kali alas di kali tinggi segitiga
4. menhasilkan luas bidang segitiga
selesai

pseudocode

mulai
STORE x AS NUMBER WITH 0,5
STORE alas AS NUMBER WITH ANY VALUE
STORE tinggi AS NUMBER WITH ANY VALUE
STORE luas AS 0
STORE z AS CALCULATED x TIMES alas
CALCULATE z TIMES tinggi
SET luas VALUE WITH CALCULATION RESULT
DISPLAY luas
selesai

*/

let alas = 5;
let tinggi = 7;
let luas = (alas * tinggi) / 2;
console.log(luas);
