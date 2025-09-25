const posts = [
  { id: 1, title: "Primo Post", slug: "primo-post" },
  { id: 2, title: "Secondo Post", slug: "secondo-post" },
  { id: 3, title: "Terzo Post", slug: "terzo-post" },
];

function findPostById(postsArray, id) {
  return postsArray.find((post) => post.id === id);
}

module.exports = { posts, findPostById };
