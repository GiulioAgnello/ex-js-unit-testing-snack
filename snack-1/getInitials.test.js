const { getInitials } = require("./getInitials.js");

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Giulio Agnello")).toBe("G.A.");
  expect(getInitials("giulio agnello")).toBe("G.A.");
});
