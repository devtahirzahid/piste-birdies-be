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

// here to start
// here to start

export const resolvers = {
  Query: {
    books: () => books,
		fetchBirds: async () => {
	    const birds = await Bird.find();
      return birds;
    },
  },
  Mutation: {
  	createBird: async (_, { name }) => {
			const rio = new Bird({ name });
			await rio.save();
			return rio;
  	}
  }
}; 