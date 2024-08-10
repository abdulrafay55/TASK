function groupAnagrams(words) {
    const anagramMap = new Map();
    
    words.forEach(word => {
        const sortedWord = word.split('').sort().join('');
        if (!anagramMap.has(sortedWord)) {
            anagramMap.set(sortedWord, []);
        } 
        anagramMap.get(sortedWord).push(word);
    });
    return Array.from(anagramMap.values());
}
const input = ["bat", "tap", "cat", "tab", "pat"];
const output = groupAnagrams(input);

console.log(output);  