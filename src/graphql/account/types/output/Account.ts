import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';

const GraphQLAccount = new GraphQLObjectType({
  name: 'Account',
  description: 'My account details',
  fields: {
    id: globalID(({ customerId }): string => customerId),

    name: {
      type: GraphQLString,
      resolve: ({ firstName, lastName }): string => [firstName, lastName].filter(Boolean).join(' '),
    },

    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },

    telephone: {
      type: GraphQLString,
    },
  },
});

export default GraphQLAccount;
