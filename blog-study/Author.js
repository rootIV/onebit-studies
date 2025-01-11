import Post from "./Post.js";

class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }

  writePost(title, body) {
    const newPost = new Post(title, body, this);
    this.posts.push(newPost);

    return newPost;
  }
}

export default Author;
