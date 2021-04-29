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
  }
`;

const data = [ {
    "song": "ymI",
    "artist": "ONE BABY",
    "songReleaseDate": "01/01/2010",
    "playCount": 44,
    "metricA": 8,
    "metricB": 86,
    "metricC": 42,
    "metricD": 96,
    "metricE": 40,
    "metricF": 83,
    "metricG": 72,
    "metricH": 38,
    "metricI": 44,
    "metricJ": 69,
    "metricK": 52,
    "metricL": 22,
    "metricM": 81,
    "metricN": 25,
    "metricO": 96,
    "metricP": 88
  }, {
    "song": "Rare",
    "artist": "MANGO FRUIT",
    "songReleaseDate": "01/01/1900",
    "playCount": 1014,
    "metricA": 53,
    "metricB": 48,
    "metricC": 15,
    "metricD": 10,
    "metricE": 82,
    "metricF": 16,
    "metricG": 84,
    "metricH": 59,
    "metricI": 98,
    "metricJ": 61,
    "metricK": 61,
    "metricL": 68,
    "metricM": 42,
    "metricN": 20,
    "metricO": 2,
    "metricP": 66
  },{
    "song": "Raising Hex xBig Freedia",
    "artist": "KESHA",
    "songReleaseDate": "01/10/1100",
    "playCount": 4167,
    "metricA": 97,
    "metricB": 50,
    "metricC": 97,
    "metricD": 36,
    "metricE": 75,
    "metricF": 94,
    "metricG": 84,
    "metricH": 9,
    "metricI": 92,
    "metricJ": 35,
    "metricK": 51,
    "metricL": 92,
    "metricM": 28,
    "metricN": 26,
    "metricO": 26,
    "metricP": 20
  }];

const resolvers = {
    Query: {
      songs: async (_source, __, { dataSources }) => {
        return dataSources.songsAPI.getSongs();
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
    },
    context: () => {
        return {
          token: 'foo',
        };
    }
    });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});