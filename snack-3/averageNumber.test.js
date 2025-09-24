const { averageNumber } = require("./averageNumber.js");

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  expect(averageNumber([5, 10, 5, 6, 4])).toBe(6);
});
