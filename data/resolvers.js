import { Author, Post, FortuneCookie } from './connectors';

const resolvers = {
  Query: {
    author(_, args) {
      return Author.find({ where: args });
    },
    getFortuneCookie() {
      return FortuneCookie.getOne();
    },
    authors() {
      return Author.findAll({});
    },
  },
  Author: {
    posts(author) {
      return author.getPosts();
    },
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
  },
  Mutation: {
    createPost: (_, args) => {
      return Post.create(args);
    },
  },
};

export default resolvers;
