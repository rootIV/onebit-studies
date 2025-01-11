import Comment from "./Comment.js";

class Post {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.comments = [];
    this.createdAt = new Date();
    this.likes = 0;
  }

  addComment(username, content) {
    this.comments.push(new Comment(username, content));
  }

  addLikes() {
    this.likes += Math.floor(Math.random() * 54);
  }
}

export default Post;
