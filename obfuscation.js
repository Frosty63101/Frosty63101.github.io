function unscrambleKey(obfuscatedKeyOne, obfuscatedKeyTwo, obfucatedKeyThree, obfucatedKeyFour) {
    var obfuscatedKey = obfuscatedKeyOne + obfucatedKeyThree + obfuscatedKeyTwo + obfucatedKeyFour;
    var deobfuscatedKey = deobfuscateString(obfuscatedKey);
    return deobfuscatedKey;
}

function wholeKey(obfuscatedKeyOne, obfuscatedKeyTwo, obfucatedKeyThree, obfucatedKeyFour) {
    var obfuscatedKey = obfuscatedKeyOne + obfucatedKeyThree + obfuscatedKeyTwo + obfucatedKeyFour;
    return obfuscatedKey;
}

function deobfuscateString(inputString) {
    var deobfuscatedString = "";
    for (var i = 0; i < inputString.length; i++) {
        var charCode = inputString.charCodeAt(i);
        charCode -= 10; // reverse the character code modification
        deobfuscatedString += String.fromCharCode(charCode);
    }
    return deobfuscatedString;
  }