function isPalindrome(word) {
  // Write your algorithm here
  // checking for palindrome
  let regex = /[\W_]/g // removes white spaces and non-alphanumeric characters
  let newWord = word.replace(regex, '').split('').reverse().join('')
  console.log(word === newWord)
  return word === newWord
}

isPalindrome('rotato')
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true')
  console.log('=>', isPalindrome('deed'))

  console.log('')

  console.log('Expecting: false')
  console.log('=>', isPalindrome('robot'))
}

module.exports = isPalindrome