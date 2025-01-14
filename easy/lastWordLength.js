//! LeetCode Problem #58

/**
 * Return the length fo the final word in a given sentence.
 * @param {String} s A sentence
 * @returns {Int} The length of the final word in the sentence
 */
const lengthOfLastWord = (s) => {
    let arr = s.trim().split(' ')
    return arr[arr.length - 1].length
}

lengthOfLastWord("Hello World")