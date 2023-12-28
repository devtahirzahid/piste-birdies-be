import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Bird {
    id: ID!
    name: String!
  }

  type Mutation {
    createBird(name: String!): Bird
  }
`;