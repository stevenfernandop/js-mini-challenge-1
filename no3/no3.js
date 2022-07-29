function isAnagram(word1, word2) {
  // Tulis kodingan dibawah ini
  let kata1 = word1.toLowerCase().split('').sort().join('');
  let kata2 = word2.toLowerCase().split('').sort().join('');



  return (kata1 === kata2);
}

// Test Case
console.log(isAnagram('karet', 'raket')); // True
console.log(isAnagram('Balok', 'Lobak')); // True
console.log(isAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort')); // True
console.log(isAnagram('cicak', 'tengkorak')); // False