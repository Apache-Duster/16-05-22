function longestWord(string) {
    const stringArray = string.split(" ");
    const sortedWords = stringArray.sort((a, b) => b.length - a.length);
    const maxLength = sortedWords [0].length;
    const result = sortedWords.filter((word) => word.length === maxLength);
    return result.length > 1 ? result : result[0];
}

console.log(longestWord("Hi there my name is Brad"));
console.log(longestWord("My name is Brad"));