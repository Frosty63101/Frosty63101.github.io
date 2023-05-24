function unscrambleKey(obfuscatedKey) {
    var key = obfuscatedKey.replace("x", "a")
                          .replace("y", "b")
                          .replace("z", "c")
                          .replace("h", "g")
                          .replace("j", "d")
                          .replace("w", "u")
                          .replace("l", "n");
    return key;
}
