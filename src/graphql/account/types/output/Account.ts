import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';

export default new GraphQLObjectType({
  name: 'Account',
  description: 'My account details',
  fields: {
    id: globalID(({ id }): string => id),

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
      resolve: ({ telephone }): string => telephone,
    },
  },
});
