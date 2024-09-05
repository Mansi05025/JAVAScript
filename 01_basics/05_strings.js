// *********** Strings ***********

// Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

// String length
// String charAt()
// String charCodeAt()
// String at()
// String [ ]
// String slice()
// String substring()
// String substr()

// See Also:
// String Search Methods
// String Templates
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()


const name = "samay"
const repoCount = 1

//console.log(name + reopCount + " Value");

console.log('Hello my name is ${name} and  my repo count is ${repoCount}');

const gameName = new String ('PUBGGamne')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne =  "  hello  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://asl.com/asl%20amr"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'))

















