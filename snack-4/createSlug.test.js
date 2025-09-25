const { createSlug } = require("./createSlug.js");

test("La funzione createSlug sostituisce gli spazi con -.", () => {
  expect(createSlug("Questo è un test")).toBe("Questo-è-un-test");
});
