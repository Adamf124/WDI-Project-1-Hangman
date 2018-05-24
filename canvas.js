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
   }

      }
  
  start()