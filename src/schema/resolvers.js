import { fakeUsers } from '../data/fakeUsers.js';
import { fakeMovies } from '../data/fakeMovies.js';

export const resolvers = {
  Query: {
    users: () => fakeUsers,
    user: (parent, args) => fakeUsers.find((e) => e.id === args.id),
    movies: () => fakeMovies,
    movie: (parent, args) => fakeMovies.find((e) => e.name === args.name),
  },
  User: {
    
  }
};
