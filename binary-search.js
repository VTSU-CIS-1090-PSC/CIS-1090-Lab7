const dictionary = require('./dictionary-long.js');

function binarySearch(needle, haystack) {
    start = 0;
    end = haystack.length - 1;
    while ( start <= end ){
        pos = Math.floor( (start + end) / 2 );
        word = haystack[pos];
        if (word == needle)
            return true;
        else if ( word < needle )
            start = pos + 1;
        else if ( word > needle )
            end = pos - 1;
    }
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