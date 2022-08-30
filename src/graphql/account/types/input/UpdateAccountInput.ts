import { GraphQLInputObjectType, GraphQLString } from 'graphql';

import { Maybe } from '../../../../core';

export type AccountInputType = {
  firstName: Maybe<string>;
  lastName: Maybe<string>;
  telephone: Maybe<string>;
};

export default new GraphQLInputObjectType({
  name: 'UpdateAccount',
  description: 'Input type for updating an account',
  fields: {
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
