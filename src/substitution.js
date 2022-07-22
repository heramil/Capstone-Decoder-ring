const substitutionModule = (function () {
    // you can add any code you want within this function scope
    const repeatChar = function(str) {
      for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
          return false;
        }
      }
      return true;
    }
    
    let normalA = "abcdefghijklmnopqrstuvwxyz";
    normalA = normalA.split('');
      
    function substitution(input, alphabet, encode = true) {
      let result = "";
      let matchingLetter;
      let matchingIndex;
      let encodedLetter;
  
      try {
      if (!alphabet || alphabet.length !== 26 || !repeatChar(alphabet)) {
        throw false;
      } else {
          input.toLowerCase().split("").forEach((char) => {
            if (char == " ") {
              result += char;
              return result;
            } else {
              if (encode) {
                matchingLetter = normalA.find((letter) => letter === char);
                matchingIndex = normalA.indexOf(matchingLetter);
                encodedLetter = alphabet[matchingIndex];
            } if (!encode) {
                matchingIndex = alphabet.indexOf(char);
                encodedLetter = normalA[matchingIndex];
            }
                result += encodedLetter;
            }
              }) 
              return result;
            }
      } catch (error) {
        return error;
        }
      }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
