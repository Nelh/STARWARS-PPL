import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema } from './Schema';

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

let PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Running a GraphQL API server at ${PORT}`));