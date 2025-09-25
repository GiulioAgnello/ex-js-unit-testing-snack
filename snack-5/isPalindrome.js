function isPalindrome(leftToRight) {
  const rightToLeft = leftToRight.split("").reverse().join("");
  return rightToLeft;
}

module.exports = { isPalindrome };
