// T.T
window.onload = function() {
  let letter = '';
  let currentword = "";
  let lives = 7;
  const secretwords = ['dog','cat','horse','zebra','giraffe','lions','tigers','bears','monkey','snake','wolf','fox'];
  let hiddenwords = [];
  
  function start(){
    console.log('Secret Words: ' + secretwords)
    randomWord()
    
  }
  
  function randomWord(){
    currentword = secretwords[Math.floor(Math.random() * secretwords.length)]
   console.log("current word: " + currentword)
   dashes(currentword)
   console.log('dashes: ' + hiddenwords)
   $('#guessHere').html(hiddenwords)
   }
   // grab current 
   // push to array as dashes
   function dashes(currentword){
     for (let i = 0; i < currentword.length; i++) {
       hiddenwords[i] = "- ";
 
   }
   }
 // buttons to console.log
 function lettergrab(choice) {
  letter = this.id
  console.log('chosen letter:' + letter)
  console.log(this.id)
    return letter
  
  }
  $('.letter').on('click', lettergrab)
  // for each letter in hidden word 
  // created array of hiddenword.split

  function choice(letter) {
    let guess = letter
    let correct = false
    currentword.split("")
    for (let i = 0; i < currentword.length; i++) {
        if (currentword[i] === guess) {
            hiddenwords[i] = guess
            $('#guessHere').text(hiddenwords.join(" "))
          
            correct = true
        }
    }
    if (correct === false) {
        lives--
    }
  }
    start()
      }
  
