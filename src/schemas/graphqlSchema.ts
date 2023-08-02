import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } from 'graphql';
import { compileAll } from '../controller/compileAll';
import { Request } from 'express';

const TicketType = new GraphQLObjectType({
  name: 'Ticket',
  fields: {
    Section: { type: GraphQLString },
    Row: { type: GraphQLString },
    SeatNumber: { type: GraphQLString },
    Price: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      allTickets: {
        type: new GraphQLList(TicketType),
        resolve: (parent, args, context: { req: Request }, info) => {
          return compileAll(context.req); 
        },
      },
    },
  });

export const schema = new GraphQLSchema({
  query: RootQuery,
});
