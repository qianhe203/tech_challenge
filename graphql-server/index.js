const { ApolloServer, gql } = require('apollo-server');
const SongsAPI  = require('./SongsAPI');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Song {
    song: String
    artist: String
    songReleaseDate: String
    playCount: Int
    metricA: Int
    metricB: Int
    metricC: Int
    metricD: Int
    metricE: Int
    metricF: Int
    metricG: Int
    metricH: Int
    metricI: Int
    metricJ: Int
    metricK: Int
    metricL: Int
    metricM: Int
    metricN: Int
    metricO: Int
    metricP: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    songs: [Song]
    orderBySong: [Song]
    orderByArtist: [Song]
    orderBySongReleaseDate: [Song]
    orderByPlayCount: [Song]
    metricA: [Song]
    metricB: [Song]
    metricC: [Song]
    metricD: [Song]
    metricE: [Song]
    metricF: [Song]
    metricG: [Song]
    metricH: [Song]
    metricI: [Song]
    metricJ: [Song]
    metricK: [Song]
    metricL: [Song]
    metricM: [Song]
    metricN: [Song]
    metricO: [Song]
    metricP: [Song]
  }
`;


const resolvers = {
    Query: {
      songs: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.getSongs();
      },
      orderBySong: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.orderBySong();
      },
      orderByArtist: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.orderByArtist();
      },
      orderBySongReleaseDate: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.orderBySongReleaseDate();
      },
      orderByPlayCount: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.orderByPlayCount();
      },
      metricA: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricA();
      },
      metricB: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricB();
      },
      metricC: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricC();
      },
      metricD: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricD();
      },
      metricE: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricE();
      },
      metricF: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricF();
      },
      metricG: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricG();
      },
      metricH: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricH();
      },
      metricI: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricI();
      },
      metricJ: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricJ();
      },
      metricK: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricK();
      },
      metricL: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricL();
      },
      metricM: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricM();
      },
      metricN: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricN();
      },
      metricO: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricO();
      },
      metricP: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.metricP();
      },
    },
  };

const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    dataSources: () => {
        return {
          songsAPI: new SongsAPI(),
        };
    }
    });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});