const { createSlug } = require("./createSlug.js");

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido..", () => {
  expect(() => {
    createSlug("");
  }).toThrow("titolo non valido");
  expect(() => {
    createSlug(null);
  }).toThrow("titolo non valido");
});
