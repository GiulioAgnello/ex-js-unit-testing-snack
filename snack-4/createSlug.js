function createSlug(withSpace) {
  const noSpace = withSpace.replaceAll(" ", "-");
  return noSpace;
}

module.exports = { createSlug };
