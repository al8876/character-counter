var countLetters = function StringCharacterCounter(str) {

// function that removes the spaces from the input and lowcases
  var noSpaces = str.split(' ').join('').toLowerCase();

// function that inputs argument and splits the string into individual letters
  var splitLetters = noSpaces.split('');

  // uniqueLetters = {};
  // for (var i = 0; i < splitLetters.length; i++) {
  //   if (!uniqueLetters[splitLetters[i]]) {
  //       uniqueLetters[splitLetters[i]] = 1;
  //   } else {
  //       uniqueLetters[splitLetters[i]] += 1;
  //   }
  // };

  uniqueLetters = {};
  for (var letter of splitLetters) {
    if (!uniqueLetters[letter]) {
      uniqueLetters[letter] = 1;
    } else {
      uniqueLetters[letter] += 1;
    }
  };

  return uniqueLetters;

};

console.log(countLetters("lighthouse in the house"));
