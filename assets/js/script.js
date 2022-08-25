// Assignment code here
const passwordEl = document.getElementById('password');
const rangeEl = document.getElementById('range');
const lengthEl = document.getElementById('length');
const upperCaseEl = document.getElementById('uppercase');
const lowerCaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
)



// Add event listener to generate button
generateEl.addEventListener("click", e => {
  e.preventDefault()
  console.log(generatePassword)
  const length = parseInt(lengthEl.value);
  const hasUpper = upperCaseEl.checked;
  const hasLower = lowerCaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;
  passwordEl.innerText = generatePassword(length, hasLower, hasUpper, 
      hasNumbers, hasSymbols)
  });



// Generate Password Function
function generatePassword(length, upper, lower, number, symbol) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (upperCaseEl) charCodes.concat
    (UPPERCASE_CHAR_CODES)
    if (symbolsEl) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
    if (numbersEl) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    
    const passwordCharacters = []
    for (let i = 0; i < length; i++) {
      const characterCode = charCodes[Math.floor(Math.random() *
      charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
  }



  function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i) 
    }
    return array
  }


  
  // Event listener to sync character range and length
lengthEl.addEventListener('input', syncCharacterAmount)
rangeEl.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
  const value = e.target.value
  lengthEl.value = value
  rangeEl.value = value
};