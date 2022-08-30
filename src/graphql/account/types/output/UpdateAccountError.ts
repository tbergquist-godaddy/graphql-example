import { GraphQLObjectType, GraphQLString } from 'graphql';

import ErrorInterface from '../../../common/types/interfaces/Error';

export default new GraphQLObjectType({
  name: 'UpdateAccountError',
  description: 'Response type indicating an error',
  interfaces: [ErrorInterface],
  fields: {
    message: {
      type: GraphQLString,
      resolve: (parent) => parent.toJSON().message,
    },
  },
});
