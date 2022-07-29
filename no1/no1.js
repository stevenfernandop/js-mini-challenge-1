
function scoreChecker(score) {
  // Tulis kodingan dibawah ini
 if(score >= 90 && score < 100){
   return('Selamat! Anda mendapatkan, Nilai A');
 }
 else if(score >= 80 && score < 90){
  return('Nilai B');
 }
 else if(score >= 70 && score < 80){
  return('Nilai C');
 }
 else if(score >= 60 && score < 70){
  return('Nilai D');
 }
 else if(score < 60){
  return('Nilai E');
 }
 else{
  console.log('nilai tidak ditemukan');
 }
}

console.log(scoreChecker(92)); // Selamat! Anda mendapatkan nilai A.
console.log(scoreChecker(85)); // Anda mendapatkan nilai B.
console.log(scoreChecker(74)); // Anda mendapatkan nilai C.
console.log(scoreChecker(60)); // Anda mendapatkan nilai D.
console.log(scoreChecker(59)); // Anda mendapatkan nilai E.