function isPalindrome(word) {
  const letters = word.split("")
  letters.reverse()
  const newReversedLetters = letters.join(``)
  if (newReversedLetters === word) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  make if statment
  split letters and give them id's?
  flip letters via id's
  join letters after flip
  if afterflip = beforeflip
  return true
*/

/*
  Add written explanation of your solution here
  isPalindrome takes in a word 
  if the word cant be flipped and said the same way then return false
  if word can be flipped and said the same way then return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"))
}

module.exports = isPalindrome;
