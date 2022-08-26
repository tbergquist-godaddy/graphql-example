import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@adeira/graphql-global-id';

export default new GraphQLObjectType({
  name: 'Account',
  description: 'Location type',
  fields: {
    id: globalID(({ id }): string => id),

    name: {
      type: GraphQLString,
      resolve: (): string => 'Test user',
    },
  },
});
