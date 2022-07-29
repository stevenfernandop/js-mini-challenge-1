function pizzaMozarella(score) {
  // Tulis kodingan dibawah ini

  for(let i = 1 ; i <= score; i++ ){

      if(i % 3 === 0){
          console.log("Pizza");
      }else if(i % 5 === 0){
          console.log("Mozarella");
      }else{
          console.log(i);
      }
  }
}

// Test Case
pizzaMozarella(15);