let s="Hello World!";
console.log('s: ',s);

console.log("Uppercase: ", s.toUpperCase());
console.log("Lowercase: ", s.toLowerCase());
console.log("String Length: ", s.length);
console.log("Substring (0,5): ", s.substring(0, 5));
console.log("Trimmed Version: ", s.trim());
console.log("String Length after trim:", s.trim().length);
console.log("Index of H: ", s.indexOf('H'));
console.log("Letter at index 8: ", s.charAt(8));
console.log("Accessing via []: ", s[8]);
console.log("String starting with Hello: ", s.startsWith('Hello'));
console.log("String ending with World!: ", s.endsWith('World!'));

let sentence = "The quick brown fox jumps over the lazy dog";
console.log("Is Sentence including 'fox'? ", sentence.includes('fox'));
console.log("Is Sentence including 'cat'? ", sentence.includes('cat'));
console.log("Index of dog in the sentence: ", sentence.indexOf('dog'));
console.log("Length of the sentence: ", sentence.length);
console.log("Index of last dog in the sentence: ", sentence.lastIndexOf('dog'));
// x is the 18th index
console.log("Slicing of the Index: ", sentence.slice(0, 19));
console.log("Replacing dog with cat: ", sentence.replace('dog', 'cat'));
console.log("Original Sentence remains unchanged: ", sentence);
let sentence1 = "The quick brown fox dog jumps over the lazy dog";
console.log("Replacing all dogs with cats: ", sentence1.replaceAll('dog','cat'));
let part1='Hello';
let part2='JavaScript';
console.log("Concatenated String: ", part1.concat(' ',part2));
console.log("Concatenated using + : ", part1 + ' ' + part2);
console.log("Splitting the sentence into words: ", sentence.split(' '));
console.log("Splitting the sentence into characters: ", sentence.split(''));
console.log("Splitting the sentece into words: ", sentence.split(' ', 4));
console.log("Splitting the sentence into words: ", sentence.split('jumps'));

let fruits = "Apple,Banana,Mango,Orange,Pineapple";
console.log('Fruits with -',fruits.replaceAll(',', '-'));
let fruitArray = fruits.split(',');
console.log("Fruit Array: ", fruitArray);
console.log("Joining Fruit Array with - : ", fruitArray.join('-'));

let ha='ha';
console.log("Repeating ha 5 times: ", ha.repeat(5));

let number='00000';
console.log('Padding number with 91 at front: ',number.padStart(12,'91'));
console.log('Padding number with 0 at end: ',number.padEnd(10,'z'));