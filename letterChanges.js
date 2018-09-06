// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function letterChanges(str) {
 var i;
 var stringOfNumbers = "";

  for (i = 0; i < str.length; i++) {
      var ascii= (str.charCodeAt(i)) + 1
      var newAscii = String.fromCharCode(ascii);
      console.log(newAscii)
      stringOfNumbers+=newAscii
  }

  for (i = 0; i < stringOfNumbers.length; i++) {
      if (stringOfNumbers[i] == "a" || "e" || "i" || "o" || "u"){
        stringOfNumbers[i].toUpperCase();
  }
}


  return stringOfNumbers;
}

console.log(letterChanges("be"))




