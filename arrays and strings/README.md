## Arrays and Strings

#### Question 1 - Is Unique: Implement an algorithm to determine if a string has all unique characters
```javascript
let hashMap = []; // initialize a hashmap that will map to the ascii character code of the character
// technically there are about 92 printable characters, so the size of the hashMap would not exceed that
// however, since all characters are considered the size could well end up being 256
function isUnique(str) {
  // for every character in the string
	for(let i = 0; i < str.length; i++) {  	
    const hashIndex = hash(str.substr(i, 1)); // get the hash index
    // if there is somethng in that specific index of the array then we found a duplicate
    if(hashMap[hashIndex]) {
      console.log(str.substr(i, 1)); // duplicated character
    	return false;
    }
  	hashMap[hashIndex] = str.substr(i, 1); // if not then just add this character to the map
  }
  return true;
}
function hash(char) {
	return char.charCodeAt(0);
}
console.log(isUnique('quickredbat')); // true
console.log(isUnique('abcd abcd')); // false
```
#### What if you cannot use additional data structures?
```javascript
function isUnique(str) {
  for(let i = 0; i < str.length; i++) {  	
    const c = str.substr(i, 1); // get the next character
    // iterate for every additional character in the string
    for(let j = i + 1; j < str.length; j++) {
    	// duplicate found
    	if(c === str.substr(j, 1)) {
      	return false;
      }
    }
  }
  return true;
}
```

#### Question 2 - Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
```javascript
function isPermutation(str1, str2) {
	// loop for every character in the second string
  for(let i = 0; i < str2.length; i++) {
    // check chunks of characters equal to the length of the first string
    // if the first string is equal to this chunk then the first string
    // is a permutation of the second
    if(str2.substr(i, str1.length) === str1) {
    	return true;
    }
  }
	return false;
}
console.log(isPermutation('abba', 'ccbbabbac')); // true
console.log(isPermutation('abba', 'ccbbabfbac')); // false
```
