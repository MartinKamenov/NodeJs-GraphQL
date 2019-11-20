const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
type Query {
  hello: String
}
`);

const root = { hello: () => 'Hello world!' };

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(5000, () => console.log('Listening on 5000'));