var countLetters = function StringCharacterCounter(str) {

// function that removes the spaces from the input and lowcases
  var noSpaces = str.split(' ').join('').toLowerCase();

// function that inputs argument and splits the string into individual letters
  var splitLetters = noSpaces.split('');

// function that identifies unique letters (helloworld -> helowrd)
  // var uniqueLetters = [];
  // for (var i = 0; i < splitLetters.length; i++) {
  //   if (!uniqueLetters.includes(splitLetters[i])) {
  //     uniqueLetters.push(splitLetters[i]);
  //   }
  // }

  uniqueLetters = {};
  for (var i = 0; i < splitLetters.length; i++) {
    if (uniqueLetters[splitLetters[i]] === undefined) {
        uniqueLetters[splitLetters[i]] = 0;
    }
    uniqueLetters[splitLetters[i]] += 1;
  };

  // uniqueLetters = {};
  // for (let i of splitLetters) {
  //   if (uniqueLetters[splitLetters[i]] === undefined) {
  //     uniqueLetters[splitLetters[i]] = 0;
  //   }
  // }

// function that counts the total amount of each unique character
// for (var i = 0; i < uniqueLetters.length; i++) {
//   if (uniqueLetters[i])
// }

// function that pushes the total amount into an object

  return uniqueLetters;

};

console.log(countLetters("lighthouse in the house"));