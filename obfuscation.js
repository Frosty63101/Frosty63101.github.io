function unscrambleKey(obfuscatedKey) {
    var deobfuscatedKey = deobfuscateString(obfuscatedKey);
    return deobfuscatedKey;
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