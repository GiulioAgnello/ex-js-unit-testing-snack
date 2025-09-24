const { createSlug } = require("./createSlug.js");

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
  expect(createSlug("TUTTOINMAIUSCOLO")).toBe("tuttoinmaiuscolo");
});
