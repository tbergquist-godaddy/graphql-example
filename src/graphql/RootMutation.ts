import { GraphQLObjectType } from 'graphql';

import updateAccount from './account/mutations/UpdateAccount';

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation',
  fields: {
    updateAccount,
  },
});
