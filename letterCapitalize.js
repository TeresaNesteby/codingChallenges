// Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

function letterCapitalize(str){

  // split the string into an array
  var words = str.toLowerCase().split(" ");

  // we split the word into two parts and then combine the parts
  // the first part is the first letter which we capitalize and the
  // second part is the rest of the string
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
  }
  console.log(words.join(" "))
  // return the array of words joined into a string
  return words.join(" ");

}

letterCapitalize("hello wOrld from coderbyte");



