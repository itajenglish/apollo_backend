const typeDefinitions = `
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  id: Int
  title: String
  text: String
  views: Int
  creator: String
  author: Author
}

input PostInput {
  creator: String
  text: String
}

type Query {
  author(firstName: String, lastName: String): Author
  getFortuneCookie: String
  authors: [Author]
}

type Mutation {
  createPost(creator: String, text: String): Post
}

schema {
  query: Query
  mutation: Mutation
}
`;

export default [typeDefinitions];
