import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type Book {
    title: String
    author: String
  }

  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
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
    username: String!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    createBird(name: String!): Bird
  }
`;
