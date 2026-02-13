export function caesarCipher(str, shft) {
  let returnValue = "";
  for (let i = 0; i < str.length; i++) {
    const asciiCode = str.charCodeAt(i);

    if (
      (asciiCode >= 97 && asciiCode <= 122) ||
      (asciiCode >= 65 && asciiCode <= 90)
    ) {
      let shiftedAsciiLetter;
      if (asciiCode >= 97 && asciiCode <= 122) {
        shiftedAsciiLetter = asciiCode - 97 + shft;
        if (shiftedAsciiLetter < 0) {
          shiftedAsciiLetter = shiftedAsciiLetter + 26;
        }
        shiftedAsciiLetter = (shiftedAsciiLetter % 26) + 97;
      } else {
        shiftedAsciiLetter = asciiCode - 65 + shft;
        if (shiftedAsciiLetter < 0) {
          shiftedAsciiLetter = shiftedAsciiLetter + 26;
        }
        shiftedAsciiLetter = (shiftedAsciiLetter % 26) + 65;
      }

      const shiftedLetter = String.fromCharCode(shiftedAsciiLetter);
      returnValue += shiftedLetter;
    } else {
      returnValue += str[i];
    }
  }
  return returnValue;
}
