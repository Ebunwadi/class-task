// i. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const palindromeChecker = (word) => {
  const initialWord = word.toLowerCase().trim();
  const reversedWord = initialWord.split('').reverse().join('')
  if (initialWord === reversedWord) {
    console.log(`${word} is a palindrome`);
  } else {
    console.log(`${word} is not a palindrome`);
  }
}
palindromeChecker('Ebube')



// ii. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

const countVowels = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  const checkWord = word.toString().toLowerCase().split('')
  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < checkWord.length; j++){
      if(vowels[i]===checkWord[j]) count++
    }

  }
  return count
}

console.log(countVowels('The boys are jumping'));



// iii. Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

const checkDataType = (input) => {
    const checkType = typeof input;
    return `"${input}" is of type ${checkType}`;
}

console.log(checkDataType('array'));



// // iv. Write a JavaScript function to get the number of occurrences of each letter in a specified string.

const getCharacterCount = (str, n) => {
  const strArr = str.toLowerCase().split('');
  const result = {};
  for (char of strArr) {
    if (result.hasOwnProperty(char)) {
        result[char]++;
    } else {
        result[char] = 1;
      }
  }
  if (result[n]) {
    return result[n]
  }
  return 'input a valid character'
    
} 

console.log(getCharacterCount('Adedipupo', 'p'));

