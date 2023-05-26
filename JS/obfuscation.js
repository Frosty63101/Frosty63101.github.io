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
    var deobfuscatedStrings = "";
    for (var i = 0; i < inputString.length;) {
        var charCode = inputString.charCodeAt(i);
        charCode += 10; // reverse the character code modification
        deobfuscatedStrings += String.fromCharCode(charCode);
        i++;
        var charCode = inputString.charCodeAt(i);
        charCode -= 10; // reverse the character code modification
        deobfuscatedStrings += String.fromCharCode(charCode);
        i++
    }
    console.log();
    return deobfuscatedStrings;
  }