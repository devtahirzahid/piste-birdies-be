import { Bird } from './models/Bird.js'
import { User } from './models/User.js'

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
   	fetchUsers: async () => {
	    const users = await User.find();
      return users;
    },
  },
  Mutation: {
  	createBird: async (_, { name }) => {
			const rio = new Bird({ name });
			await rio.save();
			return rio;
  	},
  	createUser: async (_, { name }) => {
			const default1 = new User({ name });
			await default1.save();
			return default1;
  	}
  }
}; 