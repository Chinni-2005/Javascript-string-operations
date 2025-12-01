// 1.Reverse the string "Amazon". 
let str='Amazon';
let reversedStr = str.split('').reverse().join('');
console.log('Reversed String: ',reversedStr);

// 2. Count the number of vowels in "JavaScript". 
let str2='JavaScript';
let vowelsCount = str2.match(/[aeiou]/gi)?.length || 0;
console.log('Number of vowels in JavaScript: ',vowelsCount);

// 3. Check if the string "racecar" is a palindrome.
let str3='racecar';
let isPalindrome = str3 === str3.split('').reverse().join('');
console.log('Is racecar a palindrome? ',isPalindrome);

// 4.Check if "Madam" is a palindrome (ignore case). 
let str4='Madam';
let isPalindromeIgnoreCase = str4.toLowerCase() === str4.toLowerCase().split('').reverse().join('');
console.log('Is Madam a palindrome (ignore case)? ',isPalindromeIgnoreCase);

// 5. Return the first and last characters of "Hello World". 
let str5='Hello World';
let firstChar = str5.charAt(0);
let lastChar = str5.charAt(str5.length -1);
console.log('First character: ',firstChar);
console.log('Last character: ',lastChar);

// 6.Trim the extra spaces from " Welcome to DSA ". 
let str6 = ' Welcome to DSA ';
let trimmedStr = str6.trim();
console.log('Trimmed String: ',trimmedStr);

// 7. Convert "hello-world" to camelCase.
let str7 = 'hello-world';
let camelCaseStr = str7.split('-').map((word, index) => {
    if(index === 0) return word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}).join('');
console.log('CamelCase String: ',camelCaseStr);

// 8. Find the position of "DSA" in "Welcome to DSA course".
let str8 = 'Welcome to DSA course';
let position = str8.indexOf('DSA');
console.log('Position of DSA: ',position);

// 9. Replace "World" with "Universe" in "Hello World".
let str9 = 'Hello World';
let replacedStr = str9.replace('World', 'Universe');
console.log('Replaced String: ',replacedStr);

// 10. Convert "apple,banana,grape" into an array, then join it back with " | ". 
let str10 = 'apple,banana,grape';
let strArray = str10.split(',');
let joinedStr = strArray.join(' | ');
console.log('Joined String: ',joinedStr);

// 11. Repeat "Na" 4 times followed by " Batman!".
let str11 = 'Na';
let repeatedStr = str11.repeat(4) + ' Batman!';
console.log('Repeated String: ',repeatedStr);

// 12. Replace the first occurrence of "cat" with "dog" in "The cat sat on the cat.". 
let str12 = 'The cat sat on the cat.';
let replacedFirstCat = str12.replace('cat', 'dog');
console.log('Replaced First Cat: ',replacedFirstCat);

// 13. Find the index of "abc" in "xyzabc123".
let str13 = 'xyzabc123';
let indexOfAbc = str13.indexOf('abc');
console.log('Index of abc: ',indexOfAbc);

// 14. Check if "https://google.com" starts with "https" and ends with ".com". 
let str14 = 'https://google.com';
let startsWithHttps = str14.startsWith('https');
let endsWithCom = str14.endsWith('.com');
console.log('Starts with https: ',startsWithHttps);
console.log('Ends with .com: ',endsWithCom);

// 15. Reverse the words in "I am a tech Jashwanth Subscriber". 
let str15 = 'I am a tech Jashwanth Subscriber';
let reversedWords = str15.split(' ').reverse().join(' ');
console.log('reversedWods ',reversedWords);

// 16. Count occurrences of each character in "banana". 
let str16 = 'banana';
let charCount = {};
for(let char of str16){
    charCount[char] = (charCount[char] || 0) + 1;
}
console.log('Character occurrences in banana: ',charCount);

