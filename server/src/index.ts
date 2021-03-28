import express from 'express';
import { graphqlHTTP } from 'express-graphql';
const path = require('path');
import cors from 'cors';
import { schema } from './Schema';

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

// production ready
app.use(express.static(path.join(__dirname, '../public')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Running a GraphQL API server at ${PORT}`));