function createSlug(title) {
  if (!title) {
    throw new Error("titolo non valido");
  }
}

module.exports = { createSlug };
