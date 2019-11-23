const { getAllUsers } = require('./users');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    imageUrl: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      async resolve(parent, args) {
        const users = await getAllUsers();
        return users;
      }
    },
    user: {
      type: UserType,
      args: {
        age: {
          type: GraphQLInt,
        },
        id: {
          type: GraphQLString
        },
        
      },
      async resolve(parent, args) {
        const user = (await getAllUsers()).find((u) => u.id === args.id);
        return user;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});