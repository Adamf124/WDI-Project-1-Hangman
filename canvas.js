window.onload = function hangman () {

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
console.log(alphabet)
alphabet.toString
console.log(alphabet)

var alphalist = document.createElement('ul')
alphaButtons = document.getElementById('buttons').appendChild(alphalist);

alphabet.forEach(function(letter){
  var li = document.createElement('li');
  alphalist.appendChild(li);
  li.innerHTML += letter;
});
}