// Given two strings, write a method to decide if one is a permutation of the other
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
