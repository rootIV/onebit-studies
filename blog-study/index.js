import Author from "./Author.js";

const author = new Author("Iotsutug");

const post = author.writePost(
  "Artigo sobre programação",
  "C, C#, C++, Visual Basic, Delphi, Lua, Assembly..."
);

post.addLikes();

post.addComment("Akasem", "Gosto muito de C");
post.addComment("Tagavid", "C# torna tudo mais fácil e agradável!");

console.log(author);
console.log(post);
