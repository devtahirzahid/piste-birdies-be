import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import express from 'express';
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';

const app = express();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await mongoose.connect('mongodb://127.0.0.1:27017/pistie-birdies-be');

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at: ${url}`);
}

startServer();
