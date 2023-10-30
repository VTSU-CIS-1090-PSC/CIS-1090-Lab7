const dictionary = require('./dictionary-long.js');

function binarySearch(needle, haystack) {
    //TODO Add your code here
    return false;
}

console.log("Should all be true:")
console.log(binarySearch("a", dictionary));          //Should be true
console.log(binarySearch("public", dictionary));      //Should be true
console.log(binarySearch("squalls", dictionary));    //Should be true
console.log(binarySearch("squalor", dictionary));    //Should be true
console.log(binarySearch("zyuganov", dictionary));    //Should be true

console.log("")
console.log("Should all be false:")
console.log(binarySearch("squanchy", dictionary));    //Should be false
console.log(binarySearch("plumbus", dictionary));    //Should be false
console.log(binarySearch("fazoodle", dictionary));    //Should be false