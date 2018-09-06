
// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

function SimpleSymbols(str) {
  // pad the strings so that if a character exists at the beginning
  // of the string for example, we don't get on out-of-bounds error by
  // trying to get the character before it
  var str = '=' + str + '=';

for (i = 0; i < str.length; i++){
  if (str[i].match(/[a-z]+/i) !== null) {
    if (str[i-1] !== '+'  || str[i+1] !== '+'){
        console.log(false)
        return false;
    }

  }

}
 console.log(true)
 return true;
}


SimpleSymbols("+d+=3=+s");






