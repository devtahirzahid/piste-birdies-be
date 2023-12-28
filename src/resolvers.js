import { Bird } from './models/Bird.js'

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
  	createBird: async (_, { name }) => {
			const rio = new Bird({ name });
			await rio.save();
			return rio;
  	}
  }
}; 