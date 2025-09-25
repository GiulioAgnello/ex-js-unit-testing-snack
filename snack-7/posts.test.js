const { posts, findPostById } = require("./posts.js");

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
  const post = findPostById(posts, 2);
  expect(post).toEqual({ id: 2, title: "Secondo Post", slug: "secondo-post" });
});

test("Ogni post ha le proprietà id, title e slug", () => {
  posts.forEach((post) => {
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("slug");
  });
});

test("L'id passato a findPostById è numerico", () => {
  const id = 1;
  expect(typeof id).toBe("number");
  const post = findPostById(posts, id);
  expect(post).toBeDefined();
});
