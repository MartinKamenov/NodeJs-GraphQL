const express = require('express');
const graphqlHTTP = require('express-graphql');
const users = require('./users');
const schema = require('./schema');
const cors = require('cors');
const root = { hello: () => 'Hello world!' };

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.get('/users', (req, res) => {
    res.send(users);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log(`Listening on ${PORT}`));