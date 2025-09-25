const { isPalindrome } = require("./isPalindrome.js");

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
  expect(isPalindrome("itopinonavevanonipoti")).toBe("itopinonavevanonipoti");
});
