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
  author: Author
}

input PostInput {
  author: String
  text: String
}

type Query {
  author(firstName: String, lastName: String): Author
  getFortuneCookie: String
  authors: [Author]
}

type Mutation {
  createPost(input: PostInput): Post
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
