import { GraphQLUnionType } from 'graphql';

import UpdateAccountErrorType from './UpdateAccountError';
import UpdateAccountResponse from './UpdateAccountResponse';

export class UpdateAccountError {
  message: string;
  constructor(message: string) {
    this.message = message;
  }

  toJSON(): { message: string } {
    return {
      message: this.message,
    };
  }
}

export default new GraphQLUnionType({
  name: 'UpdateAccountOrError',
  types: [UpdateAccountErrorType, UpdateAccountResponse],
  resolveType: (value) => {
    if (value instanceof UpdateAccountError) {
      return 'UpdateAccountError';
    }
    return 'UpdateAccountResponse';
  },
});
