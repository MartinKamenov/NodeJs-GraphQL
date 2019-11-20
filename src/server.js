const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const users = require('./users');

const schema = buildSchema(`
type Query {
  hello: String
}
`);

const root = { hello: () => 'Hello world!' };

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(5000, () => console.log('Listening on 5000'));