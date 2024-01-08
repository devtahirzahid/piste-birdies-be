import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type Book {
    title: String
    author: String
  }

  type User {
    name: String
  }

  type Query {
    books: [Book]
    fetchBirds: [Bird!]!
    fetchUsers: [User!]!
  }

  type Bird {
    id: ID!
    name: String!
  }  

  type User {
    id: ID!
    name: String!
  }

  type Mutation {
    createUser(name: String!): User
    createBird(name: String!): Bird
  }
`;