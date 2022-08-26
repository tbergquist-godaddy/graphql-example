import { GraphQLObjectType } from 'graphql';

import account from './account/queries/Account';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    account,
  },
});
