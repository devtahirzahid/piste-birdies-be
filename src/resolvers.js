import { Bird } from './models/Bird.js'
import User from './models/User.js'

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
  	createUser: async (_, { username, email, password }) => {
      try {
        const newUser = new User({
          username,
          email,
          password,
        });

        await newUser.save();

        // You can omit password from the returned user for security reasons
        const { _id, createdAt, updatedAt } = newUser.toObject();

        return {
          id: _id,
          username,
          email,
          createdAt,
          updatedAt,
        };
      } catch (error) {
        // Handle error, possibly by throwing a custom GraphQL error
        throw new Error('Failed to create user');
      }
    },
  }
}; 