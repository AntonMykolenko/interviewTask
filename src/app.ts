import * as express from 'express';
import { graphqlHTTP } from 'express-graphql'; 
import { schema } from './schemas/graphqlSchema'; 

const app = express();
app.use(express.json());


app.use(
  '/allTickets',
  graphqlHTTP((req) => ({
    schema: schema,
    graphiql: true,
    context: { req } as unknown as { req: Request },
  }))
);

const port = 3000;
const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

export default server;