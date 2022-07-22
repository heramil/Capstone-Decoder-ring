const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(shift === 0 || shift === undefined || shift < -25 || shift > 25) return false
    if (!encode) shift = -shift
    if (shift < 0) shift = shift + 26
    input = input.toLowerCase().split("")
    return input.map((char) => {
      if (char.match(/[^a-z]/)) {
        return char
      } else {
        char = char.charCodeAt();
        return String.fromCharCode(((char - 97 + shift) % 26) + 97);
      }
    }).join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
