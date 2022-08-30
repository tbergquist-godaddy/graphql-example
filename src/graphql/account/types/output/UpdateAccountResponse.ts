import { GraphQLObjectType } from 'graphql';

import Account from './Account';

export default new GraphQLObjectType({
  name: 'UpdateAccountResponse',
  description: 'The update account response',
  fields: {
    account: {
      type: Account,
      resolve: (parent) => {
        return parent;
      },
    },
  },
});