// 17. Convert "2023-10-05" to "October 5, 2023".
let str17 = '2023-10-05';
let [year, month, day] = str17.split('-');
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let formattedDate = `${monthNames[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
console.log('Formatted Date: ',formattedDate);

// 18. Check if "listen" and "silent" are anagrams (ignore case & spaces). 
let str18a = 'listen';
let str18b= 'silent';
let normalize = str => str.toLowerCase().split('').sort().join('');
let areAnagrams = normalize(str18a) === normalize(str18b);
console.log('Are listen and silent anagrams? ',areAnagrams);

// 19. Remove duplicate characters from "programming" (keep order). 
let str19 = 'programming';
let seen = new Set();
let resultStr = '';
for(let char of str19){
    if(!seen.has(char)){
        seen.add(char);
        resultStr += char;
    }
}
console.log('String after removing duplicates: ',resultStr);

// 20. Find the longest word in "Hard work beats talent". 
let str20 = 'Hard work beats talent';
let words = str20.split(' ');
let longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
console.log('Longest word: ',longestWord);

// 21. Capitalize each word in "welcome to javascript". 
let str21 = 'welcome to javascript';
let capitalizedStr = str21.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log('Capitalized String: ',capitalizedStr);

// 22.  Check if "erbottlewat" is a rotation of "waterbottle". 
let str22a = 'erbottlewat';
let str22b = 'waterbottle';
let isRotation = (str22b + str22b).includes(str22a);
console.log('Is erbottlewat a rotation of waterbottle? ',isRotation);

// 23. Find all starting indices of "aba" in "abaabaabab" (return an array of indices). 
let str23 = 'abaabaabab';
let subStr = 'aba';
let indices = [];
for(let i = 0; i <= str23.length - subStr.length; i++){
    if(str23.substring(i, i + subStr.length) === subStr){
        indices.push(i);
    }
}
console.log('Starting indices of aba: ',indices);

// 24. Truncate "JavaScriptDeveloper" to 10 characters and add "...". 
let str24 = 'JavaScriptDeveloper';
let truncatedStr = str24.length > 10 ? str24.substring(0, 10) + '...' : str24;
console.log('Truncated String: ',truncatedStr);

//25.Check if "ace" is a subsequence of "abcde". 
let str25a = 'ace';
let str25b = 'abcde';
let isSubsequence = (sub, main) => {
    let subIndex = 0;
    for(let char of main){
        if(char === sub[subIndex]){
            subIndex++;
        }
        if(subIndex === sub.length) return true;
    }
    return false;
}
let resultSubsequence = isSubsequence(str25a, str25b);
console.log('Is ace a subsequence of abcde? ',resultSubsequence);

//26. Remove all vowels from "Beautiful Day". 
let str26 = "Beautiful Day";
let noVowelsStr = str26.replace(/[aeiouAEIOU]/g, '');
console.log('String without vowels: ', noVowelsStr);

// 27. Find the longest common prefix between "flower", "flow", "flight". 
let str27 = ["flower", "flow", "flight"];
let longestCommonPrefix = (strs) => {
    if (!strs.length) return '';
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (!prefix) return '';
        }
    }
    return prefix;
}
let commonPrefix = longestCommonPrefix(str27);
console.log('Longest common prefix: ', commonPrefix);

// 28. Convert "I love coding" into "I love coding" (remove extra spaces). 
let str28 = "I   love    coding";
let cleanedStr = str28.replace(/\s+/g, ' ').trim();
console.log('Cleaned String: ', cleanedStr);

// 29. Find the most frequent word in "This is a test. This test is simple."
let str29 = "This is a test. This test is simple.";
let words29 = str29.toLowerCase().match(/\b\w+\b/g);
let wordFrequency = {};
for (let word of words29) {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
}
let mostFrequentWord = Object.keys(wordFrequency).reduce((a, b) => wordFrequency[a] > wordFrequency[b] ? a : b);
console.log('Most frequent word: ', mostFrequentWord);

// 30.  Pad "42" to become "000042" using padStart (total length = 6). 
let str30 = "42";
let paddedStr = str30.padStart(6, '0');
console.log('Padded String: ', paddedStr);