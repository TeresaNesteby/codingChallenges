// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.


function LongestWord(sen) {
   var arrayOfWords = sen.split(" ");
   arrayOfWords.sort();

  // code goes here
  return arrayOfWords[0];

}

// keep this function call here
LongestWord("I love dogs") == "love";

