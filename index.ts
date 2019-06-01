import { GraphQLServer, PubSub } from 'graphql-yoga';
import resolvers from './resolvers';
const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context(request) {
    return {
      pubsub,
      request
    };
  }
});
server.start({ port: process.env.PORT || 4000 }, () => {
  console.log('The server is up!');
});
